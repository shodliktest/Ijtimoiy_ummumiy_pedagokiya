import telebot
from telebot import types

# --- CONFIG ---
BOT_TOKEN = "SENING_BOT_TOKEN"
ADMIN_ID = 123456789

bot = telebot.TeleBot(BOT_TOKEN)

# --- START BOSGANDAGI HECH NARSANI KO‘RSATMAYMIZ ---
@bot.message_handler(commands=['start'])
def start(message):
    # Inline tugmalar yaratish
    keyboard = types.InlineKeyboardMarkup(row_width=2)
    info_btn = types.InlineKeyboardButton("ℹ️ Ma'lumot", callback_data="info")
    question_btn = types.InlineKeyboardButton("📩 Savol yo'llash", callback_data="question")
    keyboard.add(info_btn, question_btn)
    
    bot.send_message(
        message.chat.id,
        "Salom! Quyidagi tugmalar orqali botdan foydalanishingiz mumkin:",
        reply_markup=keyboard
    )

# --- INLINE BUTTONS BOSILSA ---
@bot.callback_query_handler(func=lambda call: True)
def handle_buttons(call):
    if call.data == "info":
        info_text = (
            "👋 Assalomu alaykum!\n"
            "Bu bot orqali siz admin bilan bog‘lanishingiz mumkin.\n\n"
            "🔹 Bot kimniki: Shodlik SHodlik\n"
            "🔹 Kimga xabar yuboriladi: Admin\n"
            "🔹 Siz nima qilishingiz mumkin: Oddiy xabar yozish va admin javobini olish"
        )
        bot.answer_callback_query(call.id)
        bot.send_message(call.message.chat.id, info_text)
    elif call.data == "question":
        question_text = (
            "📩 Savol yo‘llash:\n"
            "Oddiy xabar yozing, va admin reply qilsa sizga avtomatik yetadi.\n"
            "Masalan: Siz savol berasiz → Admin reply qiladi → Siz javob olasiz."
        )
        bot.answer_callback_query(call.id)
        bot.send_message(call.message.chat.id, question_text)

# --- FOYDALANUVCHI XABARLARI --- 
@bot.message_handler(func=lambda message: True)
def handle_messages(message):
    user_id = message.from_user.id
    username = message.from_user.username or message.from_user.first_name

    # --- ADMIN XABARLARI ---
    if user_id == ADMIN_ID:
        if message.reply_to_message:
            try:
                original_text = message.reply_to_message.text
                if "Foydalanuvchi ID:" in original_text:
                    target_user_id = int(original_text.split("Foydalanuvchi ID:")[1].split()[0])
                    bot.send_message(target_user_id, f"Admin: {message.text}")
            except Exception as e:
                bot.send_message(ADMIN_ID, f"Xatolik: {e}")
        return

    # --- FOYDALANUVCHI XABARINI ADMINGA JO'NATISH ---
    forward_text = f"Foydalanuvchi @{username} (ID: {user_id}) xabar yubordi:\n\n{message.text}"
    bot.send_message(ADMIN_ID, forward_text)

    # --- FOYDALANUVCHIGA DOIMIY MA'LUMOTNOMA (TUGMALAR BILAN) ---
    keyboard = types.InlineKeyboardMarkup(row_width=2)
    info_btn = types.InlineKeyboardButton("ℹ️ Ma'lumot", callback_data="info")
    question_btn = types.InlineKeyboardButton("📩 Savol yo'llash", callback_data="question")
    keyboard.add(info_btn, question_btn)
    
    bot.send_message(
        user_id,
        "📌 Bu bot orqali siz admin bilan bog‘lanishingiz mumkin. Quyidagi tugmalardan foydalaning:",
        reply_markup=keyboard
    )

# --- BOT POLLING ---
print("Bot ishga tushdi...")
bot.infinity_polling()
