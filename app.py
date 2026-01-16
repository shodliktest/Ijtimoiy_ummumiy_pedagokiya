import streamlit as st
import telebot
from telebot import types
import threading

# Sahifa sarlavhasi
st.set_page_config(page_title="Support Bot Panel", page_icon="🤖")
st.title("🤖 Telegram Support Bot")

# --- SECRETS (Streamlit Dashboarddan olinadi) ---
try:
    BOT_TOKEN = st.secrets["BOT_TOKEN"]
    ADMIN_GROUP_ID = int(st.secrets["ADMIN_GROUP_ID"])
except Exception as e:
    st.error("❌ Secrets sozlamalarida xatolik! BOT_TOKEN yoki ADMIN_GROUP_ID topilmadi.")
    st.info("Iltimos, Streamlit Cloud Dashboard-da 'Settings' > 'Secrets' qismiga ma'lumotlarni qo'shing.")
    st.stop()

# --- BOT INIT ---
# Botni faqat bir marta ishga tushirish uchun cache-dan foydalanamiz
if "bot" not in st.session_state:
    st.session_state.bot = telebot.TeleBot(BOT_TOKEN)

bot = st.session_state.bot
user_state = {}

AUTO_REPLY = {
    "salom": "Assalomu alaykum! Qanday yordam bera olaman?",
    "hello": "Hello! How can I help you?",
    "help": "Iltimos, savolingizni yozing, tez orada javob beraman."
}

# --- FOYDALANUVCHI XABARINI QABUL QILISH ---
@bot.message_handler(func=lambda m: m.chat.id != ADMIN_GROUP_ID)
def handle_user_message(m):
    uid = m.chat.id
    text_lower = (m.text or "").lower()
    
    # Avto-javob mantiqi
    replied = False
    for k, v in AUTO_REPLY.items():
        if k in text_lower:
            bot.send_message(uid, v)
            replied = True
            break
            
    if not replied:
        bot.send_message(uid, "Salom! Sizning xabaringiz adminga yetkazildi ✅")
    
    # Adminga yo'llash (User ID-ni xabar ichida yuboramiz, javob qaytarish oson bo'lishi uchun)
    info = f"📩 #YangiMurojaat\n👤 Kimdan: {m.from_user.full_name}\n🆔 ID: `{uid}`\n💬 Xabar: {m.text or 'Fayl / media'}"
    bot.send_message(ADMIN_GROUP_ID, info, parse_mode="Markdown")
    
    if m.content_type != "text":
        bot.forward_message(ADMIN_GROUP_ID, uid, m.message_id)

# --- ADMIN JAVOBI ---
# Admin javobini ID orqali yuborish (Reply orqali)
@bot.message_handler(func=lambda m: m.chat.id == ADMIN_GROUP_ID)
def handle_admin_reply(m):
    if m.reply_to_message and m.reply_to_message.text:
        # Xabardan User ID-ni qidirib topish (Markdown orqali yuborilgan ID)
        try:
            import re
            ids = re.findall(r"ID: `(\d+)`|🆔 ID: (\d+)", m.reply_to_message.text)
            if ids:
                user_id = int(ids[0][0] or ids[0][1])
                bot.send_message(user_id, f"✉️ **Admin javobi:**\n\n{m.text}", parse_mode="Markdown")
                bot.reply_to(m, "✅ Javob foydalanuvchiga yuborildi.")
            else:
                bot.reply_to(m, "❌ Foydalanuvchi ID-sini aniqlab bo'lmadi.")
        except Exception as e:
            bot.reply_to(m, f"❌ Xatolik: {e}")

# --- BOTNI THREADDA ISHGA TUSHIRISH ---
def run_bot():
    bot.infinity_polling(non_stop=True)

if "bot_running" not in st.session_state:
    thread = threading.Thread(target=run_bot, daemon=True)
    thread.start()
    st.session_state.bot_running = True
    st.success("🚀 Bot muvaffaqiyatli ishga tushdi!")

# --- UI INTERFACE ---
st.write("### Bot holati: Ishlamoqda ✅")
st.info("Bu sahifa botni Streamlit Cloud-da aktiv ushlab turish uchun xizmat qiladi.")
