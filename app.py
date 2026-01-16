import streamlit as st
import telebot
from telebot import types
import threading

# --- SECRETS ---
try:
    BOT_TOKEN = st.secrets["BOT_TOKEN"]
    ADMIN_GROUP_ID = 1416457518
    WEB_APP_URL = st.secrets["WEB_APP_URL"]
except:
    st.error("❌ BOT_TOKEN yoki ADMIN_GROUP_ID topilmadi!")
    st.stop()

# --- BOT INIT ---
bot = telebot.TeleBot(BOT_TOKEN)
user_state = {}
lock = threading.Lock()

AUTO_REPLY = {
    "salom": "Assalomu alaykum! Qanday yordam bera olaman?",
    "hello": "Hello! How can I help you?",
    "help": "Iltimos, savolingizni yozing, tez orada javob beraman."
}

# --- FOYDALANUVCHI XABARINI QABUL QILISH ---
@bot.message_handler(func=lambda m: True)
def handle_user_message(m):
    uid = m.chat.id
    if uid == ADMIN_GROUP_ID: return
    # Avto-javob
    if uid not in user_state or user_state[uid].get("admin_replied") is False:
        text_lower = (m.text or "").lower()
        replied = False
        for k, v in AUTO_REPLY.items():
            if k in text_lower:
                bot.send_message(uid, v)
                replied = True
                break
        if not replied:
            bot.send_message(uid, "Salom! Sizning xabaringiz adminga yetkazildi ✅")
        info = f"📩 Yangi murojaat\n👤 {m.from_user.full_name}\n🆔 {uid}\n💬 {m.text or 'Fayl / media'}"
        bot.send_message(ADMIN_GROUP_ID, info)
        if m.content_type != "text":
            bot.forward_message(ADMIN_GROUP_ID, uid, m.message_id)
        if uid not in user_state:
            user_state[uid] = {"admin_replied": False}

# --- ADMIN REPLY ---
@bot.message_handler(func=lambda m: m.chat.id == ADMIN_GROUP_ID)
def handle_admin_reply(m):
    if not m.reply_to_message: return
    original = m.reply_to_message.forward_from
    if not original: return
    uid = original.id
    user_state[uid]["admin_replied"] = True
    bot.send_message(uid, f"✉️ Admin javobi:\n\n{m.text or 'Media fayl'}")

# --- START BOT ---
def start_bot():
    bot.infinity_polling()

threading.Thread(target=start_bot, daemon=True).start()

st.success("✅ Support bot ishga tushdi!")
