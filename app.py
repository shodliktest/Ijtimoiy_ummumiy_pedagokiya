import streamlit as st
import telebot
import threading
import re

# --- SAHIFA SOZLAMALARI ---
st.set_page_config(page_title="Telegram Support Bot", page_icon="🤖")
st.title("🤖 Support Bot Boshqaruv Paneli")

# --- SECRETS (Streamlit Dashboarddan olinadi) ---
try:
    BOT_TOKEN = st.secrets["BOT_TOKEN"]
    ADMIN_GROUP_ID = int(st.secrets["ADMIN_GROUP_ID"])
except Exception as e:
    st.error("❌ Xatolik: Secrets topilmadi!")
    st.info("Iltimos, Streamlit Cloud Settings > Secrets qismiga ma'lumotlarni kiriting.")
    st.stop()

# --- BOTNI INITIALIZATSIYA QILISH ---
if "bot" not in st.session_state:
    st.session_state.bot = telebot.TeleBot(BOT_TOKEN)

bot = st.session_state.bot

# --- FOYDALANUVCHI XABARINI QABUL QILISH ---
@bot.message_handler(func=lambda m: m.chat.id != ADMIN_GROUP_ID)
def handle_user_message(m):
    uid = m.chat.id
    name = m.from_user.full_name
    
    # Adminga ma'lumot yuborish (ID ni Markdown formatda beramiz)
    info_text = f"📩 #YangiMurojaat\n👤 Kimdan: {name}\n🆔 ID: `{uid}`\n\n💬 Xabar: {m.text if m.text else 'Media fayl'}"
    
    try:
        # Adminga xabarni yuborish
        bot.send_message(ADMIN_GROUP_ID, info_text, parse_mode="Markdown")
        
        # Agar xabar text bo'lmasa, mediani ham yuborish
        if m.content_type != 'text':
            bot.forward_message(ADMIN_GROUP_ID, uid, m.message_id)
            
        # Foydalanuvchiga tasdiq yuborish
        bot.send_message(uid, "✅ Xabaringiz adminga yetkazildi. Tez orada javob olasiz.")
    except Exception as e:
        print(f"Xatolik yuz berdi: {e}")

# --- ADMIN JAVOBINI YUBORISH ---
@bot.message_handler(func=lambda m: m.chat.id == ADMIN_GROUP_ID)
def handle_admin_reply(m):
    # Admin biror xabarga 'Reply' (javob) berganini tekshirish
    if m.reply_to_message and m.reply_to_message.text:
        try:
            # Xabar ichidan foydalanuvchi ID-sini qidirib topish
            found_ids = re.findall(r"ID: `(\d+)`", m.reply_to_message.text)
            if found_ids:
                target_user_id = int(found_ids[0])
                reply_text = f"✉️ **Admin javobi:**\n\n{m.text}"
                bot.send_message(target_user_id, reply_text, parse_mode="Markdown")
                bot.reply_to(m, "✅ Javob foydalanuvchiga yuborildi.")
            else:
                bot.reply_to(m, "⚠️ Xatolik: Xabar ichida foydalanuvchi ID-si topilmadi.")
        except Exception as e:
            bot.reply_to(m, f"❌ Yuborishda xatolik: {e}")

# --- BOTNI ALOHIDA THREADDA ISHGA TUSHIRISH ---
def start_polling():
    # infinity_polling eng barqaror usul hisoblanadi
    bot.infinity_polling(skip_pending=True)

if "bot_running" not in st.session_state:
    thread = threading.Thread(target=start_polling, daemon=True)
    thread.start()
    st.session_state.bot_running = True
    st.balloons()
    st.success("🚀 Bot muvaffaqiyatli ishga tushdi!")

# --- UI INTERFACE ---
st.write("---")
st.info("Bot hozirda xabarlarni qabul qilmoqda. Sahifani yopishingiz mumkin, bot serverda ishlashda davom etadi.")
st.metric(label="Bot Holati", value="Ishlamoqda ✅")
