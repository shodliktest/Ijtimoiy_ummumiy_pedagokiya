import telebot
from telebot import types
import json
import os
from datetime import datetime

# ======================== KONFIGURATSIYA ========================
BOT_TOKEN = "SENING_BOT_TOKEN"
ADMIN_ID = 123456789  # O'z Telegram ID'ingizni yozing

bot = telebot.TeleBot(BOT_TOKEN)

# ======================== MA'LUMOTLAR BAZASI ========================
DATA_FILE = "bot_data.json"

def load_data():
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {
        "users": {},
        "messages": [],
        "faq": {
            "Bot qanday ishlaydi?": "Bot orqali siz admin bilan bevosita bog'lanishingiz mumkin. Xabar yuboring va javob kuting.",
            "Qancha vaqtda javob olaman?": "Odatda 24 soat ichida admin javob beradi.",
            "Bot bepul?": "Ha, bot to'liq bepul foydalanish uchun."
        },
        "auto_replies": {
            "salom": "Assalomu alaykum! Sizga qanday yordam bera olaman?",
            "rahmat": "Arzimaydi! Doim yordam berishga tayyorman 😊",
            "xayr": "Xayr, ko'rishguncha! 👋"
        }
    }

def save_data(data):
    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

data = load_data()

# ======================== YORDAMCHI FUNKSIYALAR ========================
def register_user(user_id, username, first_name):
    if str(user_id) not in data["users"]:
        data["users"][str(user_id)] = {
            "username": username,
            "first_name": first_name,
            "join_date": datetime.now().strftime("%Y-%m-%d %H:%M"),
            "message_count": 0,
            "last_message": None
        }
        save_data(data)

def log_message(user_id, message_text, direction="to_admin"):
    data["messages"].append({
        "user_id": user_id,
        "message": message_text,
        "direction": direction,
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    })
    if str(user_id) in data["users"]:
        data["users"][str(user_id)]["message_count"] += 1
        data["users"][str(user_id)]["last_message"] = datetime.now().strftime("%Y-%m-%d %H:%M")
    save_data(data)

def check_auto_reply(message_text):
    text_lower = message_text.lower()
    for keyword, reply in data["auto_replies"].items():
        if keyword in text_lower:
            return reply
    return None

# ======================== FOYDALANUVCHI UCHUN FUNKSIYALAR ========================
@bot.message_handler(commands=['start'])
def start(message):
    user_id = message.from_user.id
    username = message.from_user.username or "Noma'lum"
    first_name = message.from_user.first_name or "Foydalanuvchi"
    
    register_user(user_id, username, first_name)
    
    keyboard = types.InlineKeyboardMarkup(row_width=2)
    info_btn = types.InlineKeyboardButton("ℹ️ Ma'lumot", callback_data="info")
    question_btn = types.InlineKeyboardButton("❓ Savol yo'llash", callback_data="question")
    faq_btn = types.InlineKeyboardButton("📚 FAQ", callback_data="faq")
    profile_btn = types.InlineKeyboardButton("👤 Profilim", callback_data="profile")
    keyboard.add(info_btn, question_btn)
    keyboard.add(faq_btn, profile_btn)
    
    welcome_text = f"👋 Assalomu alaykum, {first_name}!\n\n" \
                   "🤖 Botimizga xush kelibsiz!\n\n" \
                   "Bu bot orqali siz:\n" \
                   "✅ Admin bilan bog'lanishingiz\n" \
                   "✅ Savollaringizga javob olishingiz\n" \
                   "✅ FAQ bo'limidan ma'lumot olishingiz mumkin\n\n" \
                   "👇 Quyidagi tugmalardan foydalaning:"
    
    bot.send_message(message.chat.id, welcome_text, reply_markup=keyboard)

