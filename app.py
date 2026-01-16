import streamlit as st
import telebot
from telebot import types
import threading
import re

# --- SAHIFA SOZLAMALARI ---
st.set_page_config(page_title="Mirzavali Support Bot", page_icon="👨‍💻")
st.title("👨‍💻 Mirzavali Support Control Panel")

# --- SECRETS (Streamlit Dashboarddan olinadi) ---
try:
    BOT_TOKEN = st.secrets["BOT_TOKEN"]
    ADMIN_ID = int(st.secrets["ADMIN_GROUP_ID"])
except Exception as e:
    st.error("Secrets sozlamalari topilmadi! (BOT_TOKEN yoki ADMIN_GROUP_ID)")
    st.stop()

# --- BOTNI INITIALIZATSIYA QILISH ---
if "bot" not in st.session_state:
    st.session_state.bot = telebot.TeleBot(BOT_TOKEN, parse_mode="HTML")

bot = st.session_state.bot

# --- 1. START KOMANDASI (Faqat foydalanuvchi uchun) ---
@bot.message_handler(commands=['start'])
def handle_start(m):
    user_id = m.chat.id
    first_name = m.from_user.first_name
    
    # Siz xohlagan interaktiv kutib olish matni
    welcome_text = (
        f"<b>Assalomu alaykum, {first_name}!</b> 👋\n\n"
        f"Siz <b>Otavaliyev Mirzavali</b> bilan muloqot chatidasiz. 🤝\n\n"
        "Menga o'zingizni qiziqtirgan savollar, takliflar yoki loyiha bo'yicha "
        "murojaatlaringizni yozib qoldirishingiz mumkin. "
        "Men tez orada sizga shaxsan javob beraman!"
    )
    
    # Interaktiv tugma qo'shish (ixtiyoriy)
    markup = types.InlineKeyboardMarkup()
    markup.add(types.InlineKeyboardButton("🌐 Portfolio / Kanal", url="https://t.me/shodliktest"))
    
    bot.send_message(user_id, welcome_text, reply_markup=markup)

# --- 2. FOYDALANUVCHI XABARINI QABUL QILISH ---
@bot.message_handler(func=lambda m: m.chat.id != ADMIN_ID)
def handle_user_msg(m):
    user_id = m.chat.id
    user_name = m.from_user.full_name
    
    # Adminga boradigan maxsus "Control Message"
    # ID_TAG orqali bot reply qilinganda kimga javob berishni aniq biladi
    admin_header = (
        f"📩 <b>Yangi murojaat!</b>\n\n"
        f"👤 <b>Kimdan:</b> {user_name}\n"
        f"🆔 <b>User ID:</b> <code>{user_id}</code>\n"
        f"--------------------------\n"
        f"💬 <b>Xabar:</b> {m.text if m.text else '[Media/Fayl]'}\n\n"
        f"👉 Javob berish uchun <b>ushbu xabarga</b> Reply qiling.\n"
        f"ID_TAG: #{user_id}" 
    )
    
    try:
        # Adminga nazorat xabarini yuborish
        bot.send_message(ADMIN_ID, admin_header)
        
        # Agar rasm yoki fayl bo'lsa, uni alohida forward qilish
        if m.content_type != 'text':
            bot.forward_message(ADMIN_ID, user_id, m.message_id)
            
        # Foydalanuvchiga tasdiq
        bot.send_message(user_id, "✅ Xabaringiz Mirzavaliga yetkazildi.")
    except Exception as e:
        print(f"Forwarding error: {e}")

# --- 3. ADMIN JAVOBI (Reply orqali ID ni aniqlash) ---
@bot.message_handler(func=lambda m: m.chat.id == ADMIN_ID)
def handle_admin_reply(m):
    if m.reply_to_message:
        reply_to_text = m.reply_to_message.text or m.reply_to_message.caption
        
        if reply_to_text:
            # Xabar ichidan ID_TAG ni qidirib topish (eng ishonchli usul)
            match = re.search(r"ID_TAG: #(\d+)", reply_to_text)
            
            if match:
                target_id = int(match.group(1))
                try:
                    bot.send_message(target_id, f"✉️ <b>Mirzavali javob berdi:</b>\n\n{m.text}")
                    bot.reply_to(m, "🚀 Javobingiz yuborildi!")
                except Exception as e:
                    bot.reply_to(m, f"❌ Xatolik: Yuborib bo'lmadi ({e})")
            else:
                bot.reply_to(m, "⚠️ Xatolik: Bu xabardan foydalanuvchi ID-sini topa olmadim. Iltimos, ID yozilgan 'Control Message'ga reply qiling.")
    else:
        bot.reply_to(m, "ℹ️ Foydalanuvchiga javob berish uchun uning xabariga <b>Reply</b> qiling.")

# --- BOTNI THREADDA ISHGA TUSHIRISH ---
def start_polling():
    # skip_pending=True bot o'chiq vaqtida kelgan eski xabarlarni e'tiborsiz qoldiradi
    # Bu API errorlarni kamaytiradi
    bot.infinity_polling(skip_pending=True)

if "bot_thread" not in st.session_state:
    thread = threading.Thread(target=start_polling, daemon=True)
    thread.start()
    st.session_state.bot_thread = True
    st.success("🚀 Support Bot muvaffaqiyatli ishga tushdi!")

st.info("Bot hozirda xabarlarni qabul qilishga tayyor. Admin panel orqali kuzatib borishingiz mumkin.")
