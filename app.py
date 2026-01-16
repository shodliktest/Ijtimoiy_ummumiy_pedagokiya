import streamlit as st
import telebot
import threading
import re

# --- SAHIFA SOZLAMALARI ---
st.set_page_config(page_title="Support Bot Panel", page_icon="🤖")
st.title("🤖 Bot Boshqaruv Paneli")

# --- SECRETS ---
try:
    BOT_TOKEN = st.secrets["BOT_TOKEN"]
    ADMIN_GROUP_ID = int(st.secrets["ADMIN_GROUP_ID"])
except Exception as e:
    st.error("❌ Secrets (Token yoki ID) topilmadi!")
    st.stop()

# --- BOT INIT ---
if "bot" not in st.session_state:
    st.session_state.bot = telebot.TeleBot(BOT_TOKEN)

bot = st.session_state.bot

# --- FOYDALANUVCHI XABARI ---
@bot.message_handler(func=lambda m: m.chat.id != ADMIN_GROUP_ID)
def handle_user_message(m):
    uid = m.chat.id
    name = m.from_user.full_name
    text = m.text if m.text else "[Media xabar]"
    
    # Adminga yuboriladigan xabar formati (ID ni aniq ko'rsatamiz)
    info = f"📩 #YangiMurojaat\n👤 Kimdan: {name}\n\n💬 Xabar: {text}\n\n➖➖➖➖➖➖➖➖➖➖\n🆔 ID: {uid}"
    
    try:
        bot.send_message(ADMIN_GROUP_ID, info)
        if m.content_type != 'text':
            bot.forward_message(ADMIN_GROUP_ID, uid, m.message_id)
        bot.send_message(uid, "✅ Xabaringiz yuborildi.")
    except Exception as e:
        print(f"Xatolik: {e}")

# --- ADMIN JAVOBI (TUZATILGAN QISM) ---
@bot.message_handler(func=lambda m: m.chat.id == ADMIN_GROUP_ID)
def handle_admin_reply(m):
    if m.reply_to_message:
        reply_text = m.reply_to_message.text or m.reply_to_message.caption
        if reply_text:
            # ID ni qidirish (Regex yanada moslashuvchan qilindi)
            match = re.search(r"ID:\s*(\d+)", reply_text)
            if match:
                user_id = int(match.group(1))
                try:
                    bot.send_message(user_id, f"✉️ **Admin javobi:**\n\n{m.text}")
                    bot.reply_to(m, "🚀 Javob yetkazildi!")
                except Exception as e:
                    bot.reply_to(m, f"❌ Yuborib bo'lmadi: {e}")
            else:
                bot.reply_to(m, "⚠️ Xatolik: Xabardan foydalanuvchi ID-si (ID: 12345 ko'rinishida) topilmadi.")

# --- BOTNI ISHGA TUSHIRISH ---
def start_bot():
    # non_stop=True o'rniga barqaror infinity_polling
    bot.infinity_polling()

if "bot_running" not in st.session_state:
    thread = threading.Thread(target=start_bot, daemon=True)
    thread.start()
    st.session_state.bot_running = True
    st.success("✅ Bot muvaffaqiyatli ishga tushdi!")

st.info("Bot hozir aktiv holatda. Adminga kelgan xabarga 'Reply' orqali javob bering.")
    
