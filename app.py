import streamlit as st
import telebot
from telebot import types
import threading

# --- SAHIFA SOZLAMALARI ---
st.set_page_config(page_title="Mirzavali Support", page_icon="👤")
st.title("🛡️ Professional Admin Panel")

# --- SECRETS ---
try:
    BOT_TOKEN = st.secrets["BOT_TOKEN"]
    ADMIN_ID = int(st.secrets["ADMIN_GROUP_ID"])
except Exception:
    st.error("❌ Secrets sozlamalarini tekshiring!")
    st.stop()

# --- BOT VA XOTIRA ---
if "bot" not in st.session_state:
    st.session_state.bot = telebot.TeleBot(BOT_TOKEN, parse_mode="HTML")
# Xabarlarni bog'lash uchun xotira (Admin xabar ID -> Foydalanuvchi ID)
if "msg_map" not in st.session_state:
    st.session_state.msg_map = {}

bot = st.session_state.bot

# --- 1. START KOMANDASI (Interaktiv) ---
@bot.message_handler(commands=['start'])
def welcome(m):
    uid = m.chat.id
    markup = types.InlineKeyboardMarkup()
    markup.add(types.InlineKeyboardButton("🌐 Loyihalar", url="https://t.me/shodliktest"))
    
    welcome_text = (
        f"<b>Assalomu alaykum, {m.from_user.first_name}!</b> 👋\n\n"
        f"Siz hozirda <b>Otavaliyev Mirzavali</b> bilan bevosita muloqot chatidasiz.\n\n"
        f"💬 <i>Savolingiz yoki taklifingiz bo'lsa, pastdan yozib qoldiring. "
        f"Mirzavali tez orada sizga javob beradi.</i>"
    )
    bot.send_message(uid, welcome_text, reply_markup=markup)

# --- 2. FOYDALANUVCHI XABARINI ADMINGA YUBORISH ---
@bot.message_handler(func=lambda m: m.chat.id != ADMIN_ID)
def forward_to_admin(m):
    uid = m.chat.id
    user_name = m.from_user.full_name
    
    admin_msg_text = (
        f"📩 <b>Yangi murojaat!</b>\n\n"
        f"👤 <b>Kimdan:</b> {user_name}\n"
        f"🆔 <b>ID:</b> {uid}\n"
        f"💬 <b>Xabar:</b> {m.text if m.text else '[Media]'}"
    )
    
    try:
        # Adminga yuboramiz
        sent_msg = bot.send_message(ADMIN_ID, admin_msg_text)
        
        # ENG MUHIMI: Xabar ID-sini foydalanuvchi ID-si bilan bog'laymiz
        st.session_state.msg_map[sent_msg.message_id] = uid
        
        # Agar rasm bo'lsa, uni ham yuborish
        if m.content_type != 'text':
            bot.forward_message(ADMIN_ID, uid, m.message_id)
            
        bot.send_message(uid, "✅ <b>Xabaringiz yetkazildi.</b>")
    except Exception as e:
        print(f"Xatolik: {e}")

# --- 3. ADMIN JAVOBI (Reply orqali - Matn qidirmaydi!) ---
@bot.message_handler(func=lambda m: m.chat.id == ADMIN_ID)
def admin_reply(m):
    if m.reply_to_message:
        # Xotiradan ushbu xabar kimga tegishli ekanligini olamiz
        target_user_id = st.session_state.msg_map.get(m.reply_to_message.message_id)
        
        if target_user_id:
            try:
                bot.send_message(target_user_id, f"✉️ <b>Mirzavali javob berdi:</b>\n\n{m.text}")
                bot.reply_to(m, "🚀 Javobingiz muvaffaqiyatli yuborildi.")
            except Exception as e:
                bot.reply_to(m, f"❌ Yuborishda xatolik: {e}")
        else:
            # Agar bot o'chib yongan bo'lsa, xotira tozalanadi, shuning uchun fallback (zaxira)
            bot.reply_to(m, "⚠️ Xabar xotirada topilmadi. Iltimos, foydalanuvchining oxirgi xabariga javob bering.")
    else:
        bot.reply_to(m, "☝️ Javob berish uchun foydalanuvchi xabariga <b>Reply</b> qiling.")

# --- BOTNI ISHGA TUSHIRISH ---
def start_bot():
    bot.infinity_polling(skip_pending=True)

if "bot_running" not in st.session_state:
    thread = threading.Thread(target=start_bot, daemon=True)
    thread.start()
    st.session_state.bot_running = True
    st.success("✨ Tizim muvaffaqiyatli yoqildi!")

st.markdown("---")
st.write(f"Admin ID: `{ADMIN_ID}`")
st.write("Bot statusi: **Online** 🟢")
                                