# ======================== CALLBACK QUERY HANDLER ========================
@bot.callback_query_handler(func=lambda call: True)
def handle_callbacks(call):
    user_id = call.from_user.id
    
    # Foydalanuvchi tugmalari
    if call.data == "info":
        info_text = (
            "ℹ️ <b>Bot haqida ma'lumot</b>\n\n"
            "👨‍💼 Bot egasi: Shodlik Shodlik\n"
            "📧 Kontakt: Admin\n"
            "🎯 Maqsad: Foydalanuvchilar va admin o'rtasida aloqa\n\n"
            "🔹 Siz oddiy xabar yozishingiz mumkin\n"
            "🔹 Admin sizga javob beradi\n"
            "🔹 Ba'zi savollarga avtomatik javob beriladi"
        )
        bot.answer_callback_query(call.id)
        bot.send_message(call.message.chat.id, info_text, parse_mode="HTML")
        
    elif call.data == "question":
        question_text = (
            "❓ <b>Savol yo'llash</b>\n\n"
            "Oddiy xabar yozing va adminga yetkaziladi.\n\n"
            "Masalan:\n"
            "• Botning narxi qancha?\n"
            "• Qanday xizmatlar mavjud?\n"
            "• Bog'lanish ma'lumotlari\n\n"
            "Admin javob berganda sizga avtomatik keladi! ✉️"
        )
        bot.answer_callback_query(call.id)
        bot.send_message(call.message.chat.id, question_text, parse_mode="HTML")
        
    elif call.data == "faq":
        show_faq(call.message.chat.id)
        bot.answer_callback_query(call.id)
        
    elif call.data == "profile":
        show_profile(user_id, call.message.chat.id)
        bot.answer_callback_query(call.id)
        
    elif call.data == "back_main":
        start(call.message)
        bot.answer_callback_query(call.id)
    
    # Admin tugmalari
    elif call.data == "admin_panel" and user_id == ADMIN_ID:
        show_admin_panel(call.message.chat.id)
        bot.answer_callback_query(call.id)
        
    elif call.data == "admin_stats" and user_id == ADMIN_ID:
        show_statistics(call.message.chat.id)
        bot.answer_callback_query(call.id)
        
    elif call.data == "admin_users" and user_id == ADMIN_ID:
        show_users(call.message.chat.id)
        bot.answer_callback_query(call.id)
        
    elif call.data == "admin_faq" and user_id == ADMIN_ID:
        manage_faq(call.message.chat.id)
        bot.answer_callback_query(call.id)
        
    elif call.data == "admin_auto_replies" and user_id == ADMIN_ID:
        manage_auto_replies(call.message.chat.id)
        bot.answer_callback_query(call.id)
        
    elif call.data == "admin_broadcast" and user_id == ADMIN_ID:
        bot.answer_callback_query(call.id)
        msg = bot.send_message(call.message.chat.id, "📢 Hammaga yuboriladigan xabarni yozing:")
        bot.register_next_step_handler(msg, broadcast_message)

# ======================== FAQ ========================
def show_faq(chat_id):
    faq_text = "📚 <b>Ko'p so'raladigan savollar (FAQ)</b>\n\n"
    for i, (question, answer) in enumerate(data["faq"].items(), 1):
        faq_text += f"<b>{i}. {question}</b>\n{answer}\n\n"
    
    keyboard = types.InlineKeyboardMarkup()
    back_btn = types.InlineKeyboardButton("🔙 Orqaga", callback_data="back_main")
    keyboard.add(back_btn)
    
    bot.send_message(chat_id, faq_text, parse_mode="HTML", reply_markup=keyboard)

# ======================== PROFIL ========================
def show_profile(user_id, chat_id):
    user_data = data["users"].get(str(user_id), {})
    
    profile_text = (
        f"👤 <b>Sizning profilingiz</b>\n\n"
        f"🆔 ID: <code>{user_id}</code>\n"
        f"👤 Ism: {user_data.get('first_name', 'N/A')}\n"
        f"📱 Username: @{user_data.get('username', 'N/A')}\n"
        f"📅 Qo'shilgan sana: {user_data.get('join_date', 'N/A')}\n"
        f"💬 Yuborilgan xabarlar: {user_data.get('message_count', 0)}\n"
        f"🕐 Oxirgi xabar: {user_data.get('last_message', 'Hali xabar yo\'q')}"
    )
    
    keyboard = types.InlineKeyboardMarkup()
    back_btn = types.InlineKeyboardButton("🔙 Orqaga", callback_data="back_main")
    keyboard.add(back_btn)
    
    bot.send_message(chat_id, profile_text, parse_mode="HTML", reply_markup=keyboard)

