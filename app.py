import streamlit as st
import telebot
from telebot import types
import threading
import re

# --- SAHIFA SOZLAMALARI ---
st.set_page_config(page_title="Mirzavali Support System", page_icon="👨‍💻")
st.title("🚀 Professional Support Bot Paneli")

# --- SECRETS ---
try:
    BOT_TOKEN = st.secrets["BOT_TOKEN"]
    ADMIN_ID = int(st.secrets["ADMIN_GROUP_ID"])
except Exception:
    st.error("❌ Secrets sozlamalari topilmadi! (BOT_TOKEN va ADMIN_GROUP_ID)")
    st.stop()

# --- BOTNI BOSHLAHS ---
if "bot" not in st.session_state:
    st.session_state.bot = telebot.TeleBot(BOT_TOKEN, parse_mode="HTML")

bot = st.session_state.bot

# --- 1. START KOMANDASI ---
@bot.message_handler(commands=['start'])
def send_welcome(m):
    uid = m.chat.id
    # Foydalanuvchiga interaktiv kutib olish
    markup = types.ReplyKeyboardMarkup(resize_keyboard=True)
    markup.add(types.KeyboardButton("📩 Savol yo'llash"), types.KeyboardButton("ℹ️ Ma'lumot"))
    
    welcome_text = (
        f"<b>Assalomu alaykum, {m.from_user.first_name}!</b>\n\n"
        f"Siz <b>Otavaliyev Mirzavali</b> bilan muloqot botidasiz. 🤝\n"
        f"Bu yerda siz o'z savollaringizni, takliflaringizni yoki loyiha bo'yicha "
        f"murojaatlaringizni qoldirishingiz mumkin.\n\n"
        f"<i>Iltimos, xabaringizni yozing va biz tez orada javob beramiz.</i>"
    )
    bot.send_message(uid, welcome_text, reply_markup=markup)

# --- 2. FOYDALANUVCHI XABARLARI ---
@bot.message_handler(func=lambda m: m.chat.id != ADMIN_ID)
def get_user_messages(m):
    uid = m.chat.id
    name = m.from_user.full_name
    
    # Adminga boradigan xabarni shakllantirish (ID ni aniq qilib)
    admin_info = (
        f"🔔 <b>Yangi xabar keldi!</b>\n"
        f"👤 <b>Kimdan:</b> {name}\n"
        f"🆔 <b>ID:</b> <code>{uid}</code>\n"
        f"➖➖➖➖➖➖➖➖➖➖\n"
        f"💬 <b>Xabar:</b> {m.text if m.text else '[Media fayl/Rasm]'}"
    )
    
    try:
        # Adminga xabar va foydalanuvchi ID sini yuborish
        bot.send_message(ADMIN_ID, admin_info)
        
        # Agar rasm yoki fayl bo'lsa, uni ham yuborish
        if m.content_type != 'text':
            bot.forward_message(ADMIN_ID, uid, m.message_id)
            
        bot.send_message(uid, "✅ <b>Xabaringiz qabul qilindi.</b> Admin javobini kuting.")
    except Exception as e:
        st.error(f"Xabar yuborishda xatolik: {e}")

# --- 3. ADMIN JAVOBI (REPLY ORQALI) ---
@bot.message_handler(func=lambda m: m.chat.id == ADMIN_ID)
def handle_admin_reply(m):
    if m.reply_to_message:
        # Xabardan ID ni qidirib topish
        orig_text = m.reply_to_message.text or m.reply_to_message.caption
        if orig_text:
            match = re.search(r"ID:\s*(\d+)", orig_text)
            if match:
                user_id = int(match.group(1))
                try:
                    bot.send_message(user_id, f"✉️ <b>Admin javobi:</b>\n\n{m.text}")
                    bot.reply_to(m, "✅ Foydalanuvchiga yuborildi!")
                except Exception as e:
                    bot.reply_to(m, f"❌ Yuborishda xatolik: {e}")
            else:
                bot.reply_to(m, "⚠️ Xatolik: Xabardan foydalanuvchi ID sini topa olmadim.")
    else:
        bot.reply_to(m, "ℹ️ Foydalanuvchiga javob berish uchun uning xabariga <b>Reply</b> qiling.")

# --- BOTNI FONDA ISHLATISH ---
def start_polling():
    bot.infinity_polling()

if "bot_running" not in st.session_state:
    thread = threading.Thread(target=start_polling, daemon=True)
    thread.start()
    st.session_state.bot_running = True
    st.success("🤖 Bot ishlamoqda...")

# --- UI QISMI ---
st.info("Bu bot Otavaliyev Mirzavali uchun maxsus yaratildi.")
st.write("Bot holati: **Aktiv** ✅")