# ======================== ADMIN PANEL ========================
def show_admin_panel(chat_id):
    admin_text = (
        "🔐 <b>ADMIN PANEL</b>\n\n"
        "Boshqaruv bo'limi\n"
        "Quyidagi funksiyalardan foydalaning:"
    )
    
    keyboard = types.InlineKeyboardMarkup(row_width=2)
    stats_btn = types.InlineKeyboardButton("📊 Statistika", callback_data="admin_stats")
    users_btn = types.InlineKeyboardButton("👥 Foydalanuvchilar", callback_data="admin_users")
    faq_btn = types.InlineKeyboardButton("📚 FAQ boshqaruvi", callback_data="admin_faq")
    auto_btn = types.InlineKeyboardButton("🤖 Avto-javoblar", callback_data="admin_auto_replies")
    broadcast_btn = types.InlineKeyboardButton("📢 Hammaga xabar", callback_data="admin_broadcast")
    
    keyboard.add(stats_btn, users_btn)
    keyboard.add(faq_btn, auto_btn)
    keyboard.add(broadcast_btn)
    
    bot.send_message(chat_id, admin_text, parse_mode="HTML", reply_markup=keyboard)

def show_statistics(chat_id):
    total_users = len(data["users"])
    total_messages = len(data["messages"])
    
    stats_text = (
        "📊 <b>BOT STATISTIKASI</b>\n\n"
        f"👥 Jami foydalanuvchilar: {total_users}\n"
        f"💬 Jami xabarlar: {total_messages}\n"
        f"📚 FAQ savollari: {len(data['faq'])}\n"
        f"🤖 Avto-javoblar: {len(data['auto_replies'])}\n"
    )
    
    keyboard = types.InlineKeyboardMarkup()
    back_btn = types.InlineKeyboardButton("🔙 Admin Panel", callback_data="admin_panel")
    keyboard.add(back_btn)
    
    bot.send_message(chat_id, stats_text, parse_mode="HTML", reply_markup=keyboard)

def show_users(chat_id):
    users_text = "👥 <b>FOYDALANUVCHILAR RO'YXATI</b>\n\n"
    
    for user_id, user_info in data["users"].items():
        users_text += (
            f"ID: <code>{user_id}</code>\n"
            f"👤 {user_info['first_name']} (@{user_info['username']})\n"
            f"💬 Xabarlar: {user_info['message_count']}\n"
            f"📅 Qo'shilgan: {user_info['join_date']}\n\n"
        )
    
    keyboard = types.InlineKeyboardMarkup()
    back_btn = types.InlineKeyboardButton("🔙 Admin Panel", callback_data="admin_panel")
    keyboard.add(back_btn)
    
    bot.send_message(chat_id, users_text, parse_mode="HTML", reply_markup=keyboard)

def manage_faq(chat_id):
    faq_text = "📚 <b>FAQ BOSHQARUVI</b>\n\n"
    faq_text += "Hozirgi FAQ savollari:\n\n"
    
    for i, (question, answer) in enumerate(data["faq"].items(), 1):
        faq_text += f"{i}. {question}\n"
    
    faq_text += "\n💡 Yangi savol qo'shish uchun:\n/addfaq Savol? | Javob"
    
    keyboard = types.InlineKeyboardMarkup()
    back_btn = types.InlineKeyboardButton("🔙 Admin Panel", callback_data="admin_panel")
    keyboard.add(back_btn)
    
    bot.send_message(chat_id, faq_text, parse_mode="HTML", reply_markup=keyboard)

def manage_auto_replies(chat_id):
    auto_text = "🤖 <b>AVTO-JAVOBLAR BOSHQARUVI</b>\n\n"
    auto_text += "Hozirgi avto-javoblar:\n\n"
    
    for keyword, reply in data["auto_replies"].items():
        auto_text += f"🔑 <code>{keyword}</code>\n💬 {reply}\n\n"
    
    auto_text += "\n💡 Yangi avto-javob qo'shish:\n/addauto kalit_soz | javob matni"
    
    keyboard = types.InlineKeyboardMarkup()
    back_btn = types.InlineKeyboardButton("🔙 Admin Panel", callback_data="admin_panel")
    keyboard.add(back_btn)
    
    bot.send_message(chat_id, auto_text, parse_mode="HTML", reply_markup=keyboard)

# ======================== ADMIN COMMANDS ========================
@bot.message_handler(commands=['admin'])
def admin_command(message):
    if message.from_user.id == ADMIN_ID:
        show_admin_panel(message.chat.id)
    else:
        bot.send_message(message.chat.id, "❌ Sizda admin huquqi yo'q!")

@bot.message_handler(commands=['addfaq'])
def add_faq(message):
    if message.from_user.id != ADMIN_ID:
        return
    
    try:
        text = message.text.replace('/addfaq ', '')
        question, answer = text.split('|')
        data["faq"][question.strip()] = answer.strip()
        save_data(data)
        bot.send_message(message.chat.id, "✅ FAQ qo'shildi!")
    except:
        bot.send_message(message.chat.id, "❌ Format: /addfaq Savol? | Javob")

@bot.message_handler(commands=['addauto'])
def add_auto_reply(message):
    if message.from_user.id != ADMIN_ID:
        return
    
    try:
        text = message.text.replace('/addauto ', '')
        keyword, reply = text.split('|')
        data["auto_replies"][keyword.strip().lower()] = reply.strip()
        save_data(data)
        bot.send_message(message.chat.id, "✅ Avto-javob qo'shildi!")
    except:
        bot.send_message(message.chat.id, "❌ Format: /addauto kalit | javob")

def broadcast_message(message):
    text = message.text
    success = 0
    failed = 0
    
    for user_id in data["users"].keys():
        try:
            bot.send_message(int(user_id), f"📢 <b>Admin xabari:</b>\n\n{text}", parse_mode="HTML")
            success += 1
        except:
            failed += 1
    
    bot.send_message(ADMIN_ID, f"✅ Yuborildi: {success}\n❌ Xatolik: {failed}")

# ======================== XABARLARNI QAYTA ISHLASH ========================
@bot.message_handler(func=lambda message: True)
def handle_messages(message):
    user_id = message.from_user.id
    username = message.from_user.username or "Noma'lum"
    first_name = message.from_user.first_name or "Foydalanuvchi"
    
    register_user(user_id, username, first_name)
    
    # Admin javob berish
    if user_id == ADMIN_ID:
        if message.reply_to_message:
            try:
                original_text = message.reply_to_message.text
                if "ID:" in original_text:
                    target_user_id = int(original_text.split("ID:")[1].split(")")[0].strip())
                    bot.send_message(target_user_id, f"✉️ <b>Admin javobi:</b>\n\n{message.text}", parse_mode="HTML")
                    bot.send_message(ADMIN_ID, "✅ Javob yuborildi!")
                    log_message(target_user_id, message.text, "from_admin")
            except Exception as e:
                bot.send_message(ADMIN_ID, f"❌ Xatolik: {e}")
        return
    
    # Avto-javob tekshirish
    auto_reply = check_auto_reply(message.text)
    if auto_reply:
        bot.send_message(user_id, auto_reply)
    
    # Adminga xabar yuborish
    forward_text = (
        f"📩 <b>Yangi xabar</b>\n\n"
        f"👤 Ism: {first_name}\n"
        f"📱 Username: @{username}\n"
        f"🆔 ID: <code>{user_id}</code>\n\n"
        f"💬 Xabar:\n{message.text}"
    )
    
    bot.send_message(ADMIN_ID, forward_text, parse_mode="HTML")
    log_message(user_id, message.text, "to_admin")
    
    # Foydalanuvchiga tasdiqlash
    keyboard = types.InlineKeyboardMarkup()
    back_btn = types.InlineKeyboardButton("🏠 Bosh menyu", callback_data="back_main")
    keyboard.add(back_btn)
    
    bot.send_message(
        user_id,
        "✅ Xabaringiz adminga yuborildi!\n"
        "Admin tez orada javob beradi. Iltimos kuting...",
        reply_markup=keyboard
    )

# ======================== BOT ISHGA TUSHIRISH ========================
if __name__ == "__main__":
    print("🤖 Bot ishga tushdi...")
    print(f"👤 Admin ID: {ADMIN_ID}")
    print("⏳ Xabarlar kutilmoqda...")
    bot.infinity_polling()
