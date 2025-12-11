// ===== PAROL TIZIMI =====
const AUTH_KEY = 'test_ijtimoiyyashodlikauthenticated';
const VALID_CREDENTIALS = {
    username: '11114444',
    password: '11114444'
};

// ===== TEST SAVOLLARI (400 TA) =====
const questionsData = [
  {
    question: "Quyidagilardan qaysi biri ijtimoiylashuvning asosiy omili hisoblanadi?",
    options: [
      "Iqlim sharoiti",
      "Texnik vositalar",
      "Oila",
      "Tabiiy resurslar"
    ],
    correctAnswer: "Oila"
  },
  {
    question: "Ijtimoiylashuv jarayonida bolaning birlamchi tarbiyachisi kim hisoblanadi?",
    options: [
      "Qo'shnilar",
      "Ota-ona",
      "Mahalla qo'mitasi",
      "Do'stlari"
    ],
    correctAnswer: "Ota-ona"
  },
  {
    question: "Insonning jamiyatda o'z o'rnini topishi va ijtimoiy tajribani o'zlashtirish jarayoni nima deb ataladi?",
    options: [
      "Adaptatsiya",
      "Kommunikatsiya",
      "Ijtimoiylashuv",
      "Integratsiya"
    ],
    correctAnswer: "Ijtimoiylashuv"
  },
  {
    question: "Maktab ijtimoiylashuvning qaysi omiliga kiradi?",
    options: [
      "Ta'lim muassasalari",
      "Axborot vositalari",
      "Biologik omillar",
      "Mahsulot ishlab chiqarish jarayoni"
    ],
    correctAnswer: "Ta'lim muassasalari"
  },
  {
    question: "O'zbekistonda amalga oshirilayotgan islohotlarning asosiy maqsadi nima?",
    options: [
      "Faqat iqtisodiy foyda olish",
      "Jamiyat farovonligi va taraqqiyotini ta'minlash",
      "Tashqi qarzlarni ko'paytirish",
      "Faqat shaxsiy manfaatlarni koʻzlash"
    ],
    correctAnswer: "Jamiyat farovonligi va taraqqiyotini ta'minlash"
  },
  {
    question: "Ta'lim sohasidagi islohotlarning asosiy yo'nalishi qaysi?",
    options: [
      "Faqat chet tillarini bekor qilish",
      "Maktablarni yopish",
      "Sifatli ta'lim tizimini yaratish",
      "O'quvchilar sonini kamaytirish"
    ],
    correctAnswer: "Sifatli ta'lim tizimini yaratish"
  },
  {
    question: "Sog'liqni saqlash sohasidagi islohotlarning asosiy maqsadi nima?",
    options: [
      "Sog'lom avlodni shakllantirish",
      "Faqat xususiy tibbiyotni rivojlantirish",
      "Tibbiy sug'urtani bekor qilish",
      "Kasalliklarni yashirish"
    ],
    correctAnswer: "Sog'lom avlodni shakllantirish"
  },
  {
    question: "Iqtisodiy sohada olib borilayotgan islohotlarning natijasi sifatida nimalar ko'zda tutiladi?",
    options: [
      "Davlat monopoliyasini mustahkamlash",
      "Bozor munosabatlarini rivojlantirish va tadbirkorlikni qo'llab-quvvatlash",
      "Chet el investitsiyalarini taqiqlash",
      "Ishsizlikni oshirish"
    ],
    correctAnswer: "Bozor munosabatlarini rivojlantirish va tadbirkorlikni qo'llab-quvvatlash"
  },
  {
    question: "Yoshlar siyosatiga oid islohotlarning asosiy vazifasi qaysi?",
    options: [
      "Yoshlarni xorijga ketishga undash",
      "Yoshlarni bilimli va tashabbuskor etib tarbiyalash",
      "Qarilarning manfaatlarini ustun qo'yish",
      "Yoshlarga cheklovlar qo'yish"
    ],
    correctAnswer: "Yoshlarni bilimli va tashabbuskor etib tarbiyalash"
  },
  {
    question: "Ijtimoiy himoya sohasidagi islohotlarning asosiy yo'nalishi qaysi?",
    options: [
      "Aholiga ijtimoiy yordamni to'xtatish",
      "Aholining kam ta'minlangan qatlamini qo'llab-quvvatlash",
      "Faqat boy qatlam manfaatlarini himoya qilish",
      "Ijtimoiy ta'minotni qiyinlashtirish"
    ],
    correctAnswer: "Aholining kam ta'minlangan qatlamini qo'llab-quvvatlash"
  },
  {
    question: "Sud-huquq sohasidagi islohotlar nimaga qaratilgan?",
    options: [
      "Qonuniyatsizlikni mustahkamlash",
      "Adolat va qonun ustuvorligini ta'minlash",
      "Fuqarolarning huquqlarini cheklash",
      "Sudlarga bosim o'tkazish"
    ],
    correctAnswer: "Adolat va qonun ustuvorligini ta'minlash"
  },
  {
    question: "Davlat boshqaruvi sohasidagi islohotlarning asosiy yo'nalishi qaysi?",
    options: [
      "Yopiq va nazoratli boshqaruvni kuchaytirish",
      "Ochiq va shaffof boshqaruv tizimini yaratish",
      "Faqat ma'muriy buyruqbozlikni kuchaytirish",
      "Aholi fikrini inkor etish"
    ],
    correctAnswer: "Ochiq va shaffof boshqaruv tizimini yaratish"
  },
  {
    question: "Madaniyat va san'at sohasidagi islohotlarning ahamiyati nimada?",
    options: [
      "Xorij madaniyatiga to'liq o'tish",
      "Milliy qadriyatlarni tiklash va madaniy merosni rivojlantirish",
      "Madaniy merosni buzib tashlash",
      "Faqat zamonaviy san'atni targ'ib qilish"
    ],
    correctAnswer: "Milliy qadriyatlarni tiklash va madaniy merosni rivojlantirish"
  },
  {
    question: "Islohotlarning ijtimoiy hayotga ta'siri qanday ko'rinadi?",
    options: [
      "Aholi turmush darajasining keskin tushishi",
      "Aholining turmush darajasi va hayot sifati oshadi",
      "Jamiyatda tartibsizliklar ko'payadi",
      "Shaxsiy erkinliklar cheklanadi"
    ],
    correctAnswer: "Aholining turmush darajasi va hayot sifati oshadi"
  },
  {
    question: "Mehribonlik va xayr-saxovatning ijtimoiy ahamiyati nimada?",
    options: [
      "Jamiyatni ajratish",
      "Jamiyatda hamjihatlik va birdamlikni mustahkamlash",
      "Xudbinlikni targ'ib qilish",
      "Faqat moddiy manfaatlarni ko'zlash"
    ],
    correctAnswer: "Jamiyatda hamjihatlik va birdamlikni mustahkamlash"
  },
  {
    question: "O'zbek xalqida mehribonlik va saxovatparvarlik qadriyatlari qayerdan kelib chiqqan?",
    options: [
      "Yevropa madaniyatidan",
      "Milliy urf-odat va diniy qadriyatlardan",
      "Faqat iqtisodiy ehtiyojdan",
      "Siyosiy tashviqotdan"
    ],
    correctAnswer: "Milliy urf-odat va diniy qadriyatlardan"
  },
  {
    question: "Mehribonlik uylari qanday vazifani bajaradi?",
    options: [
      "Bolalarni faqat o'qitish",
      "Yordamga muhtoj bolalarni qo'llab-quvvatlash",
      "Kattalarni tarbiyalash",
      "Aholini ish bilan ta'minlash"
    ],
    correctAnswer: "Yordamga muhtoj bolalarni qo'llab-quvvatlash"
  },
  {
    question: "Xayr-saxovat tadbirlarining tarbiyaviy ahamiyati nimada?",
    options: [
      "Moddiy boylik orttirish",
      "O'zaro yordam va insonparvarlikni shakllantiradi",
      "Boshqalarni tanqid qilish",
      "Faollikni kamaytirish"
    ],
    correctAnswer: "O'zaro yordam va insonparvarlikni shakllantiradi"
  },
  {
    question: "Tarixda saxovatpeshaligi bilan mashhur shaxslar kimlar?",
    options: [
      "Aleksandr Makedonskiy, Chingizxon",
      "Alisher Navoiy, Amir Temur",
      "Stalin, Gitler",
      "Nitshe, Freyd"
    ],
    correctAnswer: "Alisher Navoiy, Amir Temur"
  },
  {
    question: "Xayriya faoliyatining asosiy ko'rinishlaridan biri qaysi?",
    options: [
      "Soliqlarni yashirish",
      "Muhtojlarga yordam ko'rsatish va homiylik qilish",
      "Raqobatni kuchaytirish",
      "Shaxsiy manfaatlarni oshirish"
    ],
    correctAnswer: "Muhtojlarga yordam ko'rsatish va homiylik qilish"
  },
  {
    question: "Mehr-muruvvatning ijtimoiy-pedagogik faoliyatdagi o'rni qanday?",
    options: [
      "Bolalarni xudbinlikka o'rgatadi",
      "Bolalarni insonparvarlik va yordamsevarlik ruhida tarbiyalaydi",
      "Faqat nazariy bilimlarni berish",
      "Jazolash usulini kuchaytirish"
    ],
    correctAnswer: "Bolalarni insonparvarlik va yordamsevarlik ruhida tarbiyalaydi"
  },
  {
    question: "Xayr-saxovat tadbirlarini o'tkazishda kimlarning ishtiroki muhim?",
    options: [
      "Faqat xususiy kompaniyalar",
      "Oila, jamoatchilik va ta'lim muassasalari",
      "Hukumatdagi faqat yuqori amaldorlar",
      "Faqat xorijiy tashkilotlar"
    ],
    correctAnswer: "Oila, jamoatchilik va ta'lim muassasalari"
  },
  {
    question: "Mehribonlik va saxovatning madaniy-tarixiy ildizlari qaysi davrlarga borib taqaladi?",
    options: [
      "Yangi davrga",
      "Qadimiy Sharq va islomiy an'analarga",
      "Sotsialistik tuzumga",
      "Eng so'nggi asrlarga"
    ],
    correctAnswer: "Qadimiy Sharq va islomiy an'analarga"
  },
  {
    question: "Mehribonlik va xayr-saxovatning ijtimoiy hayotga ta'siri qanday ko'rinadi?",
    options: [
      "Ijtimoiy kelishmovchiliklar oshadi",
      "Yordamga muhtojlarni qo'llab, jamiyatni barqaror qiladi",
      "Xudbinlik va raqobat kuchayadi",
      "Faqat shaxsiy boylik oshadi"
    ],
    correctAnswer: "Yordamga muhtojlarni qo'llab, jamiyatni barqaror qiladi"
  },
  {
    question: "XI asrda yashab, ma'rifatparvarlik g'oyalari bilan mashhur bo'lgan alloma kim?",
    options: [
      "Alisher Navoiy",
      "Yusuf Xos Hojib",
      "Abu Rayxon Beruniy",
      "Ibn Sino"
    ],
    correctAnswer: "Yusuf Xos Hojib"
  },
  {
    question: "Yusuf Xos Hojibning 'Qutadg'u bilig' asarida asosiy g'oya nima edi?",
    options: [
      "Astrofizika va kimyo sirlari",
      "Axloqiy tarbiya va davlat boshqaruvi masalalari",
      "Faqat she'riy san'atni targ'ib qilish",
      "Harbiy yurishlar tarixi"
    ],
    correctAnswer: "Axloqiy tarbiya va davlat boshqaruvi masalalari"
  },
  {
    question: "Ahmad Yassaviyning pedagogik qarashlari asosan nimaga qaratilgan edi?",
    options: [
      "Faqat harbiy ta'limga",
      "Axloqiy-ruhiy poklik va komillikka intilish",
      "Dunyo molini to'plashga",
      "Siyosiy hokimiyatni egallashga"
    ],
    correctAnswer: "Axloqiy-ruhiy poklik va komillikka intilish"
  },
  {
    question: "XIII asr mutafakkiri Najmiddin Kubro qaysi pedagogik yo'nalishda mashhur?",
    options: [
      "Aqliy zaif bolalar ta'limida",
      "Insonni ma'naviy tarbiyalash va murabbiylik maktabi",
      "Chet tillarini o'qitishda",
      "Jismoniy tarbiyada"
    ],
    correctAnswer: "Insonni ma'naviy tarbiyalash va murabbiylik maktabi"
  },
  {
    question: "Alisher Navoiyning ijtimoiy-pedagogik qarashlari asosan nimaga asoslangan?",
    options: [
      "Zulm va adolatsizlikka",
      "Insonparvarlik, adolat va yoshlarni tarbiyalash",
      "Faqat ilm-fan taraqqiyotiga",
      "Harbiy san'atni rivojlantirishga"
    ],
    correctAnswer: "Insonparvarlik, adolat va yoshlarni tarbiyalash"
  },
  {
    question: "XIX asr ma'rifatparvarlaridan Munis va Ogahiy asarlarida qanday g'oyalar ilgari surilgan?",
    options: [
      "Kolonial siyosatni qo'llab-quvvatlash",
      "Ilm-ma'rifat va milliy o'zlikni saqlash",
      "Qadimiy urf-odatlarni bekor qilish",
      "Faqat diniy ta'limni targ'ib qilish"
    ],
    correctAnswer: "Ilm-ma'rifat va milliy o'zlikni saqlash"
  },
  {
    question: "Abdulla Avloniy pedagogik qarashlarida nimani asosiy deb bilgan?",
    options: [
      "Faqat jismoniy tarbiyani",
      "Tarbiya millat hayoti masalasi ekanini",
      "Chet el ta'sirini butunlay qabul qilishni",
      "Madrasa ta'limini bekor qilishni"
    ],
    correctAnswer: "Tarbiya millat hayoti masalasi ekanini"
  },
  {
    question: "Ma'rifatparvarlar ta'lim-tarbiya jarayonida nimaga katta e'tibor bergan?",
    options: [
      "Faoliyatning moddiy natijasiga",
      "Insonning ma'naviy va axloqiy kamolotiga",
      "Faqat diniy qoidalarni o'rganishga",
      "Hokimiyatni egallashga"
    ],
    correctAnswer: "Insonning ma'naviy va axloqiy kamolotiga"
  },
  {
    question: "XIX asrda ma'rifatparvarlarning xalq orasidagi faoliyati qanday ko'rinishda bo'lgan?",
    options: [
      "Qishloq xo'jaligini rivojlantirishda",
      "Yangi maktablar ochish va savodxonlikni oshirish",
      "Faqat siyosiy targ'ibotda",
      "Harbiy tayyorgarlikda"
    ],
    correctAnswer: "Yangi maktablar ochish va savodxonlikni oshirish"
  },
  {
    question: "Ma'rifatparvarlar ijtimoiy-pedagogik qarashlarida asosiy g'oya qaysi edi?",
    options: [
      "Faqat urf-odatlarni saqlash",
      "Ilm-ma'rifat orqali jamiyatni rivojlantirish",
      "Siyosiy qarshilik ko'rsatish",
      "Izolyatsiyani kuchaytirish"
    ],
    correctAnswer: "Ilm-ma'rifat orqali jamiyatni rivojlantirish"
  },
  {
    question: "Me'yordan chekinish qanday atama bilan ifodalanadi?",
    options: [
      "Adaptatsiya",
      "Deviant xulq",
      "Normalizatsiya",
      "Kommunikatsiya"
    ],
    correctAnswer: "Deviant xulq"
  },
  {
    question: "Me'yorlarning asosiy vazifasi nimadan iborat?",
    options: [
      "O'zaro janjallarni keltirib chiqarish",
      "Jamiyatdagi tartib va barqarorlikni ta'minlash",
      "Shaxsiy manfaatlarni ustun qo'yish",
      "Tartibsizlikni kuchaytirish"
    ],
    correctAnswer: "Jamiyatdagi tartib va barqarorlikni ta'minlash"
  },
  {
    question: "Qaysi holat me'yordan og'ish hisoblanadi?",
    options: [
      "Yaxshi o'qish",
      "Huquqbuzarlik, jinoyat yoki giyohvandlik",
      "Mehnatsevarlik",
      "Ijtimoiy faollik"
    ],
    correctAnswer: "Huquqbuzarlik, jinoyat yoki giyohvandlik"
  },
  {
    question: "Deviant xulqning ijobiy ko'rinishi qaysi?",
    options: [
      "Jinoyatchilik",
      "Ijodkorlik va innovatsion yangiliklar",
      "Alkogolizm",
      "Qoidabuzarlik"
    ],
    correctAnswer: "Ijodkorlik va innovatsion yangiliklar"
  },
  {
    question: "Me'yorlardan og'ishning salbiy oqibatiga qaysi misolni keltirish mumkin?",
    options: [
      "Iqtisodiy o'sish",
      "Jamiyatda beqarorlik va nizolar kelib chiqishi",
      "Madaniy rivojlanish",
      "Texnologik taraqqiyot"
    ],
    correctAnswer: "Jamiyatda beqarorlik va nizolar kelib chiqishi"
  },
  {
    question: "Me'yorlardan og'ishning asosiy sababi nimada bo'lishi mumkin?",
    options: [
      "Kuchli iqtisodiyot",
      "Oilaviy tarbiya, muhit va ijtimoiy omillar",
      "Yuqori ma'lumot darajasi",
      "Sog'lom turmush tarzi"
    ],
    correctAnswer: "Oilaviy tarbiya, muhit va ijtimoiy omillar"
  },
  {
    question: "Ijtimoiy me'yorlarning asosiy turlari qaysilar?",
    options: [
      "Faqat iqtisodiy va siyosiy me'yorlar",
      "Huquqiy, axloqiy, diniy va urf-odat me'yorlari",
      "Faqat harbiy qoidalar",
      "Faqat tabiat qonunlari"
    ],
    correctAnswer: "Huquqiy, axloqiy, diniy va urf-odat me'yorlari"
  },
  {
    question: "Me'yordan ogʻishning oldini olishning muhim yo'li qaysi?",
    options: [
      "Jazolashni kuchaytirish",
      "Tarbiya, profilaktika va sog'lom muhit yaratish",
      "Cheklovlarni bekor qilish",
      "Nazoratni susaytirish"
    ],
    correctAnswer: "Tarbiya, profilaktika va sog'lom muhit yaratish"
  },
  {
    question: "Me'yor va og'ish tushunchalarini o'rganadigan fan qaysi?",
    options: [
      "Matematika va fizika",
      "Sotsiologiya va pedagogika",
      "Astronomiya va geologiya",
      "Tarix va adabiyot"
    ],
    correctAnswer: "Sotsiologiya va pedagogika"
  },
  {
    question: "Bolalarda g'ayriqonuniy hatti-harakatning dastlabki koʻrinishlari qaysilar?",
    options: [
      "Yuqori ijodiy faollik",
      "Mayda intizomsizlik va qoida buzish",
      "Sport musobaqalarida g'alaba",
      "Kitob o'qish"
    ],
    correctAnswer: "Mayda intizomsizlik va qoida buzish"
  },
  {
    question: "Jinoyatchilikning profilaktikasida ijtimoiy pedagogning vazifasi qaysi?",
    options: [
      "Bolalarni qamoqqa olish",
      "Bolani ijtimoiy muhitga moslashtirish",
      "Faqat huquqiy bilimlarni berish",
      "Tinch turishga majburlash"
    ],
    correctAnswer: "Bolani ijtimoiy muhitga moslashtirish"
  },
  {
    question: "Bolalarda g'ayriqonuniy xatti-harakatlarning psixologik sababi nima bo'lishi mumkin?",
    options: [
      "O'ta yuqori intellekt",
      "E'tibor va mehr yetishmasligi",
      "Jismoniy quvvatning ko'pligi",
      "Boy oilada tug'ilish"
    ],
    correctAnswer: "E'tibor va mehr yetishmasligi"
  },
  {
    question: "Bolalar orasida jinoyatchilikning oldini olishda qanday yondashuv samarali?",
    options: [
      "Faqat jazolash",
      "Kompleks pedagogik va psixologik yordam",
      "Faqat diniy ta'lim",
      "Muammoga e'tibor bermaslik"
    ],
    correctAnswer: "Kompleks pedagogik va psixologik yordam"
  },
  {
    question: "Jinoyatchilikning bolalarda eng ko'p uchraydigan shakli qaysi?",
    options: [
      "Terrorizm",
      "O'g'rilik va tajovuzkorlik",
      "Iqtisodiy jinoyatlar",
      "Siyosiy sabotaj"
    ],
    correctAnswer: "O'g'rilik va tajovuzkorlik"
  },
  {
    question: "G'ayriqonuniy hatti-harakatlarning ijtimoiy oqibatlaridan biri qaysi?",
    options: [
      "Jamiyatda osoyishtalik",
      "Jamiyatga moslashuvning qiyinlashishi",
      "Ijtimoiy integratsiya",
      "Fuqarolar faolligining oshishi"
    ],
    correctAnswer: "Jamiyatga moslashuvning qiyinlashishi"
  },
  {
    question: "Bolalarda jinoyatchilikning oldini olishda oilaning vazifasi qanday?",
    options: [
      "Bolani o'z holiga tashlab qo'yish",
      "Sog'lom tarbiya va nazoratni ta'minlash",
      "Faqat moddiy ta'minotni berish",
      "Boshqa oilalar bilan aloqani uzish"
    ],
    correctAnswer: "Sog'lom tarbiya va nazoratni ta'minlash"
  },
  {
    question: "Jinoyatchilik xavfi yuqori boʻlgan bolalar qaysi toifaga ko'proq kiradi?",
    options: [
      "Yuqori daromadli oila farzandlari",
      "Tarbiyasi og'ir va muammoli oilalardan chiqqan bolalar",
      "Sport bilan shug'ullanuvchilar",
      "Iqtidorli bolalar"
    ],
    correctAnswer: "Tarbiyasi og'ir va muammoli oilalardan chiqqan bolalar"
  },
  {
    question: "Bolalarda jinoyatchilikning oldini olishning asosiy yo'nalishi qaysi?",
    options: [
      "Faqat jazolashni kuchaytirish",
      "Profilaktika, reabilitatsiya va ijtimoiy moslashtirish",
      "Bolalarga huquqlarini cheklash",
      "Tarbiyaviy ishlarni to'xtatish"
    ],
    correctAnswer: "Profilaktika, reabilitatsiya va ijtimoiy moslashtirish"
  },
  {
    question: "Giyohvandlik qanday xulq-atvor shakliga kiradi?",
    options: [
      "Ijtimoiy faol xulq-atvor",
      "Deviant xulq-atvor shakliga",
      "Adaptiv xulq-atvor",
      "Ijobiy xulq-atvor"
    ],
    correctAnswer: "Deviant xulq-atvor shakliga"
  },
  {
    question: "Giyohvandlikning asosiy sababi qaysi omil bo'lishi mumkin?",
    options: [
      "Yuqori maoshli ish",
      "Atrof-muhit va salbiy ijtimoiy ta'sir",
      "Sportga bo'lgan qiziqish",
      "Yuqori intellekt darajasi"
    ],
    correctAnswer: "Atrof-muhit va salbiy ijtimoiy ta'sir"
  },
  {
    question: "Giyohvandlikning yoshlar orasida keng tarqalishiga nima sabab bo'ladi?",
    options: [
      "O'qishga bo'lgan qiziqish",
      "Do'stlar ta'siri va qiziqish",
      "Sog'lom turmush tarzi",
      "Oiladagi muhabbat"
    ],
    correctAnswer: "Do'stlar ta'siri va qiziqish"
  },
  {
    question: "Giyohvandlikning ijtimoiy oqibatlaridan biri qaysi?",
    options: [
      "Iqtisodiy rivojlanish",
      "Jinoyatchilik va axloqiy buzilishlarning ko'payishi",
      "Madaniy yuksalish",
      "Tinchlik va osoyishtalik"
    ],
    correctAnswer: "Jinoyatchilik va axloqiy buzilishlarning ko'payishi"
  },
  {
    question: "Giyohvandlikning salomatlikka ta'siri qanday?",
    options: [
      "Immunitetni kuchaytiradi",
      "Markaziy asab tizimini izdan chiqaradi",
      "Jismoniy quvvatni oshiradi",
      "Aqliy qobiliyatni yaxshilaydi"
    ],
    correctAnswer: "Markaziy asab tizimini izdan chiqaradi"
  },
  {
    question: "Giyohvandlikning profilaktikasi nima uchun muhim?",
    options: [
      "Davlat budjetini tejash uchun",
      "Bolalar va yoshlarni zararli odatlardan asrash uchun",
      "Faqat iqtisodiy rivojlanish uchun",
      "Urf-odatlarni saqlash uchun"
    ],
    correctAnswer: "Bolalar va yoshlarni zararli odatlardan asrash uchun"
  },
  {
    question: "Giyohvandlikning psixologik sababi sifatida qaysi holat koʻrsatiladi?",
    options: [
      "Optimistik kayfiyat",
      "Ruhiy bo'shliq va muammolardan qochish",
      "Yuqori iroda kuchi",
      "Sog'lom qiziqishlar"
    ],
    correctAnswer: "Ruhiy bo'shliq va muammolardan qochish"
  },
  {
    question: "Giyohvandlikning oldini olishda ijtimoiy pedagog qanday rol o'ynaydi?",
    options: [
      "Faqat jazo beradi",
      "Tarbiyaviy ishlar va tushuntirishlar olib boradi",
      "Boshqa kasb egalarining ishini bajaradi",
      "Muammoga befarq bo'ladi"
    ],
    correctAnswer: "Tarbiyaviy ishlar va tushuntirishlar olib boradi"
  },
  {
    question: "Giyohvandlikka qarshi kurashda qanday yondashuv samarali hisoblanadi?",
    options: [
      "Faqat cheklovlar qo'yish",
      "Kompleks profilaktik, psixologik va pedagogik choralar",
      "Faqat tibbiy davolash",
      "Muammoga befarq bo'lish"
    ],
    correctAnswer: "Kompleks profilaktik, psixologik va pedagogik choralar"
  },
  {
    question: "Giyohvandlikka berilgan bola yoki yoshni jamiyatga qayta moslashtirish qanday ataladi?",
    options: [
      "Integratsiya",
      "Reabilitatsiya",
      "Adaptatsiya",
      "Deviatsiya"
    ],
    correctAnswer: "Reabilitatsiya"
  },
  {
    question: "Spirtli ichimlik iste'mol qiluvchi o'smirlar bilan ishlashning asosiy maqsadi nima?",
    options: [
      "Ularni do'stlaridan ajratish",
      "Ularni sog'lom turmush tarziga yo'naltirish",
      "Ularni jazolash",
      "Ularga moddiy yordam berish"
    ],
    correctAnswer: "Ularni sog'lom turmush tarziga yo'naltirish"
  },
  {
    question: "O'smirlar orasida spirtli ichimlik iste'molining asosiy sababi qaysi?",
    options: [
      "Yuqori ma'lumotlilik",
      "Do'stlar ta'siri va oilaviy muammolar",
      "Jismoniy quvvatning ko'pligi",
      "Madaniy rivojlanish"
    ],
    correctAnswer: "Do'stlar ta'siri va oilaviy muammolar"
  },
  {
    question: "Spirtli ichimlik iste'mol qiluvchi o'smirlarning xulqida qanday o'zgarishlar ko'proq kuzatiladi?",
    options: [
      "Yaxshi o'qish va odobli bo'lish",
      "Tajovuzkorlik va intizomsizlik",
      "Kamtarlik va sabr-toqat",
      "Sog'lom turmush tarzi"
    ],
    correctAnswer: "Tajovuzkorlik va intizomsizlik"
  },
  {
    question: "Ijtimoiy pedagogning spirtli ichimlik ichuvchi o'smirlar bilan ishidagi asosiy vazifasi qaysi?",
    options: [
      "Ularni yolg'iz qoldirish",
      "Tushuntirish, maslahat va tarbiyaviy ish olib borish",
      "Faqat dars berish",
      "Ularni jazolash"
    ],
    correctAnswer: "Tushuntirish, maslahat va tarbiyaviy ish olib borish"
  },
  {
    question: "Spirtli ichimlik iste'molining o'smir salomatligiga ta'siri qanday?",
    options: [
      "Salomatlikni mustahkamlash",
      "Jismoniy va ruhiy zaiflikni kuchaytiradi",
      "Aqliy qobiliyatni oshiradi",
      "Jismoniy faollikni oshirish"
    ],
    correctAnswer: "Jismoniy va ruhiy zaiflikni kuchaytiradi"
  },
  {
    question: "Spirtli ichimlik iste'mol qiluvchi o'smirlarning ijtimoiy moslashuvi qanday amalga oshiriladi?",
    options: [
      "Faqat moddiy yordam bilan",
      "Reabilitatsiya va profilaktika ishlari orqali",
      "Boshqa yoshlarning ta'siri bilan",
      "Izolyatsiya qilish orqali"
    ],
    correctAnswer: "Reabilitatsiya va profilaktika ishlari orqali"
  },
  {
    question: "Spirtli ichimlikka ruju qo'ygan o'smirlarning o'qishga munosabati qanday bo'ladi?",
    options: [
      "Qiziqish ortadi va intizom yaxshilanadi",
      "Qiziqish pasayadi va intizom buziladi",
      "O'qishga munosabati o'zgarmaydi",
      "Faqat nazariy bilimlarni egallashga qiziqish"
    ],
    correctAnswer: "Qiziqish pasayadi va intizom buziladi"
  },
  {
    question: "Spirtli ichimlik iste'molining oldini olishda eng muhim yondashuv qaysi?",
    options: [
      "O'smirlarni nazoratsiz qoldirish",
      "Sog'lom turmush tarzi targ'iboti va tushuntirish ishlari",
      "Faqat jazo choralarini qo'llash",
      "Muammoga befarq bo'lish"
    ],
    correctAnswer: "Sog'lom turmush tarzi targ'iboti va tushuntirish ishlari"
  },
  {
    question: "O'smirlar orasida spirtli ichimlik iste'molini kamaytirishda qanday faoliyat muhim?",
    options: [
      "Faqat maktabning aralashuvi",
      "Oila, maktab va jamoatchilik hamkorligi",
      "Faqat jazolashni kuchaytirish",
      "Ijtimoiy tarmoqlardagi cheklovlar"
    ],
    correctAnswer: "Oila, maktab va jamoatchilik hamkorligi"
  },
  {
    question: "Spirtli ichimlik iste'mol qiluvchi o'smirlarni ijobiy faoliyatga jalb qilishda qaysi yo'l samarali?",
    options: [
      "Ularni yolg'iz qoldirish",
      "Sport, san'at va madaniyat tadbirlariga jalb qilish",
      "Ularni faqat nazorat ostida ushlab turish",
      "Ular bilan bahslashish"
    ],
    correctAnswer: "Sport, san'at va madaniyat tadbirlariga jalb qilish"
  },
  {
    question: "\"O'z-o'zingni angla\" degan shiorni ilgari surgan va shu bilan ong insonda barcha yovuzlikni yo'qotishi mumkinligini ta'kidlagan qaysi alloma",
    options: [
      "Arastu",
      "Suqrot",
      "Aflotun",
      "Ibn Sino"
    ],
    correctAnswer: "Suqrot"
  },
  {
    question: "Qaysi alloma o'z ta'limotida tarbiyada bola tabiatini hisobga olish tamoyilini asoslab hamda bola tarbiyasini yoshligidan boshlamoq kerak deb ta'kidlaganlar",
    options: [
      "Farobiy",
      "Ibn Sino",
      "Alisher Navoiy",
      "Beruniy"
    ],
    correctAnswer: "Ibn Sino"
  },
  {
    question: "Qaysi alloma inson tarbiyasida asosiy e'tiborni davlatga to'liq bo'ysunishga emas, balki insonning uz manfaatlariga, uning rivojlanishiga qaratadi.",
    options: [
      "Platon",
      "Demokrit",
      "Konfutsiy",
      "Suqrot"
    ],
    correctAnswer: "Demokrit"
  },
  {
    question: "Jamiyatning biologik uzluksizligini ta'minlash, bolalarni dunyoga keltirish oilaning qaysi vazifasiga tegishli",
    options: [
      "oilaning xo'jalik-iqtisodiy vazifasi",
      "oilaning reproduktiv vazifasi",
      "oilaning tarbiyaviy vazifasi",
      "oilaning rekreativ vazifasi"
    ],
    correctAnswer: "oilaning reproduktiv vazifasi"
  },
  {
    question: "Voyaga yetmagan yetim bolalarga ular voyaga yetguncha gamho'rlik qilish va ularga qolgan mol-mulkka qarab turish, ya'ni ma'naviy otalik bu...",
    options: [
      "homiylik",
      "vasiylik",
      "patronaj",
      "mehribonlik"
    ],
    correctAnswer: "vasiylik"
  },
  {
    question: "Adaptasiya atamasi nima degan ma'noni bildiradi",
    options: [
      "chekinish",
      "moslashuv",
      "tarbiyalash",
      "bog'lanish"
    ],
    correctAnswer: "moslashuv"
  },
  {
    question: "Insonning kelgusidagi o'zgarishlarga oldindan tayyorgarlik ko'rishi, ijtimoiy sharoitlar o'zgarishi bilan yurish-turishini o'zgartirishi qanday adaptasiya deyiladi",
    options: [
      "biologik adaptasiya",
      "ijtimoiy adaptasiya",
      "psixologik adaptasiya",
      "fiziologik adaptasiya"
    ],
    correctAnswer: "ijtimoiy adaptasiya"
  },
  {
    question: "Jazolash deganda nimani tushunasiz",
    options: [
      "rag'batlantirish",
      "tarbiyalanuvchining xatti-harakati va faoliyatiga salbiy baho berish",
      "tushuntirish",
      "namuna ko'rsatish"
    ],
    correctAnswer: "tarbiyalanuvchining xatti-harakati va faoliyatiga salbiy baho berish"
  },
  {
    question: "Ko'zi ojiz bolalarga tarbiya berish masalasi bilan pedagogikaning qaysi tarmog'i shug'ullanadi",
    options: [
      "surdopedagogika",
      "tiflopedagogika",
      "oligofrenopedagogika",
      "logopediya"
    ],
    correctAnswer: "tiflopedagogika"
  },
  {
    question: "Umuminsoniy qadriyatlarga sodiqlik deganda nimani tushunasiz",
    options: [
      "faqat shaxsiy manfaatni ko'zlash",
      "adolat, tenglik, ahil qo'shnichilik, insonparvarlik tuyg'ularini avaylash",
      "moddiy boylik to'plash",
      "o'z urf-odatlarini boshqalardan ustun qo'yish"
    ],
    correctAnswer: "adolat, tenglik, ahil qo'shnichilik, insonparvarlik tuyg'ularini avaylash"
  },
  {
    question: "Hozirgi vaqtda qaysi davlatlarda u yoki bu og'ishlarga ega bo'lgan kishilarning jamiyatga integrasiyalashuvi konsepsiyasi amalga oshirilmoqda",
    options: [
      "Osiyo davlatlarida",
      "AQSh va Yevropa davlatlarida",
      "Lotin Amerikasi davlatlarida",
      "Afrika davlatlarida"
    ],
    correctAnswer: "AQSh va Yevropa davlatlarida"
  },
  {
    question: "Me'yordan chetga chiqishni shartli ravishda nechta guruhga ajratsak bo'ladi",
    options: [
      "3 ta",
      "6 ta",
      "5 ta",
      "4 ta"
    ],
    correctAnswer: "6 ta"
  },
  {
    question: "\"Nuqson\" tushunchasi ham mavjud bo'lib, uning nechta turi bor",
    options: [
      "2 ta",
      "4 ta",
      "5 ta",
      "3 ta"
    ],
    correctAnswer: "4 ta"
  },
  {
    question: "Irsiyat deganda nimani tushunasiz",
    options: [
      "tabiiy muhit",
      "ajdodlardan avlodlarga o'tadigan biologik belgilar",
      "tarbiya jarayoni",
      "ijtimoiy muhit"
    ],
    correctAnswer: "ajdodlardan avlodlarga o'tadigan biologik belgilar"
  },
  {
    question: "Insonning ruhiy rivojlanishidagi doimiy yoki vaqtinchalik kamchilik kiradi. Bularga nutq va miya faoliyatining hamda aqliy rivojlanishning buzilishlari xosdir. Bu qaysi nuqson turi",
    options: [
      "jismoniy nuqson",
      "ruhiy nuqson",
      "ijtimoiy nuqson",
      "nutq nuqsoni"
    ],
    correctAnswer: "ruhiy nuqson"
  },
  {
    question: "Bolaning 3 yoshidan 7 yoshigacha bo'lgan davri qanday davr deb ataladi",
    options: [
      "chaqaloqlik davri",
      "maktabgacha tarbiya davri",
      "o'smirlik davri",
      "katta maktab davri"
    ],
    correctAnswer: "maktabgacha tarbiya davri"
  },
  {
    question: "M. A. Galaguzova nechta me'yordan og'ish turlarining tasnifini bergan",
    options: [
      "3 ta",
      "4 ta",
      "5 ta",
      "6 ta"
    ],
    correctAnswer: "4 ta"
  },
  {
    question: "Nimaga tarbiyani ijtimoiy hodisa deymiz",
    options: [
      "faqat oilada amalga oshgani uchun",
      "tarbiya insonning butun umri davomida turli tashqi ta'sirlar natijasida amalga oshadi",
      "faqat maktabda amalga oshgani uchun",
      "u biologik hodisa bo'lgani uchun"
    ],
    correctAnswer: "tarbiya insonning butun umri davomida turli tashqi ta'sirlar natijasida amalga oshadi"
  },
  {
    question: "Umumiy o'rta ma'lumot olishdan chetga chiqish, kasbiy ta'lim olishdan chetga chiqish, o'zlashtirishda orqada qolish. Bular qaysi meyordan og'ish turiga mansub",
    options: [
      "ijtimoiy",
      "pedagogik",
      "ruhiy",
      "ma'naviy"
    ],
    correctAnswer: "pedagogik"
  },
  {
    question: "Yetimlik, xulq-atvor me'yoridan ogʻish, aroqxo'rlik, norkamaniya, taksokomaniya, fohishabozlik, daydilik, o'grilik. Bular qaysi meyordan og'ish turiga mansub",
    options: [
      "pedagogik",
      "ijtimoiy",
      "ruhiy",
      "jismoniy"
    ],
    correctAnswer: "ijtimoiy"
  },
  {
    question: "Odatda, deviatsiyalar qaysi davrida yuzaga keladi",
    options: [
      "chaqaloqlik davrida",
      "o'smirlik davrida",
      "kattalik davrida",
      "keksalik davrida"
    ],
    correctAnswer: "o'smirlik davrida"
  },
  {
    question: "XX- asrning 70-yillarida qaysi davlatda oliy ma'lumotli ijtimoiy pedagoglar tayyorlana boshladi",
    options: [
      "AQShda",
      "Germaniyada",
      "Rossiyada",
      "Fransiyada"
    ],
    correctAnswer: "Germaniyada"
  },
  {
    question: "Qaysi yilda Birlashgan Millatlar Tashkiloti tomonidan 'Bola huquqlari Deklaratsiyasi' qabul qilinadi",
    options: [
      "1948 yilda",
      "1959 yilda",
      "1989 yilda",
      "1992 yilda"
    ],
    correctAnswer: "1959 yilda"
  },
  {
    question: "O'zbekiston Respublikasi qaysi yilda Birlashgan Millatlar Tashkilotiga a'zo bo'ldi va 'Bola huquqlari to'g'risidagi Konvensiya' bo'yicha xalqaro shartnoma tuzdi",
    options: [
      "1990 yilda",
      "1992 yilda",
      "1995 yilda",
      "2001 yilda"
    ],
    correctAnswer: "1992 yilda"
  },
  {
    question: "Pedagogik diagnostika qaysi so 'zdan olingan va nima degan ma'noni anglatadi",
    options: [
      "lotincha - 'tekshirish'",
      "yunoncha - 'bilish, 'aniqlash'",
      "arabcha - 'tarbiyalash'",
      "forscha - 'ko'rsatish'"
    ],
    correctAnswer: "yunoncha - 'bilish, 'aniqlash'"
  },
  {
    question: "Pedagogikaning qaysi sohasi shaxsi va faoliyatida nuqsonlar ko'zga tashlanadigan bolalarni o'qitish va tarbiyalash bilan shug'ullanadi",
    options: [
      "umumiy pedagogika",
      "maxsus pedagogika",
      "ijtimoiy pedagogika",
      "sport pedagogikasi"
    ],
    correctAnswer: "maxsus pedagogika"
  },
  {
    question: "Aqli zaiflikning nechta darajasi bor",
    options: [
      "3 ta",
      "4 ta",
      "5 ta",
      "2 ta"
    ],
    correctAnswer: "4 ta"
  },
  {
    question: "Ko'rishda nuqsoni bo'lgan bolalarning ta'lim-tarbiyasi bilan kim shug'ullanadi",
    options: [
      "Surdopedagog",
      "Tiflopedagog",
      "Oligofrenopedagog",
      "Logoped"
    ],
    correctAnswer: "Tiflopedagog"
  },
  {
    question: "Aqli zaiflikning eng og'ir turi qaysi",
    options: [
      "Debillik",
      "Ideod",
      "Imbesillik",
      "Zaxira"
    ],
    correctAnswer: "Ideod"
  },
  {
    question: "Qaysi yilda O'zbekistonda respublikaning barcha katta shaharlari va viloyatlarida o'z bo'linmalariga ega bo'lgan pedagogik maslahatxonalar tashkil qilindi.",
    options: [
      "1920 yilda",
      "1936 yilda",
      "1950 yilda",
      "1975 yilda"
    ],
    correctAnswer: "1936 yilda"
  },
  {
    question: "To'liq, notoʻliq va qayta tuzilgan (ikkinchi nikoh) oilalar oilaning qaysi turiga koʻra ajratilishi",
    options: [
      "a'zolar soniga ko'ra",
      "to'liqligiga koʻra oila turlari",
      "qarindoshlik darajasiga ko'ra",
      "yetakchilikka ko'ra"
    ],
    correctAnswer: "to'liqligiga koʻra oila turlari"
  },
  {
    question: "Er-xotinning ijtimoiy kelib chiqishiga ko'ra oila turi berilgan qatorni aniqlang",
    options: [
      "to'liq, noto'liq, qayta tuzilgan oila",
      "ishchilar, dehqonlar, xizmatchilar, ziyolilar oilasi, aralash tipdagi oila.",
      "ko'p bolali, kam bolali, farzandsiz oila",
      "patriarxal, matriarxal, demokratik oila"
    ],
    correctAnswer: "ishchilar, dehqonlar, xizmatchilar, ziyolilar oilasi, aralash tipdagi oila."
  },
  {
    question: "Oilada ayol yoki erkak yetakchiligiga ko'ra qanday turi ajratiladi",
    options: [
      "yadro oila, keng oila",
      "bir millatli, baynalmilal oila",
      "er yetakchi bo'lgan oila, xotin yetakchiboʻlgan oila, er va xotin yetakchilikni birga bajaradigan (biarxat) oila",
      "to'liq, noto'liq, qayta tuzilgan oila"
    ],
    correctAnswer: "er yetakchi bo'lgan oila, xotin yetakchiboʻlgan oila, er va xotin yetakchilikni birga bajaradigan (biarxat) oila"
  },
  {
    question: "Birlashgan Millatlar Tashkilotining Bosh Assambleyasi nechanchi yilda 'Inson huquqlari haqidagi umummilliy deklaratsiya' ni qabul qildi",
    options: [
      "1945 yilda",
      "1948 yilda",
      "1959 yilda",
      "1989 yilda"
    ],
    correctAnswer: "1948 yilda"
  },
  {
    question: "Individ so'zining lug'aviy ma'nosi va tushunchasi qaysi javobda to'g'ri berilgan",
    options: [
      "Individ lotincha 'inter' so'zidan olingan boʻlib, 'o'zaro' ma'nosini anglatadi.",
      "Individ lotincha 'individium' so'zidan olingan boʻlib, «boʻlinmas», «alohida shaxs», «yagona» ma'nolarini anglatadi.",
      "Individ yunoncha 'logos' so'zidan olingan boʻlib, 'so'z' ma'nosini anglatadi.",
      "Individ arabcha 'shaxs' so'zidan olingan boʻlib, 'inson' ma'nosini anglatadi."
    ],
    correctAnswer: "Individ lotincha 'individium' so'zidan olingan boʻlib, «boʻlinmas», «alohida shaxs», «yagona» ma'nolarini anglatadi."
  },
  {
    question: "Tarbiya jarayonining eng muhim xususiyati bu...",
    options: [
      "bir kunlik bo'lishi",
      "uzoq muddat davom etishidir",
      "faqat yoshlikda amalga oshishi",
      "faqat kattalikda amalga oshishi"
    ],
    correctAnswer: "uzoq muddat davom etishidir"
  },
  {
    question: "Bolalarga biror fazilatning afzalligi va kishi uchun zarurligi qisqa, aniq qilib tushuntirib beriladi. Bu qaysi tarbiya metodidir",
    options: [
      "mashq",
      "tushuntirish",
      "rag'batlantirish",
      "jazolash"
    ],
    correctAnswer: "Tushuntirish."
  },
  {
    question: "Tarbiya so'zining lug'aviy ma'nosi qaysi qatorda to'g'ri ko'rsatilgan",
    options: [
      "tarbiya - [lotincha - o'rganish]",
      "Tarbiya - [arbcha. - rivojlantirish parvarish qilish, o'stirish o'rgatish ilm berish]ta'lim, axloq-odob va shu kabilarni o'rgatib, singdirib, insonni voyaga yetkazish.",
      "tarbiya - [yunoncha - o'yin]",
      "tarbiya - [forscha - urf-odat]"
    ],
    correctAnswer: "Tarbiya - [arbcha. - rivojlantirish parvarish qilish, o'stirish o'rgatish ilm berish]ta'lim, axloq-odob va shu kabilarni o'rgatib, singdirib, insonni voyaga yetkazish."
  },
  {
    question: "Tarbiyaviy jarayon nima",
    options: [
      "faqat o'qituvchining faoliyati",
      "Jamiyat a'zolarning ijtimoiy tajribasi, xulq-atvori, me'yorlarni o'quvchilarga ongiga singdirish jarayoni.",
      "faqat bolaning o'yin faoliyati",
      "faqat jismoniy mashqlar"
    ],
    correctAnswer: "Jamiyat a'zolarning ijtimoiy tajribasi, xulq-atvori, me'yorlarni o'quvchilarga ongiga singdirish jarayoni."
  },
  {
    question: "Bola (bolalar) tushunchasi izohlangan to'g'ri javobni toping",
    options: [
      "14 yoshgacha bo'lgan shaxs",
      "O'n sakkiz yoshga to'lgunga (voyaga yetgunga) qadar bo'lgan shaxs (shaxslar)",
      "25 yoshgacha bo'lgan shaxs",
      "Faqat maktab yoshidagi shaxs"
    ],
    correctAnswer: "O'n sakkiz yoshga to'lgunga (voyaga yetgunga) qadar bo'lgan shaxs (shaxslar)"
  },
  {
    question: "Biologik ota-onaga ega bo'lgan, biroq ular turli sabablar uning tarbiyasi bilan shug'ullanmaydigan bolalarga nisbatan ijtimoiy pedagogikada qanday ataladi",
    options: [
      "chin yetim",
      "Ijtimoiy yetim",
      "farzandlikka olingan",
      "yolg'iz qolgan"
    ],
    correctAnswer: "Ijtimoiy yetim"
  },
  {
    question: "Dezadaptatsiya nima",
    options: [
      "Moslashuv",
      "Moslasha olmaslik",
      "Integratsiya",
      "Rivojlanish"
    ],
    correctAnswer: "Moslasha olmaslik"
  },
  {
    question: "\"Profilaktika\" so'zining ma'nosi nima",
    options: [
      "davolash",
      "oldini olish",
      "tarbiyalash",
      "ko'rsatish"
    ],
    correctAnswer: "oldini olish"
  },
  {
    question: "Surdopedagogika so'zi qaysi so'zdan olingan va nima degan ma'noni bildiradi",
    options: [
      "yunoncha - 'ko'r'",
      "Lotincha so'zdan olinganbo'lib- \"kar\", \"gung\" ma'nolarini anglatadi.",
      "lotincha - 'zaif'",
      "yunoncha - 'so'z'"
    ],
    correctAnswer: "Lotincha so'zdan olinganbo'lib- \"kar\", \"gung\" ma'nolarini anglatadi."
  },
  {
    question: "Tiflopedagogika so 'zi qaysi so'zdan olingan va nima degan ma'noni anglatadi",
    options: [
      "lotincha - 'kar'",
      "Yunoncha so'zdan olingan bo'lib, \"ko'r\", \"so'qir\"ma'nolarini anglatadi",
      "arabcha - 'tarbiyalash'",
      "forscha - 'o'qitish'"
    ],
    correctAnswer: "Yunoncha so'zdan olingan bo'lib, \"ko'r\", \"so'qir\"ma'nolarini anglatadi"
  },
  {
    question: "Bolalarda mehnatga doir hamda axloqiy vazifalarni hal etishga imkon beradi: mehnatga doir topshiriqni taqsimlash, tasodifiy zaruriyat bilan bog'liqlikda bir-birlariga yordam beradi, umumiy, birgalikdagi ishning sifati uchun intilishadi. Bu mehnatini tashkil etishning qaysi shaklidir",
    options: [
      "individual mehnat",
      "birgalikdagi mehnat",
      "jamoaviy topshiriq",
      "mustaqil ish"
    ],
    correctAnswer: "birgalikdagi mehnat"
  },
  {
    question: "1640- yil Parijda ochilgan tarbiya uyiga kim asos solgan",
    options: [
      "Yan Amos Komenskiy",
      "Vintsento",
      "J.J. Russo",
      "K.D. Ushinskiy"
    ],
    correctAnswer: "Vintsento"
  },
  {
    question: "Shaxslarning bir-biri bilan axborot almashuv tomoni - bu...",
    options: [
      "Perseptiv",
      "Kommunikativ",
      "Interaktiv",
      "Intellektual"
    ],
    correctAnswer: "Kommunikativ"
  },
  {
    question: "Jismoniy chekinishga qanday insonlar guruhi kiradi",
    options: [
      "sportchilar",
      "Kasallar va betoblar, imkoniyati cheklangan insonlar",
      "olimlar",
      "siyosatchilar"
    ],
    correctAnswer: "Kasallar va betoblar, imkoniyati cheklangan insonlar"
  },
  {
    question: "Bolalar submadaniyatining o'ziga xos belgilarini ko'rsating",
    options: [
      "Rasmiy davlat tuzilmasida bo'lishi",
      "Norasnmiy bolalar va o'smirlar birlashmalari kichik guruhlarda shakllanadi",
      "Faqat ota-ona nazoratida bo'lishi",
      "O'zgarishsiz qolishi"
    ],
    correctAnswer: "Norasnmiy bolalar va o'smirlar birlashmalari kichik guruhlarda shakllanadi"
  },
  {
    question: "\"Empatiya\" tushunchasining ma'nosi nima",
    options: [
      "Jazoga tortish",
      "Dunyoni boshqa ko'z bilan ko'rish",
      "Xudbinlik",
      "Muloqotdan qochish"
    ],
    correctAnswer: "Dunyoni boshqa ko'z bilan ko'rish"
  },
  {
    question: "Taksokomanlar, odatda, necha yoshli o'smirlar bo'lib, ular o'z organizmlarining zaharlanishi oqibatlarini tushuna olishmaydi.",
    options: [
      "10-11 yoshli bola",
      "13-14 yoshli bola",
      "16-17 yoshli bola",
      "18-19 yoshli bola"
    ],
    correctAnswer: "13-14 yoshli bola"
  },
  {
    question: "Reabilitasiya xizmatining nechta asosiy vazifalari bor",
    options: [
      "3 ta",
      "6 ta",
      "4 ta",
      "5 ta"
    ],
    correctAnswer: "6 ta"
  },
  {
    question: "O'smir huquq va manfaatlarini himoya qilish, unga tegishli bo'lgan moddiy mulklar, to'lovlar bilan ta'minlashga qaratilgan chora- tadbirlar bu...",
    options: [
      "Ruhiy reabilitasiya",
      "Ijtimoiy-iqtisodiy reabilitasiya",
      "Kasbiy reabilitasiya",
      "Maishiy reabilitasiya"
    ],
    correctAnswer: "Ijtimoiy-iqtisodiy reabilitasiya"
  },
  {
    question: "Bola hayotiy faoliyatida muhim ahamiyatga ega bo'lgan shaxsiy xislatlar, uning jamiyat integrasiyasiga yordam beruvchi faol hayotiy pozisiyasini shakllantirish, ijobiy rollar, jamiyatda xulq-atvor me'yorlarini o'zlashtirishi, kerakli ma'lumot olishiga qaratilgan tarbiyaviy tavsifdagi chora-tadbirlar bu....",
    options: [
      "Ijtimoiy-iqtisodiy reabilitasiya",
      "Ijtimoiy-pedagogik reabilitasiya",
      "Kasbiy reabilitasiya",
      "Ruhiy reabilitasiya"
    ],
    correctAnswer: "Ijtimoiy-pedagogik reabilitasiya"
  },
  {
    question: "Bolaning ruhiy sohasiga qaratilgan bo'lib, uning maqsadi deviant xulq-atvorli bola ongida uning hech kimga kerakmasligi haqidagi tasavvurni yengib o'tishi bu...",
    options: [
      "Kasbiy reabilitasiya",
      "Ruhiy reabilitasiya",
      "Maishiy reabilitasiya",
      "Ijtimoiy-iqtisodiy reabilitasiya"
    ],
    correctAnswer: "Ruhiy reabilitasiya"
  },
  {
    question: "O'smirni biror-bir kasbga o'rgatish, uning uchun yengillashtirilgan sharoitli va qisqartirilgan ish kuniga ega ish joylarini qidirishdan iborat jarayon bu...",
    options: [
      "Maishiy reabilitasiya",
      "Kasbiy reabilitasiya",
      "Ijtimoiy-pedagogik reabilitasiya",
      "Ruhiy reabilitasiya"
    ],
    correctAnswer: "Kasbiy reabilitasiya"
  },
  {
    question: "Qaysi reabilitasiya o'smir uchun normal yashash sharoitlarini yaratishga qaratilgan bo'ladi",
    options: [
      "Kasbiy reabilitasiya",
      "Maishiy reabilitasiya",
      "Ruhiy reabilitasiya",
      "Ijtimoiy-iqtisodiy reabilitasiya"
    ],
    correctAnswer: "Maishiy reabilitasiya"
  },
  {
    question: "Bola organizmida uning ijtimoiy adaptasiyasini qiyinlashtiruvchi fiziologik yoki anotomik xususiyatlarning borligida o'z ifodasini topadi. Bu voyaga yetmaganlarning deviant xulq-atvorini keltirib chiqaruvchi qaysi omildir.",
    options: [
      "Ijtimoiy omil",
      "Biologik omil",
      "Psixologik omil",
      "Pedagogik omil"
    ],
    correctAnswer: "Biologik omil"
  },
  {
    question: "Bularga bolada psixopatalogiya yoki xarakgerining aksentuasiyasining borligi kiradi. Bu voyaga yetmaganlarning deviant xulq-atvorini keltirib chiqaruvchi qaysi omildir.",
    options: [
      "Biologik omil",
      "Psixologik omil",
      "Ijtimoiy omil",
      "Iqtisodiy omil"
    ],
    correctAnswer: "Psixologik omil"
  },
  {
    question: "Bolani asrab olgan oila bilan olib boriladigan ijtimoiy - pedagogik faoliyatning birinchi bosqichi - bu",
    options: [
      "Oilaviy munosabatlarni tahlil qilish",
      "Bo'lg'usi qabul qiluvchi oilani o'rganish",
      "Bolaning ruhiy holatini tekshirish",
      "Ota-onaga maslahat berish"
    ],
    correctAnswer: "Bo'lg'usi qabul qiluvchi oilani o'rganish"
  },
  {
    question: "Quyidagi javoblardan qaysi birida voyaga yetmaganlarning deviant xulq-atvorini keltirib chiqaruvchi ijtimoiy-iqtisodiy omil keltirilgan",
    options: [
      "Meros qonuni",
      "Ijtimoiy tengsizlik",
      "Sport musobaqalari",
      "Madaniy tadbirlar"
    ],
    correctAnswer: "Ijtimoiy tengsizlik"
  },
  {
    question: "Kim 1918 yilda ilk oʻzbek maktab-internatlarining ochishida faol ishtirok etgan va 1943 yilgacha bu maktablarda dars bergan.",
    options: [
      "Abdulla Avloniy",
      "Munavvar Qori",
      "Hamza Hakimzoda Niyoziy",
      "Fitrat"
    ],
    correctAnswer: "Munavvar Qori"
  },
  {
    question: "Ruhiy reablitatsiyaning maqsadi nima",
    options: [
      "Jismoniy holatni tiklash",
      "Deviant xulq-atvorli bola ongida uning hech kimga kerak emasligi haqida tasavvurni yengib o'tish",
      "Kasbga o'rgatish",
      "Moddiy yordam berish"
    ],
    correctAnswer: "Deviant xulq-atvorli bola ongida uning hech kimga kerak emasligi haqida tasavvurni yengib o'tish"
  },
  {
    question: "Ijtimoiy pedagogik reablitatasiya obyektlariga kimlar kiradi",
    options: [
      "Faqat sportchilar",
      "Ijtimoiy va pedagogik qarovsiz bolalar, voyaga yetmagan huquqbuzarlar, yetim bolalar, xulq atvorida chetga o'gish bo'lgan o'smirlar, psixomatik va nerv - psixologik sog'lig'i buzilgan va funksional buzilishga ega bolalar",
      "Faqat iqtidorli bolalar",
      "Faqat katta yoshli shaxslar"
    ],
    correctAnswer: "Ijtimoiy va pedagogik qarovsiz bolalar, voyaga yetmagan huquqbuzarlar, yetim bolalar, xulq atvorida chetga o'gish bo'lgan o'smirlar, psixomatik va nerv - psixologik sog'lig'i buzilgan va funksional buzilishga ega bolalar"
  },
  {
    question: "Eyforiya nima",
    options: [
      "Depressiya holati",
      "Haqiqiy ahvolga mos kelmagan holda kayfiyatning ko'tarinki bo'lishi",
      "Ruhiy zo'riqish",
      "Jismoniy charchoq"
    ],
    correctAnswer: "Haqiqiy ahvolga mos kelmagan holda kayfiyatning ko'tarinki bo'lishi"
  },
  {
    question: "Bolalarning spirtli ichimliklarga moslashish necha davrda jadal kichadi",
    options: [
      "1 ta davrda",
      "3 ta davrda",
      "2 ta davrda",
      "4 ta davrda"
    ],
    correctAnswer: "3 ta davrda"
  },
  {
    question: "Ichkilikka mayli bor bolalarning necha turi farqlanadi.",
    options: [
      "3 turi",
      "4 turi",
      "5 turi",
      "2 turi"
    ],
    correctAnswer: "4 turi"
  },
  {
    question: "\"Bolani tarbiyalash oila ota-onaning asosiy maqsadi va vazifasidir. O'z kamchiliklarini tuzatishga qodir bo'lgan ota ona tarbiyachi bo'lishi mumkin\". Bu qaysi allomaning pedagogik qarashi",
    options: [
      "Farobiy",
      "A.Navoiy",
      "Beruniy",
      "Ibn Sino"
    ],
    correctAnswer: "A.Navoiy"
  },
  {
    question: "\"Insoniy xislatlardan muhimi - ozodlik, tarbiyalilik bo'lsa, insonga eng yaqin narsa uning tabiati, ruhi\", deydigan alloma kim",
    options: [
      "Ibn Sino",
      "A.Navoiy",
      "Yusuf Xos Hojib",
      "Kaykovus"
    ],
    correctAnswer: "A.Navoiy"
  },
  {
    question: "Yaxshilik qilishni bilmasang, yaxshilarga qo'shil; yaxshilik atrofida aylana olmasang, yaxshilar atrofida aylan. Ushbu fikrlar kimning qaysi asaridan olingan",
    options: [
      "Ahmad Yugnakiy 'Hibbat ul-haqoyiq'",
      "Alisher Navoyi 'Mahbub ul-qulub'",
      "Mahmud Qoshg'ariy 'Devoni lug'atit turk'",
      "Imom Buxoriy 'Al-adab al-Mufrad'"
    ],
    correctAnswer: "Alisher Navoyi 'Mahbub ul-qulub'"
  },
  {
    question: "Ijtimoiy ta'lim samaradorligini ta'minlovchi subyektiv va obyektiv omillar bu...",
    options: [
      "ma'rifat",
      "ta'lim vositalari",
      "mafkura",
      "axloq"
    ],
    correctAnswer: "ta'lim vositalari"
  },
  {
    question: "\"Ijtimoiy ong shakllaridan biri bo'lib, ijtimoiy munosabatlar hamda shaxs xatti-harakatini tartibga soladigan qonun-qoidalar majmui bu...\"",
    options: [
      "Siyosat",
      "Axloq",
      "Din",
      "Huquq"
    ],
    correctAnswer: "Axloq"
  },
  {
    question: "Ijtimoiy himoyaga muhtoj bo'lgan bolada jismoniy sifatlarni, qobiliyatlarni rivojlantirish, jismoniy madaniyat va sport sohasiga taalluqli maxsus bilimlarni o'zlashtirish darkor. Bu qaysi tarbiya turidir",
    options: [
      "Aqliy tarbiya",
      "Jismoniy tarbiya",
      "Estetik tarbiya",
      "Axloqiy tarbiya"
    ],
    correctAnswer: "Jismoniy tarbiya"
  },
  {
    question: "Inson tabiiy mavjudot boʻlib, uning butun xatti-harakatlari tug'ma instinkt va ehtiyojlar natijasidir. Bu qaysi yondashuv",
    options: [
      "Ijtimoiy yondashuv",
      "Biologik yondashuv",
      "Psixologik yondashuv",
      "Yaxlit yondashuv"
    ],
    correctAnswer: "Biologik yondashuv"
  },
  {
    question: "Inson biologik mavjudot sifatida tug'iladi, faqat hayotiy faoliyati davomida boshqalar bilan doimiy muloqot va ijtimoiy guruhlaming ta'siri ostida ijtimoiylashadi. Bu qaysi yondashuv",
    options: [
      "Biologik yondashuv",
      "Ijtimoiy yondashuv",
      "Psixologik yondashuv",
      "Yaxlit yondashuv"
    ],
    correctAnswer: "Ijtimoiy yondashuv"
  },
  {
    question: "Insondagi psixik jarayonlar (sezgi, idrok, fikrlash kabilar) tabiiy tavsifga ega, insonning yo'nalganligi qiziqishlari, qobiliyatlari ijtimoiy hodisa sanaladi. Bu qaysi yondashuv",
    options: [
      "Biologik yondashuv",
      "Ijtimoiy yondashuv",
      "Psixologik yondashuv",
      "Yaxlit yondashuv"
    ],
    correctAnswer: "Psixologik yondashuv"
  },
  {
    question: "Shaxs yaxlit tavsifga ega boʻlib, uning rivojiga nafaqati uning faoliyatidagi oʻziga xosliklar, balki turmush tarzi ham ta'sir ko'rsatadi. Bu qaysi yondashuv",
    options: [
      "Biologik yondashuv",
      "Ijtimoiy yondashuv",
      "Psixologik yondashuv",
      "Yaxlit yondashuv"
    ],
    correctAnswer: "Yaxlit yondashuv"
  },
  {
    question: "Ijtimoiy himoyaga muhtoj bo'lgan bolada go'zallik, did, nafosat, orzu, baholashga o'rgatadigan tarbiya turi to'gri berilgan qatorni toping",
    options: [
      "Jismoniy tarbiya",
      "Estetik tarbiya",
      "Aqliy tarbiya",
      "Mehnat tarbiyasi"
    ],
    correctAnswer: "Estetik tarbiya"
  },
  {
    question: "Jamoada tarbiyalash va jamoa munosabatlariga katta e'tibor qaratgan Rossiyalik olimni ko'rsating",
    options: [
      "L.S. Vigotskiy",
      "Makarenko",
      "V.A. Suxomlinskiy",
      "P.F. Lesgaft"
    ],
    correctAnswer: "Makarenko"
  },
  {
    question: "Pedagogikaning bosh masalasi deganda nima tushuniladi",
    options: [
      "O'qitish metodlari",
      "ta'lim-tarbiya",
      "Ma'ruzalar",
      "Tadqiqotlar"
    ],
    correctAnswer: "ta'lim-tarbiya"
  },
  {
    question: "Bola rivojlanishiga doir o'zgarishlarni, yosh davrlariga xos xususiyatlarni bilish nima uchun kerak",
    options: [
      "faqat nazariy bilimlarni to'plash uchun",
      "bolani to'g'ri tarbiyalash va samarali o'qitish uchun;",
      "ota-onalarga maslahat berish uchun",
      "yosh psixologiyasini o'rganish uchun"
    ],
    correctAnswer: "bolani to'g'ri tarbiyalash va samarali o'qitish uchun;"
  },
  {
    question: "Qanday xususiyatlar yosh xususiyatlari deyiladi?",
    options: [
      "shaxsiy qiziqishlar",
      "ma'lum bir yosh davriga xos bo'lgan anatomik, fiziologik va ruhiy xususiyatlar;",
      "ijtimoiy mavqe",
      "oilaviy sharoit"
    ],
    correctAnswer: "ma'lum bir yosh davriga xos bo'lgan anatomik, fiziologik va ruhiy xususiyatlar;"
  },
  {
    question: "Ijtimoiy pedagog shaxsga xos bo'lgan xususiyatlarning shakllanishiga xizmat qiluvchi omillarni bilishi lozim. Bu qaysi omilga kiradi: imkoniyatlar, layoqatlar, qobiliyatlar, tana rangi",
    options: [
      "ijtimoiy omillar",
      "irsiy belgilar",
      "muhit omillari",
      "pedagogik omillar"
    ],
    correctAnswer: "irsiy belgilar"
  },
  {
    question: "Qadimgi yunon olimidan qaysi biri \"Tabiat bilan tarbiya bir-biriga o'xshaydi\" deb aytgan",
    options: [
      "Platon",
      "Demokrit",
      "Arastu",
      "Suqrot"
    ],
    correctAnswer: "Demokrit"
  },
  {
    question: "Markiziy Osiyoda birinchi bo'lib ta'lim-tarbiyaga ta'rif bergan alloma",
    options: [
      "Ibn Sino",
      "Al-Forobiy",
      "Alisher Navoiy",
      "Yusuf Xos Hojib"
    ],
    correctAnswer: "Al-Forobiy"
  },
  {
    question: "Har tomonlama barkamol shaxsni shakllantirish bu tarbiya jarayonining.....",
    options: [
      "metodi",
      "maqsadi",
      "vazifasi",
      "tamoyili"
    ],
    correctAnswer: "maqsadi"
  },
  {
    question: "Mafkura tushunchasi qaysi tildan olingan va lug'aviy ma'nosi",
    options: [
      "lotincha - 'g'oya'",
      "Arabcha -fikrlar majmui",
      "yunoncha - 'bilim'",
      "forscha - 'ko'rsatish'"
    ],
    correctAnswer: "Arabcha -fikrlar majmui"
  },
  {
    question: "Ma'rifat so'zi qaysi tildan olingan va lug'aviy ma'nosi",
    options: [
      "lotincha - 'o'qitish'",
      "Arabcha-bilish, ma'lumot, tanishish",
      "ruscha - 'tarbiyalash'",
      "turkiy - 'yuksalish'"
    ],
    correctAnswer: "Arabcha-bilish, ma'lumot, tanishish"
  },
  {
    question: "Kuzatish metodiga- to'g'ri berilgan ta'rifni toping",
    options: [
      "shaxs bilan yuzma-yuz suhbat o'tkazish",
      "ob'ektiv borliqdagi narsa-xodisalarni tizimli, uzluksiz batartib, mukamal idrok qilish jarayoni.",
      "sinov o'tkazish",
      "anketa to'ldirish"
    ],
    correctAnswer: "ob'ektiv borliqdagi narsa-xodisalarni tizimli, uzluksiz batartib, mukamal idrok qilish jarayoni."
  },
  {
    question: "Tarbiyani tashkil etish jarayonida o'quvchilarni ijtimoiy axloqiy me'yorlar mazmunidan xabardor etish, ularga axloqiy me'yorlarning ijtimoiy hayotdagi ahamiyatini tushuntirish, ulardan ijtimoiy axloqiy me'yorlar asosida aqliy ong madaniyatini shakllantirish. Bu qaysi tarbiya turi haqida?",
    options: [
      "Estetik tarbiya",
      "Axloqiy tarbiya",
      "Jismoniy tarbiya",
      "Ekologik tarbiya"
    ],
    correctAnswer: "Axloqiy tarbiya"
  },
  {
    question: "Ijtimoiy himoyaga muhtoj bolalarga kichik va o'rta biznesni yaratish borasidagi faoliyat jarayonida ishtirok etish, ko'nikma va malakalarni hosil qilish, inson mehnati bilan bunyod etilgan moddiy boyliklarni asrash, ularni ko'paytirish borasidagi qayg'urish tuyg'ularini o'rgatish zaruz. Bu qaysi tarbiya turi",
    options: [
      "Ekologik tarbiya",
      "Iqtisodiy tarbiya",
      "Mehnat tarbiyasi",
      "Estetik tarbiya"
    ],
    correctAnswer: "Iqtisodiy tarbiya"
  },
  {
    question: "Ijtimoiy himoyaga muhtoj bolalarni shaxs, jamiyat va tabiat biriligi hamda aloqadorligi, ekologiyaning inson, insoniyat, jamiyat taraqqiyotidagi muhim o'rni va ahamiyati borasida tushunchalarni qaror toptirish bu",
    options: [
      "Iqtisodiy tarbiya",
      "Ekologik tarbiya",
      "Huquqiy tarbiya",
      "Fuqarolik tarbiyasi"
    ],
    correctAnswer: "Ekologik tarbiya"
  },
  {
    question: "Jismoniy sifatlarni, qobiliyatlarni rivojlantirish, jismoniy madaniyat va sport sohasiga taalluqli maxsus bilimlarni o'zlashtirib olish tushuniladi. Bu qaysi tarbiya turidir?",
    options: [
      "Aqliy tarbiya",
      "Jismoniy tarbiya",
      "Mehnat tarbiyasi",
      "Estetik tarbiya"
    ],
    correctAnswer: "Jismoniy tarbiya"
  },
  {
    question: "Estetik orzuga mos keladigan voqelikni idrok etish, baholash va nafosat qonunlari asosida qayta yaratishga qodirbo'lgan inson shaxsini shakllantirishga mo'ljallangan tarbiya turi bu...",
    options: [
      "Axloqiy tarbiya",
      "Estetik tarbiya",
      "Iqtisodiy tarbiya",
      "Jismoniy tarbiya"
    ],
    correctAnswer: "Estetik tarbiya"
  },
  {
    question: "Fuqarolik tushunchasning mohiyatini anglatish orqaliijtimoiy himoyaga muhtoj bolalarda yuksak darajadagi fuqarolik madaniyatini shakllantirish, ularni xalq, Vatan, jamiyat manfaatlari yo'lida kurashuvchi fuqarolar etib tarbiyalashga yo'naltirilgan pedagogik jarayon bu...",
    options: [
      "Ekologik tarbiya",
      "Fuqarolik tarbiya",
      "Huquqiy tarbiya",
      "Iqtisodiy tarbiya"
    ],
    correctAnswer: "Fuqarolik tarbiya"
  },
  {
    question: "Ijtimoiy himoyaga muhtoj bolalarda mehnat qilish istagini qaror toptirish va ularni zamonaviy ishlab chiqarishning turli sohalarida faoliyat yuritishga tayyorlash bu...\"",
    options: [
      "Estetik tarbiya",
      "Mehnat tarbiyasi",
      "Jismoniy tarbiya",
      "Aqliy tarbiya"
    ],
    correctAnswer: "Mehnat tarbiyasi"
  },
  {
    question: "O'smirtomonidan o'zlashtirilgan nazariy- huquqiy bilimlar negizida huquqiy faoliyatni tashkil etish borasidagi ko'nikma va malakalarni hosil qilish, unda huquqiy sifatlarni qaror toptirish vahuquqiy madaniyatni shakllantirish bu qaysi tarbiya turi",
    options: [
      "Fuqarolik tarbiyasi",
      "Huquqiy tarbiya",
      "Axloqiy tarbiya",
      "Ekologik tarbiya"
    ],
    correctAnswer: "Huquqiy tarbiya"
  },
  {
    question: "Avval xulq-atvor, so'ng bilim!!! Qaysi mamlakatning ta'lim tizimidagi asosiy shiori",
    options: [
      "AQSh",
      "Yaponiya",
      "Rossiya",
      "Germaniya"
    ],
    correctAnswer: "Yaponiya"
  },
  {
    question: "\"Axloqning yaxshi bo'lishi, taomning pokizaligi, rostlik va omonatga xiyonat qilmaslik shart, dunyoviy ishlardan chetda qolgan bo'lsangiz ham zarari yo'qdir\". Ushbu fikr muallifini toping",
    options: [
      "Alisher Navoiy",
      "Imom ismoil Al Buxoriy",
      "Ibn Sino",
      "Beruniy"
    ],
    correctAnswer: "Imom ismoil Al Buxoriy"
  },
  {
    question: "\"Odobli inson barcha odamlarning yaxshisidir va barcha xalqlar uchun yoqimlidir. U mansabdor kishilardan go'zalroq va badavlat odamlardan hurmatliroqdir\". Ushbu fikr muallifini aniqlang",
    options: [
      "Imom Buxoriy",
      "Alisher Navoiy.",
      "Ahmad Yassaviy",
      "Kaykovus"
    ],
    correctAnswer: "Alisher Navoiy."
  },
  {
    question: "Sharq \"uyg'onish davri da ikkinchi yo'nalish fanlari qaysi qatorda to'g'ri ko'rsatilgan",
    options: [
      "matematika, tibbiyot",
      "ijtimoiy, falsafiy",
      "fizika, kimyo",
      "astronomiya, geologiya"
    ],
    correctAnswer: "ijtimoiy, falsafiy"
  },
  {
    question: "Sharq \"uyg'onish davri da ilm-fan rivojida matematika-tibiiyot yo'nalishida ijod qilgan mutaffakirlar qaysi javobda to'g'ri ko'rsatilgan",
    options: [
      "Farobiy, Ibn Sino",
      "Al-Xorazmiy, al-Farg'oniy, Ibn Sino, al-Beruniy",
      "Alisher Navoiy, Bobur",
      "Ahmad Yassaviy, Najmiddin Kubro"
    ],
    correctAnswer: "Al-Xorazmiy, al-Farg'oniy, Ibn Sino, al-Beruniy"
  },
  {
    question: "\"Hibbat ul-haqoyiq\" asarining muallifi",
    options: [
      "Yusuf Xos Hojib",
      "Ahmad Yugnakiy",
      "Mahmud Qoshg'ariy",
      "Kaykovus"
    ],
    correctAnswer: "Ahmad Yugnakiy"
  },
  {
    question: "Jahon ilmida \"Muallimi soniy\" (\"Ikkinchi muallim\") nomiga musharraf bo'lgan donishmand kim",
    options: [
      "Ibn Sino",
      "Abu Nasr Farobiy",
      "Al-Xorazmiy",
      "Al-Farg'oniy"
    ],
    correctAnswer: "Abu Nasr Farobiy"
  },
  {
    question: "Inson kamolatida uch narsa- «irsiyat, muhit, tarbiya» muhim rol' o'ynaydi degan fikrni ilk bor ilgari surgan olim.",
    options: [
      "Ibn Sino",
      "Forobiy",
      "Beruniy",
      "Alisher Navoiy"
    ],
    correctAnswer: "Forobiy"
  },
  {
    question: "Qaysi mutaffakir olim o'qitishni jismoniy mashqlar bilan qo'shib olib borish zarurligini ta'kidlaydi",
    options: [
      "Al-Xorazmiy",
      "Ibn Sino",
      "Beruniy",
      "Al-Farg'oniy"
    ],
    correctAnswer: "Ibn Sino"
  },
  {
    question: "Alisher Navoiyning didaktikaga oid asosiy asarini belgilang",
    options: [
      "'Xamsa'",
      "'Mahbub ul-qulub'",
      "'Lison ut-tayr'",
      "'Hayrat-ul abror'"
    ],
    correctAnswer: "'Mahbub ul-qulub'"
  },
  {
    question: "O'rta Osiyo mutafakkirlaridan qaysi alloma birinchi marta bolalarni jamoa boʻlib, maktabda o'qitishning ahamiyatini ilmiy asoslab bergan",
    options: [
      "Forobiy",
      "Ibn Sino",
      "Beruniy",
      "Ulug'bek"
    ],
    correctAnswer: "Ibn Sino"
  },
  {
    question: "\"Juvonmardlik asli 3 narsadir: biri ulkim, aytgan so'zigni oʻzing qilsang, ikkinchisi ulkim, xayrli ishni ilgari tutsang, odamdan qilgan barcha sifatlar bu uch narsaning ostidadur. Ushbu fikrning muallifi kim",
    options: [
      "Ahmad Yugnakiy",
      "Kaykovus",
      "Alisher Navoiy",
      "Zahiriddin Muhammad Bobur"
    ],
    correctAnswer: "Kaykovus"
  },
  {
    question: "Ibtidoiy jamoa davrlarida tarbiyaning yuzaga kelishiga sabab bo'lgan shart-sharoitlar nimalardan iborat",
    options: [
      "Diniy qarashlar",
      "Ibtidoiy kishilarning mehnat faoliyati va bunda tarkib topgan ijtimoiy munosabatlar",
      "Hokimiyat uchun kurash",
      "Irsiy omillar"
    ],
    correctAnswer: "Ibtidoiy kishilarning mehnat faoliyati va bunda tarkib topgan ijtimoiy munosabatlar"
  },
  {
    question: "Eng qadimgi davrlardagi ma'naviy madaniyatimiz, xususan, bolalar tarbiyasi tizimini oʻrganishda asos boʻlgan manbani ayting",
    options: [
      "'Qur'oni Karim'",
      "'Avesto'",
      "'Injil'",
      "'Tavrot'"
    ],
    correctAnswer: "'Avesto'"
  },
  {
    question: "Turkiy tilda yaratilayotgan dastlabki ta'limiy-axloqiy asar qaysi",
    options: [
      "'Devonu lug'atit turk'",
      "'Qutadg'u bilig'",
      "'Hibat ul-haqoyiq'",
      "'Boburnoma'"
    ],
    correctAnswer: "'Qutadg'u bilig'"
  },
  {
    question: "'As-sahih' to'plami qaysi muhaddis - vatandoshimiz ijodiga mansub",
    options: [
      "Imom Termiziy",
      "Imom Ismoil al-Buxoriy",
      "Imom Moturidiy",
      "Imom G'azzoliy"
    ],
    correctAnswer: "Imom Ismoil al-Buxoriy"
  },
  {
    question: "Sharq uyg'onish davrining yetuk namoyandalari qaysi qatorda to'g'ri berilgan",
    options: [
      "Jaloliddin Rumiy, Najmiddin Kubro",
      "Al-Forobiy, Abu Rayhon Beruniy, Abu Ali Ibn Sino",
      "Amir Temur, Bobur",
      "Yusuf Xos Hojib, Ahmad Yassaviy"
    ],
    correctAnswer: "Al-Forobiy, Abu Rayhon Beruniy, Abu Ali Ibn Sino"
  },
  {
    question: "'Qutadg'u bilig asarining muallifi",
    options: [
      "Ahmad Yugnakiy",
      "Yusuf Xos Hojib",
      "Mahmud Qoshg'ariy",
      "Kaykovus"
    ],
    correctAnswer: "Yusuf Xos Hojib"
  },
  {
    question: "\"Mudarris ota-onasining mansabi, boyligiga qarab bolaga muomala qilmasligi kerak\". Ushbu fikrlar qaysi Sharq mutafakkirining qalamiga mansub",
    options: [
      "Al-Forobiy",
      "Ibn Sino",
      "Alisher Navoiy",
      "Beruniy"
    ],
    correctAnswer: "Ibn Sino"
  },
  {
    question: "Ushbu misralar qaysi allomaga tegishli \"Otangga boʻlmagin arzanda bandi, bandidan chiqib bo'l hunar farzandi\".",
    options: [
      "Yusuf Xos Hojib",
      "A.Navoiy",
      "Kaykovus",
      "Bobur"
    ],
    correctAnswer: "A.Navoiy"
  },
  {
    question: "Hadisi Sharifda keltirilgan quyidagi g'oyalar kimga tegishli. \"Mening bolam\", \"Sening bolang\", deb ajratmay tarbiya berish hammaning vijdoniy burchidir",
    options: [
      "Imom Buxoriy",
      "Payg'ambarimiz (s.a.v).",
      "Imom Termiziy",
      "Imom G'azzoliy"
    ],
    correctAnswer: "Payg'ambarimiz (s.a.v)."
  },
  {
    question: "'Zafarnoma' asarining muallifi kim",
    options: [
      "Amir Temur",
      "Sharafiddin Ali Yazdiy",
      "Nizomiddin Shomiy",
      "Ulug'bek"
    ],
    correctAnswer: "Sharafiddin Ali Yazdiy"
  },
  {
    question: "Pedagogikaning faoliyat ob'ekti nima",
    options: [
      "Ta'lim mazmuni",
      "Bolani o'rab turgan muhit",
      "O'qitish metodlari",
      "O'qituvchining shaxsi"
    ],
    correctAnswer: "Bolani o'rab turgan muhit"
  },
  {
    question: "'Devoni hikmat' asarining muallifi kim",
    options: [
      "Yusuf Xos Hojib",
      "Ahmad Yassaviy",
      "Alisher Navoiy",
      "Boborahim Mashrab"
    ],
    correctAnswer: "Ahmad Yassaviy"
  },
  {
    question: "\"Falsafani o'rganishdan avval o'zingizni hirs-havaslardan shunday tozalashigiz lozimki, sizda maishiy va shahvoniyat kabi noto'g'ri tuyg'ularga emas, balki kamolatga bo'lgan hirs-havas qolsin\" ushbu fikr qaysi alloma qalamiga mansub",
    options: [
      "Ibn Sino",
      "Farobiy",
      "Beruniy",
      "Alisher Navoiy"
    ],
    correctAnswer: "Farobiy"
  },
  {
    question: "\"Baxt - saodatga erishish yo'llari haqida risola\", \"Fozil odamla shaxri\", \"Fazilatli xulqlar\", \"Shaxarni o'rganish haqida\" ta'lim tarbiya haqidagi asarlar muallif kim",
    options: [
      "Ibn Sino",
      "Farobiy",
      "Beruniy",
      "Alisher Navoiy"
    ],
    correctAnswer: "Farobiy"
  },
  {
    question: "Beruniyning ta'lim-tarbiya shakllari qaysi javobda to'g'ri ko'rsatilgan",
    options: [
      "Diniy, ilmiy, jismoniy",
      "Aqliy, axloqiy, mehnat",
      "Estetik, iqtisodiy, huquqiy",
      "Fuqarolik, ekologik, kasbiy"
    ],
    correctAnswer: "Aqliy, axloqiy, mehnat"
  },
  {
    question: "\"O'tmish avlodlardan qolgan yodgorliklar\", \"Xindiston\", \"Mineralogiya\" \"Kitob as -Saydana\" asarlari kimning qalamiga mansub",
    options: [
      "Ibn Sino",
      "Beruniy",
      "Al-Xorazmiy",
      "Al-Farg'oniy"
    ],
    correctAnswer: "Beruniy"
  },
  {
    question: "Ibn Sino fanlar tasnifini 1-guruhiga qaysi fanlarni kiritgan",
    options: [
      "fizika, matematika",
      "etika, iqtisod, siyosat",
      "tibbiyot, kimyo",
      "geografiya, astronomiya"
    ],
    correctAnswer: "etika, iqtisod, siyosat"
  },
  {
    question: "Ibn Sino fanlar tasnifini 2- guruhiga qanday fanlarni kiritgan",
    options: [
      "etika, siyosat",
      "fizika, matematika, metofizika, dunyo qonuniyatlarini",
      "huquq, din",
      "adabiyot, tarix"
    ],
    correctAnswer: "fizika, matematika, metofizika, dunyo qonuniyatlarini"
  },
  {
    question: "Ibn Sino o'zining qasi asarida farosat ilmi xaqida ekanligini ta'kidlagan",
    options: [
      "'Tib qonunlari'",
      "'Hay ibn Yaqzon'",
      "'Donishnoma'",
      "'Tadbir al-malozil'"
    ],
    correctAnswer: "'Hay ibn Yaqzon'"
  },
  {
    question: "Ibn Sino ijtimoiy-falsafiy, ta'limiy-ahloqiy, tibbiyot va dorishunoslikga oid qancha asarlar yozib qoldirgan",
    options: [
      "100 dan ortiq",
      "450 dan ortiq",
      "50 dan ortiq",
      "1000 dan ortiq"
    ],
    correctAnswer: "450 dan ortiq"
  },
  {
    question: "Ibn Sino tarbiyaning qaysi turlarini tavsiya qiladi",
    options: [
      "diniy, harbiy",
      "aqliy, estetik, jismoniy, mexnat, ahloqiy tarbiya",
      "faqat jismoniy va aqliy",
      "faqat axloqiy va diniy"
    ],
    correctAnswer: "aqliy, estetik, jismoniy, mexnat, ahloqiy tarbiya"
  },
  {
    question: "Ibn Sinoning 'Tadbir al-malozil' asari nimaga bag'ishlangan",
    options: [
      "davlat boshqaruvi",
      "oila tarbiyasi",
      "tibbiyot qonunlari",
      "astronomiya"
    ],
    correctAnswer: "oila tarbiyasi"
  },
  {
    question: "Ibn Sino kamolotga erishishning birinchi mezoni... deb takidlagan",
    options: [
      "boylik",
      "ilm-fan",
      "siyosiy hokimiyat",
      "jismoniy kuch"
    ],
    correctAnswer: "ilm-fan"
  },
  {
    question: "Abu Ali Ibn Sino qachon, qaerda tavallud topgan va qachon vafot etgan",
    options: [
      "970 yil Xivada tug'ilgan, 1030 yilda vafot etgan",
      "980 yil Buhoro yaqinridagi afshona qishlog'ida tug'ilgan, 1037 yilda vafot etgan",
      "990 yil Xorazmda tug'ilgan, 1050 yilda vafot etgan",
      "960 yil Samarqandda tug'ilgan, 1025 yilda vafot etgan"
    ],
    correctAnswer: "980 yil Buhoro yaqinridagi afshona qishlog'ida tug'ilgan, 1037 yilda vafot etgan"
  },
  {
    question: "\"Olim ilm toliblarga qalbini yomon illatlardan, inson oʻzi sezish mumkin bo'lmagan holatlardan, qotib qolgan urf-odatlardan, hirsdan, behuda raqobotdan, ochko'zlikdan, shon-shuhratdan saqlanishi zarurligini uqitrgan\". Ushbu fikrla muallif kim",
    options: [
      "Ibn Sino",
      "Beruniy",
      "Farobiy",
      "Ulug'bek"
    ],
    correctAnswer: "Beruniy"
  },
  {
    question: "Sharqda \"Shayx ar-Rays\" nomi mashhur alloma",
    options: [
      "Al-Xorazmiy",
      "Ibn Sino",
      "Al-Farg'oniy",
      "Beruniy"
    ],
    correctAnswer: "Ibn Sino"
  },
  {
    question: "Jismoniy tarbiyaning ilk bor ilmiy-pedagogik jihatdan bir butun tizim ekanligini yaratgan alloma",
    options: [
      "Al-Forobiy",
      "Ibn Sino",
      "Beruniy",
      "Kaykovus"
    ],
    correctAnswer: "Ibn Sino"
  },
  {
    question: "\"Devonu lug'atit turk\" asaring mualifi kim",
    options: [
      "Yusuf Xos Hojib",
      "Mahmud Qoshg'ariy",
      "Ahmad Yugnakiy",
      "Alisher Navoiy"
    ],
    correctAnswer: "Mahmud Qoshg'ariy"
  },
  {
    question: "\"Devonu lug'atit turk\" asarining she'riy parchalari nemis tiliga qachon tarjima qilgan",
    options: [
      "1900 yil",
      "1914 yil",
      "1925 yil",
      "1930 yil"
    ],
    correctAnswer: "1914 yil"
  },
  {
    question: "O'g'lim senga qoldirdim o'git, unga amal qil, Olimlarga yaqinlash, bahra olgil, Tutib dil. Ushbu she'riy misralar qaysi manbaga tegishli",
    options: [
      "'Qutadg'u bilig'",
      "'Devonu lug'atit turk'",
      "'Hibbat ul-haqoyiq'",
      "'Boburnoma'"
    ],
    correctAnswer: "'Devonu lug'atit turk'"
  },
  {
    question: "Yusuf Xos Xojib qaysi shaharda tug'ilgan",
    options: [
      "Samarqandda",
      "Bolasogʻunda",
      "Buxoroda",
      "Xorazmda"
    ],
    correctAnswer: "Bolasogʻunda"
  },
  {
    question: "Yusuf Xos Xojibning 'Qutadig'u bilig' asari necha baytdan iborat",
    options: [
      "4000 bayt",
      "6500 bayt",
      "8000 bayt",
      "10000 bayt"
    ],
    correctAnswer: "6500 bayt"
  },
  {
    question: "'Qutadig'u bilig'ning ma'nosi nima",
    options: [
      "Donishmandlik kitobi",
      "Baxt va soadatga elituvchi bilim, ta'lim",
      "Adolat qonunlari",
      "Hokimiyat sirlari"
    ],
    correctAnswer: "Baxt va soadatga elituvchi bilim, ta'lim"
  },
  {
    question: "'Qutadig'u bilig' asari qanday asar hisoblanadi",
    options: [
      "Tarixiy asar",
      "Ta'limi-axloqiy",
      "Tibbiy asar",
      "Harbiy qo'llanma"
    ],
    correctAnswer: "Ta'limi-axloqiy"
  },
  {
    question: "Kaykovusning fikricha odamlar 4 toifaga boʻlinadi. U birinchi toifa odamlarga deb kimlarni kiritgan",
    options: [
      "faqat olimlar",
      "ko'p narsani biladi va yana bilgisi keladi",
      "hech narsa bilmaydi",
      "faqat badavlat kishilar"
    ],
    correctAnswer: "ko'p narsani biladi va yana bilgisi keladi"
  },
  {
    question: "Er-xotinlarning millatiga ko'ra oilaning qanday turi ajratiladi",
    options: [
      "to'liq, noto'liq",
      "bir millatli yoki baynalmilal oilalar",
      "ko'p bolali, kam bolali",
      "patriarxal, matriarxal"
    ],
    correctAnswer: "bir millatli yoki baynalmilal oilalar"
  },
  {
    question: "Oila nima",
    options: [
      "Ijtimoiy tashkilot",
      "Er-xotin, farzandlardan tashkil topgan guruh",
      "Siyosiy partiya",
      "Ish joyi"
    ],
    correctAnswer: "Er-xotin, farzandlardan tashkil topgan guruh"
  },
  {
    question: "\"Ko'zni yomon narsadan, qo'lni yomon ishdan, tilni yomon so'zdan saqlash\" haqidagi fikr \"Qobusnoma\"ning nechansi bobida bayon etilgan",
    options: [
      "1-bob",
      "42 bob",
      "10-bob",
      "25-bob"
    ],
    correctAnswer: "42 bob"
  },
  {
    question: "\"Bilgilki, aql bir moldirki, uni oʻgʻri ololmas, u oʻtda yonmas, suvda oqmas\" ushbu ibora Qobusnoma asarning nechanchi bobida qayd etilgan",
    options: [
      "1 bob",
      "5 bob",
      "15 bob",
      "50 bob"
    ],
    correctAnswer: "5 bob"
  },
  {
    question: "Kaykovus \"Qobusnoma\" asarini kimga bag'ishlab yozgan",
    options: [
      "o'g'li Gilon shohga",
      "Amir Temurga",
      "Alisher Navoiyga",
      "o'zining ustoziga"
    ],
    correctAnswer: "o'g'li Gilon shohga"
  },
  {
    question: "Kaykovusning \"Qobusnoma asari oʻzbek tiliga nechanchi yilda kim tomonidan tarjima qilingan",
    options: [
      "1800 yil Alisher Navoiy tomonidan",
      "1860 yil Muxammad Rizo Ogohi tomonidan",
      "1900 yil Fitrat tomonidan",
      "1920 yil Abdulla Avloniy tomonidan"
    ],
    correctAnswer: "1860 yil Muxammad Rizo Ogohi tomonidan"
  },
  {
    question: "Muloqot madaniyatiga tegishli bo'lmagan javobni belgilang",
    options: [
      "axloqiy me'yorlarga qaragandaancha jiddiyta'qiq bo'lib uni buzganlar yo'q qilibyuborilgan",
      "hurmat",
      "odob",
      "ishonch"
    ],
    correctAnswer: "axloqiy me'yorlarga qaragandaancha jiddiyta'qiq bo'lib uni buzganlar yo'q qilibyuborilgan"
  },
  {
    question: "Oilalar buzilishiga sabablar berilmagan qatorni belgilang",
    options: [
      "sevgi, moddiy manfatdorlik, stereotip",
      "alkogolizm, giyohvandlik",
      "xiyonat, kelishmovchilik",
      "moddiy qiyinchiliklar"
    ],
    correctAnswer: "sevgi, moddiy manfatdorlik, stereotip"
  },
  {
    question: "\"O'qiyman oʻzim mutolla qilaman o'zim o'rganaman, u bilim menkidir. Ushbu g'oyalar kimga tegishli.",
    options: [
      "Ibn Sino",
      "A.Navoiy",
      "Beruniy",
      "Farobiy"
    ],
    correctAnswer: "A.Navoiy"
  },
  {
    question: "Mahmud Qoshgʻoriy \"Devoni lug'atit turk\" asarini nechani yillar yozgan",
    options: [
      "1000-1005 yillar",
      "1076-1077 yillar",
      "1100-1110 yillar",
      "1200-1205 yillar"
    ],
    correctAnswer: "1076-1077 yillar"
  },
  {
    question: "\"Devoni lug'atit turk\" asari qo'shiqlarda asosan nimalar o'z ifodasini topagan",
    options: [
      "siyosiy kurashlar",
      "Tabiat manzarlari, ov va jang tasvirlari, sevgi-muhabbat, oʻgʻit-nasihatlar",
      "falsafiy fikrlar",
      "tibbiyot sirlari"
    ],
    correctAnswer: "Tabiat manzarlari, ov va jang tasvirlari, sevgi-muhabbat, oʻgʻit-nasihatlar"
  },
  {
    question: "Mehmonni izzat-hurmat qilmasilik - uning chehrasiga kul sochish bilan barobar degan fikrlar qaysi manbaga tegishli",
    options: [
      "'Qutadg'u bilig'",
      "'Devonu lug'atit turk'",
      "'Qobusnoma'",
      "'Mahbub ul-qulub'"
    ],
    correctAnswer: "'Devonu lug'atit turk'"
  },
  {
    question: "\"Temur tuzuklari\"da jamoani boshqaruvchi rahbar fazilatlari",
    options: [
      "qo'rqoqlik, yolg'onchilik",
      "Ishbilarmon, mard, shijoatli, uzoqni o'ylash,har bir ishda maslahat olmoq, adolatli bo'lmoq.",
      "xudbinlik, maqsadsizlik",
      "o'z bilganidan qolmaslik"
    ],
    correctAnswer: "Ishbilarmon, mard, shijoatli, uzoqni o'ylash,har bir ishda maslahat olmoq, adolatli bo'lmoq."
  },
  {
    question: "Movarounnahrda davlat arboblaridan kim 15-asrda maktablar islohotini o'tkazdi",
    options: [
      "Amir Temur",
      "M.Ulug'bek",
      "Alisher Navoiy",
      "Bobur"
    ],
    correctAnswer: "M.Ulug'bek"
  },
  {
    question: "'Boburnoma' qaysi tilda yozilgan",
    options: [
      "fors tilida",
      "Eski o'zbek tilida",
      "arab tilida",
      "turk tilida"
    ],
    correctAnswer: "Eski o'zbek tilida"
  },
  {
    question: "'Madrasa' so'zining ma'nosi",
    options: [
      "O'qitish joyi",
      "Ma'ruza tinglaydigan joy",
      "Kitobxonlik uyi",
      "Mehmonxona"
    ],
    correctAnswer: "Ma'ruza tinglaydigan joy"
  },
  {
    question: "Sharqda qaysi alloma \"Xosib\" (matematik) degan laqab bilan shuhrat topgan",
    options: [
      "Ibn Sino",
      "Al-Xorazmiy",
      "Al-Farg'oniy",
      "Beruniy"
    ],
    correctAnswer: "Al-Xorazmiy"
  },
  {
    question: "\"Birinchi arab astronomi\" degan nomini olgan muttafkkir kim...",
    options: [
      "Al-Xorazmiy",
      "Al-Farg'oniy",
      "Beruniy",
      "Ulug'bek"
    ],
    correctAnswer: "Al-Farg'oniy"
  },
  {
    question: "Al-Farg'oniyning \"Asrolyabiya haqida mukammal kitob\" qaysi shahar muzeyida saqlanmoqda",
    options: [
      "Toshkent",
      "Berlin",
      "Parij",
      "London"
    ],
    correctAnswer: "Berlin"
  },
  {
    question: "Ikki narsa borki, ko'pchilik ularning qadriga yetmaydi: biri-sog'liq, ikkinchisi- bo'sh vaqt. Ushbu fikr qaysi muttaffakir qaysi asaridan olingan",
    options: [
      "Alisher Navoiy 'Mahbub ul-qulub'",
      "Imom al-Buxoriy 'Al-adab al-Mufrad'",
      "Ibn Sino 'Tib qonunlari'",
      "Yusuf Xos Hojib 'Qutadg'u bilig'"
    ],
    correctAnswer: "Imom al-Buxoriy 'Al-adab al-Mufrad'"
  },
  {
    question: "Ar-Roziy asosan qaysi yo'nalishlarda asarlar yaratgan",
    options: [
      "Tarix, adabiyot",
      "Tabiatshunoslik, tabobat, kimyo",
      "Siyosat, huquq",
      "Matematika, astronomiya"
    ],
    correctAnswer: "Tabiatshunoslik, tabobat, kimyo"
  },
  {
    question: "Ziyraklik - bu insondagi tez qikrlilik, o'ylagan narsasini darrov topa olish qobiliyatidir. Ushbu fikr qaysi sharq allomasi qalamiga mansub",
    options: [
      "Ibn Sino",
      "Al-Farobiy",
      "Beruniy",
      "Alisher Navoiy"
    ],
    correctAnswer: "Al-Farobiy"
  },
  {
    question: "Imom al-Moturidiyning \"Inson-ma'rifatning uch vostasiga ega\" degan fikrida qaysi vositalarni nazarda tutgan",
    options: [
      "Boylik, hokimiyat, bilim",
      "Sezgi, naql, aql",
      "O'qituvchi, maktab, oila",
      "Din, urf-odat, qonun"
    ],
    correctAnswer: "Sezgi, naql, aql"
  },
  {
    question: "\"Eshik og'asi\" deb nom olgan alloma",
    options: [
      "Mahmud Qoshg'ariy",
      "Yusuf Xos Xojib",
      "Ahmad Yassaviy",
      "Kaykovus"
    ],
    correctAnswer: "Yusuf Xos Xojib"
  },
  {
    question: "Zakovat qaerda bo'lsa, ulug'lik bo'ladi, Bilim kimda boʻlsa, buyuklik oladi. Ushbu fikrlar \"Qutadg'u bilik\" asarining qaysi bo'limidan",
    options: [
      "Davlat boshqaruvi",
      "Inson qadri bilim bilan belgilanadi",
      "Adolat masalasi",
      "Axloq qoidalari"
    ],
    correctAnswer: "Inson qadri bilim bilan belgilanadi"
  },
  {
    question: "'Qutadg'u bilig' qanday asar hisoblanadi",
    options: [
      "Tibbiy ensiklopediya",
      "Ta'lim-tarbiya, ma'naviy kamolot, axloq va odobga doir darslik.",
      "Harbiy strategiya",
      "Siyosiy manifest"
    ],
    correctAnswer: "Ta'lim-tarbiya, ma'naviy kamolot, axloq va odobga doir darslik."
  },
  {
    question: "Mahmud Qoshg'ariy \"Devon\" haqidagi manbalarni qaerdan to'plagan",
    options: [
      "Kutubxonalardan",
      "Xalq orsidan",
      "Hukmdor saroyidan",
      "O'zining shaxsiy tajribasidan"
    ],
    correctAnswer: "Xalq orsidan"
  },
  {
    question: "\"Yetuklik\" -bu...",
    options: [
      "faqat yoshning katta bo'lishi",
      "rivojlanishning ma'lum bir bosqichi, fazasi, chegarasiga yetilganlikning sifatiy va miqdoriy xarakteristikasini ma'lum bir aniqlikda belgilab beruvchi ko'rsatkich",
      "faqat jismoniy kuch",
      "faqat yuqori maosh"
    ],
    correctAnswer: "rivojlanishning ma'lum bir bosqichi, fazasi, chegarasiga yetilganlikning sifatiy va miqdoriy xarakteristikasini ma'lum bir aniqlikda belgilab beruvchi ko'rsatkich"
  },
  {
    question: "\"Sabr achchiqdir-ammo foyda beruvchi, qattiqdir- ammo zararni daf etuvchi, sabr shodliklar kalitidir va bandlar ochqichidir\". Ushbu fikrga qaysi mutaffakir sharxlagan",
    options: [
      "Ahmad Yassaviy",
      "A.Navoiy",
      "Kaykovus",
      "Yusuf Xos Hojib"
    ],
    correctAnswer: "A.Navoiy"
  },
  {
    question: "Odobga to'g'ri berilgan ta'rifni toping",
    options: [
      "Katta yoshlilarning hurmati",
      "Har bir insonning o'zi bir inson yoki jamoa bilan boʻlgan muloqotida hamda yurish-turishida o'zini tuta bilishidir.",
      "Faqat diniy qoidalar majmui",
      "Moddiy boylikka intilish"
    ],
    correctAnswer: "Har bir insonning o'zi bir inson yoki jamoa bilan boʻlgan muloqotida hamda yurish-turishida o'zini tuta bilishidir."
  },
  {
    question: "Ahmad Donish bolalar haqida qanday asar yozgan",
    options: [
      "Bolalarning o'qishini tashkil etish",
      "Bolalarga hunar va mashg'ulotlarning foydasi haqida nasihat",
      "Bolalarning o'yinlari",
      "Bolalar psixologiyasi"
    ],
    correctAnswer: "Bolalarga hunar va mashg'ulotlarning foydasi haqida nasihat"
  },
  {
    question: "\"Har qanday bolalarga beriladigan jazo va tanbeh juda demokratik va insonparvarlik ruhida boʻlishi lozim\" fikr kimga tegishli",
    options: [
      "K.D. Ushinskiy",
      "Ahmad Donish",
      "J.J. Russo",
      "L.N. Tolstoy"
    ],
    correctAnswer: "Ahmad Donish"
  },
  {
    question: "\"Baliqning suvsiz yashamog'i mumkin bo'lmagani kabi insonning ham ilmsiz yashamog'i mumkin emas\". Bu kimning fikri",
    options: [
      "Fitrat",
      "A.Avloniy",
      "Cho'lpon",
      "Munavvar Qori"
    ],
    correctAnswer: "A.Avloniy"
  },
  {
    question: "A.Avloniy birinchi qanday nomdagi teatr truppasini tashkil qilgan",
    options: [
      "Yangi avlod",
      "Turon",
      "Milliy teatr",
      "Zarafshon"
    ],
    correctAnswer: "Turon"
  },
  {
    question: "\"Turkiy guliston yoxud axloq\" asarida qanday ilm-axloq haqida fikr yuritiladi",
    options: [
      "harbiy san'at",
      "\"yaxshilikka chaqiruvchi, yomonlardan qaytaruvchi\"",
      "siyosiy boshqaruv",
      "tabiiy fanlar"
    ],
    correctAnswer: "\"yaxshilikka chaqiruvchi, yomonlardan qaytaruvchi\""
  },
  {
    question: "\"Tarbiya xususiy ish emas, milliy, ijtimoiy ishdir\". Ushbu fikr muallifi to'g'ri berilgan qatorni toping",
    options: [
      "Fitrat",
      "A.Avloniy",
      "Bobur",
      "Hamza"
    ],
    correctAnswer: "A.Avloniy"
  },
  {
    question: "A.Avloniy o'z qarashlarida bolaning badan tarbiyasi masalasida kimlarga murojat etadi",
    options: [
      "Siyosatchilarga",
      "Tabiblarga",
      "Harbiylarga",
      "Din peshvolariga"
    ],
    correctAnswer: "Tabiblarga"
  },
  {
    question: "\"Inson o'z mablag'ini to'g'ri sarflashni bilishi kerak. Pul sarflashda qizg'anchiqlik qilish xasislikka olib keladi. Pullarni rejasiz ishlatish esa insonni beboshlikka yetaklaydi\". Qaysi allomaning pedagogik qarashi",
    options: [
      "A.Navoiy",
      "A.N.Forobiy",
      "Ibn Sino",
      "Beruniy"
    ],
    correctAnswer: "A.N.Forobiy"
  },
  {
    question: "Ahmad Yugnakiy qaysi asarida: \"Mol-mulksiz kishi uchun bilim - bitmas-tuganmas mulkdir, kambag'al uchun bilim hisob - xatosiz hisobdir\". Iqtisodiy tarbiyaga ta'rif berganlar",
    options: [
      "'Qutadg'u bilig'",
      "'Hibbatul haqoyiq'",
      "'Devonu lug'atit turk'",
      "'Qobusnoma'"
    ],
    correctAnswer: "'Hibbatul haqoyiq'"
  },
  {
    question: "Maslahat berish, uzr so'rash, yaxshilik haqida so'zlash, o'rnak bo'lish bu xalq pedagogikasida qo'llaniladigan tarbiya metodlarining qaysi turiga mansub",
    options: [
      "Jazolash",
      "Tushuntirish",
      "Rag'batlantirish",
      "Mashq"
    ],
    correctAnswer: "Tushuntirish"
  },
  {
    question: "Undash, tilak-istak bildirish, rahmat aytish va oq yo'l tilash bu xalq pedagogikasida qo'llaniladigan tarbiya metodlarining qaysi turiga mansub",
    options: [
      "Jazolash",
      "Tushuntirish",
      "Rag'batlantirish",
      "Talab qo'yish"
    ],
    correctAnswer: "Rag'batlantirish"
  },
  {
    question: "Ta'kidlash, ta'na, gina, tanbeh berish va koyish bu xalq pedagogikasida qo'llaniladigan tarbiya metodlarining qaysi turiga mansub",
    options: [
      "Rag'batlantirish",
      "Qoralash va jazolash",
      "Tushuntirish",
      "Namuna ko'rsatish"
    ],
    correctAnswer: "Qoralash va jazolash"
  },
  {
    question: "Ilk marta tarbiya oldiga ijtimoiy vazifalarni qo'ya olgan o'zbek pedagogini aniqlang",
    options: [
      "Fitrat",
      "Abdulla Avloniy",
      "Munavvar Qori",
      "Ibn Sino"
    ],
    correctAnswer: "Abdulla Avloniy"
  },
  {
    question: "Davlatning bolalarga g'amxo'rligi, ularning huquqiy himoyasi ijtimoiy pedagogikaning qaysi vazifasiga to'g'ri keladi",
    options: [
      "Tarbiyaviy vazifa",
      "Ijtimoiy-huquqiy vazifa",
      "Madaniy vazifa",
      "Iqtisodiy vazifa"
    ],
    correctAnswer: "Ijtimoiy-huquqiy vazifa"
  },
  {
    question: "A.V.Mudrik ijtimoiy pedagogikaning vazifalarini nechta guruhga ajratib ko'rsatadi",
    options: [
      "2 guruhga",
      "3 guruhga",
      "4 guruhga",
      "5 guruhga"
    ],
    correctAnswer: "3 guruhga"
  },
  {
    question: "Olima V.Vasilkova ijtimoiy pedagogikaning asosiy vazifalari sifatida nimalarni ko'rsatadi",
    options: [
      "Ijtimoiy-huquqiy vazifa",
      "Ijtimoiy reabilitatsion vazifa",
      "Tarbiyaviy vazifa",
      "Integratsion vazifa"
    ],
    correctAnswer: "Ijtimoiy reabilitatsion vazifa"
  },
  {
    question: "Ijtimoiylashuv yetakchi institutlaridan birini ko'rsating",
    options: [
      "Ommaviy axborot vositalari",
      "Oila",
      "Davlat",
      "Din"
    ],
    correctAnswer: "Oila"
  },
  {
    question: "Huquq, din va tabiiy rivojlanish asosiga qurilgan tabiatan shakllangan tarbiya g'oyalarini ilgari surgan faylasuf kim",
    options: [
      "J.Lokk",
      "J.J Russo",
      "I.Kant",
      "Gegel"
    ],
    correctAnswer: "J.J Russo"
  },
  {
    question: "Katta hayotiy tajriba va kasbiy mahoratga ega, shuningdek, mazmunli hayot kechirgan keksalar, ommaning hurmatiga sazovor bo'lgan kishilarning atrofdagilar bilan munosabatda boʻlish, zimmalaridagi vazifalarni bajarish, mas'uliyatni chuqur his etishlari bilan yosh avlodga ta'sir ko'rsatish usuli bu...",
    options: [
      "Tushuntirish",
      "Namuna (ibrat, o'rnak)",
      "Mashq",
      "Jazolash"
    ],
    correctAnswer: "Namuna (ibrat, o'rnak)"
  },
  {
    question: "Tarbiyalanuvchlarni ezgulikka, atrofdagilarga yaxshilik qilishga da'vat etuvchi og'zaki bayon usuli bu...",
    options: [
      "Suhbat",
      "Nasihat",
      "Ishontirish",
      "Hikoya"
    ],
    correctAnswer: "Nasihat"
  },
  {
    question: "Tarbiyalanuvchlarni muayyan voqea-hodisalar, jarayonlar, xatti-harakat hamda faoliyatning to'g'riligiga ishontirishga qaratilgan fikrlarning og'zaki bayoni bu...",
    options: [
      "Nasihat",
      "Ishontirish",
      "Tushuntirish",
      "Hikoya"
    ],
    correctAnswer: "Ishontirish"
  },
  {
    question: "\"O'z-o'zini nazorat (tahlil) qilish, o'z-o'zini boshqarish, o'z-o'zini baholash bu qaysi metodning tarkibiy qismlaridir",
    options: [
      "Rag'batlantirish metodlari",
      "O'z-o'zini tarbiyalash metodlari",
      "Jazolash metodlari",
      "Tashkil etish metodlari"
    ],
    correctAnswer: "O'z-o'zini tarbiyalash metodlari"
  },
  {
    question: "Turli xatti-harakatlarni bajarish hamda faoliyatda ishtirok etish jarayonida o'quvchi tomonidan amal qilinishi zarur bo'lgan ijtimoiy xulq-atvor meyorlari bu...",
    options: [
      "Rag'batlantirish",
      "Pedagogik talab",
      "Jazo",
      "Namuna"
    ],
    correctAnswer: "Pedagogik talab"
  },
  {
    question: "Bolalarda mehnat, ijtimoiy xulq va hayotiy tajriba ko'nikmalarini shakllantirish maqsadida qo'llaniladigan usul bu...",
    options: [
      "Jazolash",
      "O'rgatish",
      "Ma'ruza",
      "Tushuntirish"
    ],
    correctAnswer: "O'rgatish"
  },
  {
    question: "Tarbiyalanuvchining xatti-harakati va faoliyatiga ijobiy baho berish asosida unga ishonch bildirish, ko'ngilini ko'tarish va uni qo'llab-quvvatlash usuli bu...",
    options: [
      "Jazolash",
      "Rag'batlantirish",
      "Talab qo'yish",
      "Tanbeh berish"
    ],
    correctAnswer: "Rag'batlantirish"
  },
  {
    question: "Muayyan bir yosh davriga xos bo'lgan anatomik, fiziologik (jismoniy) va psixologik xususiyatlar bu...",
    options: [
      "Shaxsning individual xususiyatlari",
      "Shaxsning yosh xususiyatlari",
      "Shaxsning kasbiy xususiyatlari",
      "Shaxsning ijtimoiy mavqei"
    ],
    correctAnswer: "Shaxsning yosh xususiyatlari"
  },
  {
    question: "Mohiyatan oddiydan murakkabga, quyidan yuqoriga, eski sifatlardan yangi holatlarga oʻtish, yangilanish, yangining paydoboʻlishi, eskining yo'qolib borishi, miqdor o'zgarishining sifat o'zgarishiga o'tishini ifodalaydi bu...",
    options: [
      "To'xtash",
      "Rivojlanish",
      "Turg'unlik",
      "Adaptatsiya"
    ],
    correctAnswer: "Rivojlanish"
  },
  {
    question: "Ijtimoiy hayotni maqsadga muvofiq tashkil etish yo'lida shaxs tomonidan amalga oshirilayotgan kundalik va kasbiy xatti-harakatlarning muayyan shakli bu ...",
    options: [
      "Dam olish",
      "Faoliyat",
      "Suhbat",
      "Kuzatish"
    ],
    correctAnswer: "Faoliyat"
  },
  {
    question: "\"Gender\" atamasi 1968-yilda kim tomonidan ilmiy iste'molga kiritilgan bo'lib, \"jins\" ma'nosini bildiradi",
    options: [
      "Shteyner",
      "Stoller",
      "Dyurkgeym",
      "Vigotskiy"
    ],
    correctAnswer: "Stoller"
  },
  {
    question: "Axloqiy muammolarni o'z qarashlari nuqtai nazaridan hal eta boshlaydi. Hayot mohiyati, baxt, burch, shaxs erkinligini o'z qiziqishlari bilan o'lchaydilar. Ular o'z fikrlarini mustaqil ifodalashga harakat qilib, shaxslik xislaflarini namoyish eta boshlaydilar. Shu bois ularga katta yoshlilaring beg'araz, to'g'ri yo'nalish berishlari o'ta muhim. Bu qaysi davrning o'ziga xos xususiyatlari",
    options: [
      "Maktabgacha yosh",
      "O'spirinlik",
      "Kichik maktab yoshi",
      "O'smirlik"
    ],
    correctAnswer: "O'spirinlik"
  },
  {
    question: "Murakkabligi anotomik-fiziologik va oʻzgarishlar bilan bogiiqdir. Bolaning o'sishi tezlashadi. Bu davmi o'tish davri ham deyiladi. Bu qaysi davrning o'ziga xos xususiyatlari",
    options: [
      "Chaqaloqlik",
      "O'smirlik",
      "Kichik maktab yoshi",
      "Kattalik"
    ],
    correctAnswer: "O'smirlik"
  },
  {
    question: "Bolalar o'yin faoliyatining o'rnini endi o'qish faoliyati egallaydi. Bu juda qiyin o'tish davri bo'lib, bolaning bo'yi, og'irligi jihatdan uning tashqi ko'rinishi kam farq qiladi. Bu yoshda bola bilim olish va o'rganishga qiziquvchan bo 'ladi. Bu qaysi davrning o'ziga xos xususiyatlari",
    options: [
      "O'smirlik",
      "Kichik maktab yoshida",
      "Maktabgacha yosh",
      "O'spirinlik"
    ],
    correctAnswer: "Kichik maktab yoshida"
  },
  {
    question: "Odam yashaydigan sharoitdagi barcha tashqi ta'sir tushuniladi. Shu nuqtai nazardan tarbiya tufayli bolani o'zi yashaydigan ijtimoiy sharoitga moslashtirish mumkin bu...",
    options: [
      "irsiyat",
      "muhit",
      "tarbiya",
      "ta'lim"
    ],
    correctAnswer: "muhit"
  },
  {
    question: "Aristotel, Platonlar bola rivojlanishida qaysi omilni yuqori qo'yadi",
    options: [
      "ijtimoiy omilni",
      "tabiiy biologik",
      "madaniy omilni",
      "pedagogik omilni"
    ],
    correctAnswer: "tabiiy biologik"
  },
  {
    question: "Bu metoddan o'z faoliyatida Suqrot ham mohirona foydalangan va ijtimoiy pedagog ham doim foydalanishi lozim. Bu qaysi metod",
    options: [
      "Ma'ruza",
      "Suhbat",
      "Tajriba",
      "Kuzatish"
    ],
    correctAnswer: "Suhbat"
  },
  {
    question: "Bu yosh davrida o'yinlar asosan katta yoshdagi kishilar yoki bolalarning harakatlariga nisbatan taqliddan iborat bo'ladi. Bolani o'yinning mazmunidan ko'ra o'ynalayotgan buyumlar (o'yinchoq va qo'g'irchoqlar) hamda o'zining harakatlari ko'proq zavqlantiradi. Bu qaysi rivojlanish davridir",
    options: [
      "Kichik maktab yoshi",
      "Maktabgacha tarbiya davri",
      "O'smirlik",
      "Chaqaloqlik"
    ],
    correctAnswer: "Maktabgacha tarbiya davri"
  },
  {
    question: "Bu davr bola \"men\" ligining vujudga kelishi bilan ham xarakterlidir. U tevarak - atrofdagi bolalar bilan o'zini solishtiradi, o'zining ulardan ustun jihatlarini qidira boshlaydi. Bunday holatlar uning \"mening o'zim\" so'zini keng qo'llashda seziladi. Bola rivojlanishing qaysi davri haqida fikr yuritilgan",
    options: [
      "O'smirlik",
      "Maktabgacha tarbiya davri",
      "Kichik maktab yoshi",
      "O'spirinlik"
    ],
    correctAnswer: "Maktabgacha tarbiya davri"
  },
  {
    question: "Yosh bola uchun bunday mas'uliyatli mehnat\" ga o'tish qiyin kechsa-da, u asta - sekin bunday sharoitga ko'nika boradi. Bola rivojlanishing qaysi davri haqida fikr yuritilgan",
    options: [
      "Maktabgacha yosh",
      "Kichik maktab yoshi",
      "O'smirlik",
      "O'spirinlik"
    ],
    correctAnswer: "Kichik maktab yoshi"
  },
  {
    question: "Bu davrdagi o'quvchilari uchun eng ideal shaxs - o'qituvchi bo'lib, bolalar ularning talabiarini dildan bajarishga urinadi. Ular orasida o 'qituvchining obro'si o'z ota-onasidan ham baland bo'ladi. Bola rivojlanishing qaysi davri haqida fikr yuritilgan",
    options: [
      "O'smirlik",
      "Kichik maktab yoshi",
      "Maktabgacha yosh",
      "Chaqaloqlik"
    ],
    correctAnswer: "Kichik maktab yoshi"
  },
  {
    question: "Bu davrda his-tuyg'ularni idora qilish layoqati endi -endi shakllana boradi. O'zining har narsaga jahli chiqishi, qo'pollik holatlari tez-tez yuz beradi. Bu xususiyati ko'proq bahs-munozara jarayonida ko'zga tashlanadi. Bola rivojlanishing qaysi davri haqida fikr yuritilgan",
    options: [
      "Kichik maktab yoshi",
      "O'smirlik",
      "Maktabgacha yosh",
      "Kattalik"
    ],
    correctAnswer: "O'smirlik"
  },
  {
    question: "Alisher Navoiy ijodidagi komil inson obrazi misolida kimning fe'l-atvori, yurish-turishi, faoliyatini, tashqi va ichki dunyosi, ilmga chanqoqligi, mehnatsevarligi, kamtarligi, pokligi kabi fazilatlarni ifodalashi barkamol shaxs sifatlarining namunasi tarzida namoyon bo'ladi",
    options: [
      "Majnun",
      "Farhod",
      "Layli",
      "Xusrav"
    ],
    correctAnswer: "Farhod"
  },
  {
    question: "Quvonch, qanoatlanish kechinmalarini paydo qiladi, tetiklik va g'ayrat bag'ishlaydi, o'z kuchiga ishonchni mustahkamlaydi, o'z faoliyati va xulqiga mas'uliyatini oshiradi bu...",
    options: [
      "jazolash",
      "rag'batlantirish",
      "tanbeh",
      "talab"
    ],
    correctAnswer: "rag'batlantirish"
  },
  {
    question: "O'qitishning qaysi vazifasi bola nutqi, fikrlashi, shaxsning sensorli va harakatlanish sohalari, emotsional-irodaviy, intellektual sohalarini rivojlantirishda o'z aksini topadi",
    options: [
      "o'qituvchi vazifasi",
      "rivojlantiruvchi vazifasi",
      "tarbiyaviy vazifasi",
      "diagnostik vazifasi"
    ],
    correctAnswer: "rivojlantiruvchi vazifasi"
  },
  {
    question: "Bir turdagi xulq-atvor, takrorlanadigan vaziyat, talab, standart, taqlid uchun misol, ijtimoiy fikr, did, qoida, urf-odat shaklidagi namuna bu...",
    options: [
      "og'ish",
      "Me'yor",
      "tartibsizlik",
      "anarxiya"
    ],
    correctAnswer: "Me'yor"
  },
  {
    question: "\"Fe'l-atvorni yaxshilash, narsalarni tanlab yebichish, gavdani chiqindidan tozalash, badanning to'g'ri tuzilishini saqlash, toza havodan nafas olish, mos kiyim tanlash, jismoniy va ruhiy harakatlarni mo'tadil qilish\". Qaysi alloma o'zining asarlarida sog'liqni saqlashda yettita narsaga e'tibor berishni tavsiya etadi",
    options: [
      "Farobiy",
      "Ibn Sino",
      "Beruniy",
      "Ulug'bek"
    ],
    correctAnswer: "Ibn Sino"
  },
  {
    question: "Bolalarning jismoniy jihatdan tarbiyalashdagi muhim vazifa nerv tizimi gigiyenasidir. Bu vazifani hal etishda nima katta ahamiyatga ega",
    options: [
      "oziqlanish",
      "uyqu",
      "jismoniy mashq",
      "o'yin"
    ],
    correctAnswer: "uyqu"
  },
  {
    question: "Bolaning jismoniy kuchini, qo'llarining qattiqligini, qaddi-qomatining tikligini, ishonchli ko'zlarni rivojlantirishga xizmat qilib, unda o'tkir zehn, topqirlik, tashabbuskorlik kabi sifatlarni tarbiyalash bu",
    options: [
      "o'qish",
      "o'yin",
      "mehnat",
      "sport"
    ],
    correctAnswer: "o'yin"
  },
  {
    question: "\"Tarbiyaning oʻzi, agar u kishining baxtiyor bo'lishini istar ekan, uni baxt uchun tarbiyalash kerakemas, balki turmush mehnatiga tayyorlashi lozim\". Bu qaysi olimning pedagogik qarashidir",
    options: [
      "J.J. Russo",
      "K.D. Ushinskiy",
      "I.G. Pestalossi",
      "Ya.A. Komenskiy"
    ],
    correctAnswer: "K.D. Ushinskiy"
  },
  {
    question: "Tarbiya biz uchun yo hayot, yo mamot, yo najot, yo halokat, yo saodat, yo falokat masalasidir\" shiorining muallifi kim",
    options: [
      "Fitrat",
      "Abdulla Avloniy",
      "Munavvar Qori",
      "Cho'lpon"
    ],
    correctAnswer: "Abdulla Avloniy"
  },
  {
    question: "Beruniyning inson axloqiy kamolotini ko'rsatuvchi xislatlari qaysi javobda to'g'ri ko'rsatilgan",
    options: [
      "Xudbinlik, ochko'zlik",
      "Saxovat, Muruvvat",
      "Qo'rqoqlik, yolg'onchilik",
      "Raqobat, g'azab"
    ],
    correctAnswer: "Saxovat, Muruvvat"
  },
  {
    question: "O'zbekiston Respublikasi davlat bayrog'i qachon qabul qilingan",
    options: [
      "1991 yil 31 avgust",
      "1991 yil 18 noyabr",
      "1992 yil 2 iyul",
      "1992 yil 10 dekabr"
    ],
    correctAnswer: "1991 yil 18 noyabr"
  },
  {
    question: "O'zbekiston Respublikasirasmiy davlat ramzi qachon qabul qilingan",
    options: [
      "1991 yil 18 noyabr",
      "1992 yil 2 iyul",
      "1992 yil 10 dekabr",
      "1993 yil 14 yanvar"
    ],
    correctAnswer: "1992 yil 2 iyul"
  },
  {
    question: "\"O'zbekiston Respublikasi Davlat gimni to'g'risida\"gi O'zbekiston Respublikasi Qonun qachon qabul qilingan",
    options: [
      "1992 yil 2 iyul",
      "1992 yil 10 dekabr",
      "1993 yil 14 yanvar",
      "1991 yil 18 noyabr"
    ],
    correctAnswer: "1992 yil 10 dekabr"
  },
  {
    question: "\"Iste'dodsiz o'quvchining o'zi yo'q\"; \"Fikrlayapsanmi demak yashayapsan\" degan shiorlari vaqarashlar qaysi mamlakat ta'lim tizimida yuritiladi",
    options: [
      "AQSh",
      "Rossiya",
      "Germaniya",
      "Yaponiya"
    ],
    correctAnswer: "Rossiya"
  },
  {
    question: "Bolalarning harkatiga o'ynashiga bir joyda o'tirib qolmasilikni hamisha harkatda bo'lishni tavsiya etagan pedagog olim kim",
    options: [
      "Ya.A. Komenskiy",
      "I.G.Pestalossi",
      "K.D. Ushinskiy",
      "Makarenko"
    ],
    correctAnswer: "I.G.Pestalossi"
  },
  {
    question: "Ota-onaning uyi -axloq maktabidir!». g'oya muallifi kim",
    options: [
      "K.D. Ushinskiy",
      "I.G.Pestalossi",
      "J.J. Russo",
      "Ya.A. Komenskiy"
    ],
    correctAnswer: "I.G.Pestalossi"
  },
  {
    question: "Yan Amos Komenskiy axloqiy tarbiyani qanday sharxlaydi",
    options: [
      "o'z-o'zini nazorat qilish",
      "o'z-o'zini boshqarish",
      "o'z-o'zini baholash",
      "o'z-o'zini rivojlantirish"
    ],
    correctAnswer: "o'z-o'zini boshqarish"
  },
  {
    question: "Ijtimoiy pedagog yangi mavzu boʻyicha bolalarning muayyan tushunchalarga egaliklarini aniqlash, ularda matnga nisbatan tahliliy yondashish ko'nikmalarini shakllantirishga xizmat qiladi. Qaysi interfaol metod haqida fikr yuritilgan",
    options: [
      "Klaster",
      "\"Insert\"",
      "Bumerang",
      "Zinama-zina"
    ],
    correctAnswer: "\"Insert\""
  },
  {
    question: "Ijtimoiy pedagog kichik hajmli, erkin bayon usuliga ega boʻlib, o'rganilayotgan muammo yoki tahlil qilinayotgan masala yuzasidan shaxsiy taassurot, tasavvurlarni ifodalashga xizmat qiladi. Qaysi interfaol metod haqida fikr yuritilgan",
    options: [
      "\"Aqliy hujum\"",
      "\"Kichik esse\"",
      "Venn diagrammasi",
      "Sinkveyin"
    ],
    correctAnswer: "\"Kichik esse\""
  },
  {
    question: "Bolalarni oʻrganilayotgan mavzu (masala, muammo)ni ikki yoki undan ortiq jihatlari bo'yicha taqqoslashga o'rgatadi. Qaysi interfaol metod haqida fikr yuritilgan",
    options: [
      "\"BBB\"",
      "\"Venn diagrammasi\"",
      "T-jadvali",
      "\"Zigzag\""
    ],
    correctAnswer: "\"Venn diagrammasi\""
  },
  {
    question: "Rasmlar, suratlar, chizmalar va boshqar grafik tasvirlar hamda ularning izohlarini oʻzida aks ettiruvchi elektron shakldagi toʻplam bu...",
    options: [
      "Elektron darslik",
      "Elektron albom",
      "Prezentatsiya",
      "Multimedia"
    ],
    correctAnswer: "Elektron albom"
  },
  {
    question: "Bir necha ko'rinishdagi: elektron shakldagi grafik, matnli, raqamli, ovozli, musiqali, video, audio, fotografiya, harakatlanuvchi obrazlar (animasiyalar) va boshqa axborotlarni uzatuvchi kompyuter texnologiyalari uchun taalluqli umumiy tushuncha bu...",
    options: [
      "Internet",
      "Multimedia",
      "Dasturlash",
      "Elektron ta'lim"
    ],
    correctAnswer: "Multimedia"
  },
  {
    question: "Axborotlarni qisqacha bayon qilish, murakkab g'oyalarni, sezgilarni, tasavvurlarni bir necha soʻzlar vositasida bayon qilish imkonini beradigan metodning nomi",
    options: [
      "Klaster",
      "Sinkveyin",
      "Esse",
      "Aqliy hujum"
    ],
    correctAnswer: "Sinkveyin"
  },
  {
    question: "SWOT tahlil metodining maqsadi nimadan iborat",
    options: [
      "Faqat muammoning kuchli tomonini topish",
      "Xulosa, jarayon yoki natijalarni kuchli, kuchsiz tomonlari imkoniyatlari va to'siqlar tartibida tahlil qilishga qaratilgan.",
      "Faqat iqtisodiy tahlil qilish",
      "Siyosiy qarorlar qabul qilish"
    ],
    correctAnswer: "Xulosa, jarayon yoki natijalarni kuchli, kuchsiz tomonlari imkoniyatlari va to'siqlar tartibida tahlil qilishga qaratilgan."
  },
  {
    question: "Qaysi yillardan boshlab \"Aqliy hujum \"metodi Ozbekistonda ishlatila boshlandi?",
    options: [
      "1980-yil",
      "1990-yil",
      "2000-yil",
      "2010-yil"
    ],
    correctAnswer: "1990-yil"
  },
  {
    question: "Kasbiy faoliyat mazmunining asosini nimalar tashkil etadi",
    options: [
      "shaxsiy qiziqishlar",
      "kasbiy bilimlar, ko'nikmalar, malakalar",
      "moddiy ta'minot",
      "ijtimoiy mavqe"
    ],
    correctAnswer: "kasbiy bilimlar, ko'nikmalar, malakalar"
  },
  {
    question: "Keys stadi metodi orqali talabalar qanday ko`nikmaga ega bo'lishadi",
    options: [
      "faqat nazariy bilimlarga",
      "tahliliy amaliy, ijodiy, muloqat, o`z-o`zini tahlil, ijtimoiy ko`nikmalar",
      "faqat yozma nutqqa",
      "faqat sportga oid ko'nikmalar"
    ],
    correctAnswer: "tahliliy amaliy, ijodiy, muloqat, o`z-o`zini tahlil, ijtimoiy ko`nikmalar"
  },
  {
    question: "Sinkven metodi bu...",
    options: [
      "falsafiy risolalar yozish",
      "sinkveyn (fr. \"besh qator\") - ma'lumotlarni sintezlashga yordam beradigan qofiyasiz she'r boʻlib, u asosida o'rganilayotgan mavzuni o'z so'zlari bilan turli variant yoki qarashlar imkoniyatiga ega.",
      "she'r yozish san'ati",
      "ilm-fan metodologiyasi"
    ],
    correctAnswer: "sinkveyn (fr. \"besh qator\") - ma'lumotlarni sintezlashga yordam beradigan qofiyasiz she'r boʻlib, u asosida o'rganilayotgan mavzuni o'z so'zlari bilan turli variant yoki qarashlar imkoniyatiga ega."
  },
  {
    question: "\"O'qish nafaqat xotirani yaxshilaydi, balki so'z boyligini kengaytiradi va diqqatni oshiradi, shu bilan birgalikda, ijodkorlikni ham shakllantiradi\". Bu bolaning ijodkorligini rivojlantirishning qaysi yoʻli",
    options: [
      "Sport mashg'uloti",
      "Mutolaa",
      "Kompyuter o'yinlari",
      "Uyqu"
    ],
    correctAnswer: "Mutolaa"
  },
  {
    question: "Bolaning o'yin faoliyati orqali nimani aniqlash mumkin",
    options: [
      "iqtisodiy holatini",
      "oiladagi muhitni",
      "siyosiy qarashini",
      "kasbiy malakasini"
    ],
    correctAnswer: "oiladagi muhitni"
  },
  {
    question: "Bola tug'ilgandan keyin yashaydigan ilk ijtimoiy muhit bu",
    options: [
      "Maktab",
      "Oila",
      "Ko'cha",
      "Universitet"
    ],
    correctAnswer: "Oila"
  },
  {
    question: "Interfaol ta'lim metodi bu...",
    options: [
      "Faqat yozma ishlar",
      "Ta'lim jarayoniga yangilik olib kirish",
      "Faqat ma'ruzalar",
      "An'anaviy o'qitish"
    ],
    correctAnswer: "Ta'lim jarayoniga yangilik olib kirish"
  },
  {
    question: "Bola (shaxs)dagi ruhiy zo'riqish qanday so'z bilan izohlanadi",
    options: [
      "Eyforiya",
      "Stress",
      "Emotsiya",
      "Motivatsiya"
    ],
    correctAnswer: "Stress"
  },
  {
    question: "Meditatsiya so'zi qaysi tildan olingan va lug'aviy ma'nosi",
    options: [
      "yunoncha - 'o'ylash'",
      "Lotincha -fikrlash",
      "arabcha - 'zikr'",
      "turkiy - 'tinish'"
    ],
    correctAnswer: "Lotincha -fikrlash"
  },
  {
    question: "O'z kasbining mohir ustasi bo'lgan, yuksak darajada madaniyatli, o'z fanini chuqur biladigan, yondash fanlar sohalarini yaxshi tahlil eta oladigan, tarbiyalash va o'qitish uslubiyatini mukammal egallagan mutaxassis... bu",
    options: [
      "olim",
      "mahoratli pedagog",
      "tadbirkor",
      "siyosatchi"
    ],
    correctAnswer: "mahoratli pedagog"
  },
  {
    question: "Manmanlik tushunchasining ta'rifi to'g'ri keltirilgan qatorni toping",
    options: [
      "Kamtarlik",
      "O'z shaxsiyatiga qobiliyatiga ortiqcha baho beruvchi salbiy ahloqiy sifat",
      "O'ziga ishonch",
      "Optimistik kayfiyat"
    ],
    correctAnswer: "O'z shaxsiyatiga qobiliyatiga ortiqcha baho beruvchi salbiy ahloqiy sifat"
  },
  {
    question: "Individual salohiyat, imkoniyatlari ifodasi bu ...",
    options: [
      "Faoliyat",
      "Qobiliyat",
      "Intizom",
      "Qiziqish"
    ],
    correctAnswer: "Qobiliyat"
  },
  {
    question: "Ixcham, ma'noli, ohangdor, muayyan ritm, temp, chastotaga ega bo'lgan nutq, shuningdek, o'qituvchi nutqining jarangdorligi, uning pauza, mantiqiy urg'uga rioya qilishidir. Bu qaysi qobiliyatdir",
    options: [
      "Tashkilotchilik qobiliyati",
      "Nutqiy qobiliyat",
      "Perseptiv qobiliyat",
      "Kommunikativ qobiliyat"
    ],
    correctAnswer: "Nutqiy qobiliyat"
  },
  {
    question: "Bunda mantiqiylik asosida vaziyat (muammo)ni yechish muhim emas, balki ijodiy yondashuv asosida muammoning bir necha yechimlarini topish va ularni tahlil qilish talab etiladi. Bu ko'nikmaning qaysi turi",
    options: [
      "Muloqot ko'nikmalari",
      "Ijodiy ko'nikmalar",
      "Amaliy ko'nikmalar",
      "Ijtimoiy ko'nikmalar"
    ],
    correctAnswer: "Ijodiy ko'nikmalar"
  },
  {
    question: "Unga ko'ra talaba bahs-munozara olib borish, o'z nuqtai nazarini himoya qilish, qaroriga boshqalarni ishontirish, juda qisqa va ishonarli hisobotni tayyorlash ko'nikmalarini oʻzlashtira bilishi zarur. Bu ko'nikmaning qaysi turi",
    options: [
      "Ijodiy ko'nikmalar",
      "Muloqot ko'nikmalari",
      "Tahliliy ko'nikmalar",
      "Ijtimoiy ko'nikmalar"
    ],
    correctAnswer: "Muloqot ko'nikmalari"
  },
  {
    question: "Qarorni muhokama qilish jarayonida bolada boshqalarning xatti-harakatini tahlil qilish, boshqalarni tinglay bilish, bahsda o'zgalarning fikrlarini qo'llab-quvvatlash, ilgari surilgan fikrga qarama-qarshi fikrni bildira olish va oʻzini boshqara olishi lozim. Bu ko'nikmaning qaysi turi",
    options: [
      "Kasbiy ko'nikmalar",
      "Ijtimoiy ko'nikmalar",
      "Ijodiy ko'nikmalar",
      "Tahliliy ko'nikmalar"
    ],
    correctAnswer: "Ijtimoiy ko'nikmalar"
  },
  {
    question: "Qaysi mehnat turida mashg'ulot, o'yinlarga mehnat faoliyati uchun zarur bo'lgan o'yinchoq va qurilmalarni tayyorlash bo'yicha bolalar mehnatidir",
    options: [
      "Maishiy mehnat",
      "Qo'l mehnati",
      "Tabiatdagi mehnat",
      "O'qish mehnati"
    ],
    correctAnswer: "Qo'l mehnati"
  },
  {
    question: "Qaysi ingliz faylasufi (1820-1903) oilaning shaxs shakllanishidagi oʻrni haqidagi ijtimoiy-pedagogik g'oyalar bilan singdirilgan asarlar yaratgan",
    options: [
      "J.Lokk",
      "Gerbert Spenser",
      "R.Ouen",
      "J.Dyui"
    ],
    correctAnswer: "Gerbert Spenser"
  },
  {
    question: "\"Konstitutsiya\" so'zi lotin tilida \"Constitutio\" - so'zidan kelib chiqib, nima degan ma'noni bildiradi",
    options: [
      "\"qonun\", \"tartib\"",
      "\"tuzish\", \"o'rnatish\", \"belgilash\" degan ma'nolarni anglatadi.",
      "\"rivojlanish\", \"o'sish\"",
      "\"bilim\", \"ma'rifat\""
    ],
    correctAnswer: "\"tuzish\", \"o'rnatish\", \"belgilash\" degan ma'nolarni anglatadi."
  },
  {
    question: "Bola - bu",
    options: [
      "14 yoshgacha bo'lgan shaxs",
      "18 yoshgacha bo'lgan shaxs",
      "21 yoshgacha bo'lgan shaxs",
      "Faqat maktab o'quvchisi"
    ],
    correctAnswer: "18 yoshgacha bo'lgan shaxs"
  },
  {
    question: "Ijtimoiylashuvning mikrofaktorlari quyidagilarni o'z ichiga oladi",
    options: [
      "ommaviy axborot vositalari",
      "oila, tengdoshlar, ta'lim tashkilotlari",
      "davlat, hukumat",
      "madaniyat, din"
    ],
    correctAnswer: "oila, tengdoshlar, ta'lim tashkilotlari"
  },
  {
    question: "Qaysi nemis pedagogi tomonidan fanga kiritilgan «ijtimoiy pedagogika» atamasi XX asr oxiriga kelib rasmiy ravishda keng qullanila boshlagan",
    options: [
      "G.Natorp",
      "Fridrix Disterveg",
      "P.B. Blumenshteyn",
      "A.Dyukgeym"
    ],
    correctAnswer: "Fridrix Disterveg"
  },
  {
    question: "\"Pedalogiya\" asoschilari kimlar hisoblanadi",
    options: [
      "K.D. Ushinskiy, I.G. Pestalossi",
      "F E. Meyman, S. Xoll, Torndayk",
      "Ya.A. Komenskiy, J.J. Russo",
      "A.S. Makarenko, V.A. Suxomlinskiy"
    ],
    correctAnswer: "F E. Meyman, S. Xoll, Torndayk"
  },
  {
    question: "Jon Dyui asos solgan fanni nomini ko'rsating",
    options: [
      "Estetik pedagogika",
      "Pragmatik pedagogika",
      "Antropologik pedagogika",
      "Logopediya"
    ],
    correctAnswer: "Pragmatik pedagogika"
  },
  {
    question: "E. Meyman, S. Xoll, Torndayk, Rudolf Shteynerlar qaysi fan asoschilaridir",
    options: [
      "Pedagogika",
      "Pedalogiya",
      "Psixologiya",
      "Sotsiologiya"
    ],
    correctAnswer: "Pedalogiya"
  },
  {
    question: "Qaysi alloma ijtimoiylashtirish ko'nikmalari jamoa bo'lib o'qitish jarayonida shakllanadi deb fikr bildiradi",
    options: [
      "Al-Forobiy",
      "Ibn Sino",
      "Beruniy",
      "Kaykovus"
    ],
    correctAnswer: "Ibn Sino"
  },
  {
    question: "Ko'r va kar bolalar uchun maxsus sinflar nechinchi yillarda tashkil etildi",
    options: [
      "1920-1921 yillarda",
      "1943-1944 yillarda",
      "1960-1961 yillarda",
      "1980-1981 yillarda"
    ],
    correctAnswer: "1943-1944 yillarda"
  },
  {
    question: "Rossiyada ijtimoiy pedagogik faoliyatga yo'naltirilgan mutaxassislar tayyorlash nechinchi yillardan boshlangan",
    options: [
      "1950-1960",
      "1970-1980",
      "1990-1995",
      "2000-2005"
    ],
    correctAnswer: "1970-1980"
  },
  {
    question: "Mikrofaktorlarga nimalar kiradi",
    options: [
      "Davlat va jamiyat",
      "Oila, ta`lim muassasalari, tengqurlari",
      "Madaniyat va din",
      "Iqtisodiyot va siyosat"
    ],
    correctAnswer: "Oila, ta`lim muassasalari, tengqurlari"
  },
  {
    question: "Alkagol eng avvalo inson organizmining qaysi qismiga salbiy ta`sir ko`rsatadi",
    options: [
      "Yurak-qon tomir tizimiga",
      "Markaziy asab tizimiga",
      "Oshqozon-ichak tizimiga",
      "Jigar va buyraklarga"
    ],
    correctAnswer: "Markaziy asab tizimiga"
  },
  {
    question: "Deviant xulq-atvor sotsiologiyasi asoschisi kim",
    options: [
      "M. Veber",
      "E Dyurkgeym",
      "O. Kont",
      "K. Marks"
    ],
    correctAnswer: "E Dyurkgeym"
  },
  {
    question: "Toshkentda 1966-yil 26-aprelda bo'lib o'tgan zilzila natijasida nechta ta'lim muassasalari barbod bo'ldi",
    options: [
      "100 ta",
      "245 ta",
      "50 ta",
      "500 ta"
    ],
    correctAnswer: "245 ta"
  },
  {
    question: "\"Mentalitet\" tushunchasi nechanchi asr boshida va kim tomonidan fanga kiritilgan",
    options: [
      "XIX asr oxirida G.Natorp",
      "XX asr boshida L. Levi - Bryul",
      "XX asr o'rtalarida E. Erikson",
      "XXI asr boshida A. Maslou"
    ],
    correctAnswer: "XX asr boshida L. Levi - Bryul"
  },
  {
    question: "O'zbek xalqining axloqiy sifatlarining mustahkamligi qaysi tarbiyaga ahamiyat berilishi bilan bog'liq",
    options: [
      "Jamoat tarbiyasiga",
      "Oilaviy tarbiyaga",
      "Maktab tarbiyasiga",
      "Ommaviy axborot vositalari ta'siriga"
    ],
    correctAnswer: "Oilaviy tarbiyaga"
  },
  {
    question: "Ijtimoiy axborot nechta asosiy guruhga boʻlinadi",
    options: [
      "2 ta",
      "3 ta",
      "4 ta",
      "5 ta"
    ],
    correctAnswer: "3 ta"
  },
  {
    question: "Eksperiment metodining qanday turlari bor",
    options: [
      "uzoq va qisqa muddatli",
      "labaratoriya va tabiiy, aniqlovchi va shakllantiruvchi",
      "og'zaki va yozma",
      "individuval va jamoaviy"
    ],
    correctAnswer: "labaratoriya va tabiiy, aniqlovchi va shakllantiruvchi"
  },
  {
    question: "L.S. Vigotskiy bolalar psixologiyasi faniga qaysi tamoyilini kirgizgan",
    options: [
      "izchillik",
      "tarixiylik",
      "ilmiylik",
      "uzluksizlik"
    ],
    correctAnswer: "tarixiylik"
  },
  {
    question: "Amaliy ijtimoiy xodim atamasi nechanchi yildan buyon qo'llanilmoqda",
    options: [
      "1950 yil",
      "1970 yil",
      "1990 yil",
      "2000 yil"
    ],
    correctAnswer: "1970 yil"
  },
  {
    question: "Quyidagi olimlarning qaysi biri o'yin faoliyatining inson psixik rivojlanishidagi ahamiyatini chuqur o'rganib, \"O'yin psixologiyasi asarini yozgan",
    options: [
      "J.Piajye",
      "L.S. Vigotskiy",
      "Z.Freyd",
      "E.Erikson"
    ],
    correctAnswer: "L.S. Vigotskiy"
  },
  {
    question: "Ijtimoiy pedagogikaning obyektini ko'rsating",
    options: [
      "Ta'lim mazmuni",
      "Ijtimoiy hayotdagi shaxs",
      "Pedagogik jarayon",
      "O'qituvchining shaxsi"
    ],
    correctAnswer: "Ijtimoiy hayotdagi shaxs"
  },
  {
    question: "Predmetli-manipulyativ faoliyat qaysi yosh davrida yetakchi faoliyat bo'lib hisoblanadi",
    options: [
      "Chaqaloqlik davri",
      "Ilk bolalik davri",
      "Maktabgacha davr",
      "O'smirlik davri"
    ],
    correctAnswer: "Ilk bolalik davri"
  },
  {
    question: "Bolaning rivojlanish xaritasini to 'ldirish uchun nechta sikldan iborat bo'lgan kuzatuv olib boriladi",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    correctAnswer: "3"
  },
  {
    question: "Ijtimoiy pedagogning topshiriqlar yuzasidan bolaning javobi yoki shaxsiy fikrlarini tinglay bilishi bu...",
    options: [
      "perseptiv malakasi",
      "kommunikativ malakasi",
      "tashkilotchilik malakasi",
      "diagnostik malakasi"
    ],
    correctAnswer: "kommunikativ malakasi"
  },
  {
    question: "Ijtimoiy pedagog tomonidan mavzuga oid dalil, hodisa va voqealarning yaxlit yoki qismlarga bo'lib, tasviriy vositalar yordamida obrazli tasvirlash yo'li bilan ixcham, qisqa va izchil bayon qilinishi bu...",
    options: [
      "Ma'ruza",
      "Hikoya",
      "Suhbat",
      "Tushuntirish"
    ],
    correctAnswer: "Hikoya"
  },
  {
    question: "Mashqlar, mustaqil topshiriqlar, amaliy va tajriba ishlari asosida o'quv materialini egallash ko'rinishlari ta'limning qaysi metodidir",
    options: [
      "og'zaki metodlar",
      "amaliy metodlar",
      "ko'rgazmali metodlar",
      "muammoli metodlar"
    ],
    correctAnswer: "amaliy metodlar"
  },
  {
    question: "Nechanchi yilda Oʻzbekiston Respublikasining \"Fuqarolarning o'z-o'zini boshqarish organlari haqida\"gi Qonuni yangi tahrirda qabul qilingan",
    options: [
      "1993-yil",
      "2006-yilning 24-aprelida",
      "2010-yil",
      "2017-yil"
    ],
    correctAnswer: "2006-yilning 24-aprelida"
  },
  {
    question: "O'zbekiston Respublikasi Vazirlar Mahkamasining nechanchi yilda \"Sog'lom avlod uchun xalqaro nohukumat xayriya fondining faoliyatini ta'minlash choralari to'g'risida\"gi Farmoni tasdiqlandi",
    options: [
      "1998-yil",
      "2000-yilning 4-martda",
      "2005-yil",
      "2010-yil"
    ],
    correctAnswer: "2000-yilning 4-martda"
  },
  {
    question: "Vazirlar Mahkamasining nechanchi yilda \"Ko'p bolali oilalarga yordam ko'rsatish toʻgʻrisida\"gi Farmoni tasdiqlandi",
    options: [
      "1991-yil",
      "1996-yilning 10-dekabrda",
      "2000-yil",
      "2005-yil"
    ],
    correctAnswer: "1996-yilning 10-dekabrda"
  },
  {
    question: "Nechanchi yilda Vazirlar Mahkamasining \"SOS - Oʻzbekiston bolalar mahallasi assotsiatsiyasini ta'sis etish to'g'risida\"gi farmoyishi chop qilindi",
    options: [
      "1995-yil",
      "1997-yil 31-dekabrda",
      "2000-yil",
      "2005-yil"
    ],
    correctAnswer: "1997-yil 31-dekabrda"
  },
  {
    question: "Nechanchi yilda O'zbekistonda shaxsni shakllantirishning ijtimoiy pedagogik konsepsiyasi ishlab chiqilgan edi",
    options: [
      "1991-yil",
      "1997-yil",
      "2000-yil",
      "2005-yil"
    ],
    correctAnswer: "1997-yil"
  },
  {
    question: "Oilaga ko'rsatiladigan ijtimoiy-pedagogik yordamning qanday shakllari mavjud",
    options: [
      "faqat bir martalik",
      "Uzoq va qisqa muddatli",
      "faqat yozma",
      "faqat og'zaki"
    ],
    correctAnswer: "Uzoq va qisqa muddatli"
  },
  {
    question: "Bolalar uylarining asosiy vazifalar nimalardan iborat",
    options: [
      "Faqat moddiy ta'minot",
      "Bolaning normal rivojlanishini ta'minlab beruvchi qulay sharoitlar yaratish",
      "Faqat o'qitish",
      "Faqat nazorat qilish"
    ],
    correctAnswer: "Bolaning normal rivojlanishini ta'minlab beruvchi qulay sharoitlar yaratish"
  },
  {
    question: "Maktablarda ijtimoiy pedagogik ta'lim tizimi kim tomonidan nazorat qilinadi",
    options: [
      "Direktor",
      "Tarbiyaviy ishlar tashkilotchisi",
      "O'qituvchilar",
      "Ota-onalar"
    ],
    correctAnswer: "Tarbiyaviy ishlar tashkilotchisi"
  },
  {
    question: "Kim tomonidan «Ijtimoiy pedagogikaning yaratilishi» (1876-1896) asari yozilgan",
    options: [
      "J.Dyui",
      "O. Kant",
      "A.Dyurkgeym",
      "P.Freyr"
    ],
    correctAnswer: "O. Kant"
  },
  {
    question: "...yirik hajmdagi o'quv materialini og'zaki bayon qilish metodi sanalib, u qat'iy mantiqiy ketma-ketlik, uzatilayotgan axborotlarning ko'pligi, bilimlar bayonining tizimliligi kabi oʻziga xos xususiyatlarini namoyon etadi",
    options: [
      "Suhbat",
      "Ma'ruza",
      "Hikoya",
      "Tushuntirish"
    ],
    correctAnswer: "Ma'ruza"
  },
  {
    question: "Muammoli ta'lim, mujassamlashtirilgan ta'lim, modul ta'limi, rivojlantiruvchi ta'lim bu...",
    options: [
      "Ta'lim tamoyillari",
      "Ta'lim turlari",
      "Ta'lim metodlari",
      "Ta'lim vositalari"
    ],
    correctAnswer: "Ta'lim turlari"
  },
  {
    question: "Mavzusining biror tomoni yoki hodisalari haqida bilib olish maqsadida maxsus shaxslar bilan og'zaki savollar berilib, ulardan axborot olish jarayoni bu...",
    options: [
      "tajriba metodi",
      "suhbat metodi",
      "kuzatish metodi",
      "anketa metodi"
    ],
    correctAnswer: "suhbat metodi"
  },
  {
    question: "Maktab o'quvchilari ijodini hamda ularning turli-tuman ishlarini o'rganish va tahlil qilish pedagogik tadqiqotning samarali metodi bu",
    options: [
      "Anketa metodi",
      "Bolalar ijodini o'rganish metodi",
      "Eksperiment metodi",
      "Suhbat metodi"
    ],
    correctAnswer: "Bolalar ijodini o'rganish metodi"
  },
  {
    question: "Materialni og'zaki bayon qilish metodlari to'g'ri berilgan qatorni toping",
    options: [
      "mashq, amaliy ish",
      "Hikoya, suhbat, tushuntirish, maktab ma'ruzasi",
      "namoyish, ekskursiya",
      "test, imtihon"
    ],
    correctAnswer: "Hikoya, suhbat, tushuntirish, maktab ma'ruzasi"
  },
  {
    question: "Og'zaki ta'lim metodlari to'g'ri berilgan qatorni toping",
    options: [
      "Amaliy ish, laboratoriya",
      "Hikoya, suhbat, ma'ruza",
      "Ko'rgazmali qurol, texnik vosita",
      "Test, nazorat ishi"
    ],
    correctAnswer: "Hikoya, suhbat, ma'ruza"
  },
  {
    question: "O'quv mashg'uloti jarayonida tarbiyachining suhbati ta'limning qaysi metodiga kiritiladi",
    options: [
      "Amaliy",
      "Og'zaki",
      "Ko'rgazmali",
      "Nazorat"
    ],
    correctAnswer: "Og'zaki"
  },
  {
    question: "Anketa metodi bu...",
    options: [
      "lotincha - 'sinov'",
      "fransuzcha - tekshirish",
      "yunoncha - 'o'lchash'",
      "arabcha - 'savol'"
    ],
    correctAnswer: "fransuzcha - tekshirish"
  },
  {
    question: "Ya.A.Komenskiy tomonidan fanga kiritilgan bo'lib, tabiatda hayot bahordan boshlangani kabi ta'lim olish jarayoni uchun eng qulay davr bolalik ekanligi g'oyasiga asoslanadi. Bu qaysi ta'lim tamoyili haqida fikr yuritilgan",
    options: [
      "Ta'limning ilmiylik tamoyili",
      "Ta'limning tabiat bilan uyg'unligi tamoyili.",
      "Ta'limning madaniyat bilan uyg'unligi tamoyili",
      "Ta'limning izchillik tamoyili"
    ],
    correctAnswer: "Ta'limning tabiat bilan uyg'unligi tamoyili."
  },
  {
    question: "U insonga o'z dunyosi va boshqa madaniyatlarni anglash, mazkur madaniyat vakillari fikrini eshita olish, ularni qadrlash, ularning dunyosini tushunish, o'zining shaxsiy fikriga tayanish, o'zining bu yorug' olamdagi mavjudligini anglash va o'zining hayotdagi, madaniyatdagi o'rnini aniqlash imkonini beradi. Bu qaysi ta'lim tamoyili haqida fikr yuritilgan",
    options: [
      "Ta'limning ilmiylik tamoyili",
      "Ta'limning tabiat bilan uyg'unligi tamoyili",
      "Ta'limning madaniyat bilan uyg'unlik tamoyili",
      "Ta'limning o'quvchilarga mos bo'lish tamoyili"
    ],
    correctAnswer: "Ta'limning madaniyat bilan uyg'unlik tamoyili"
  },
  {
    question: "Bu tamoyil ta'lim mazmunini zamonaviy fan va texnika rivojlanish darajasi, jahon sivilizatsiyasi to'plagan tajribaga mos kelishini ifodalaydi. Bu qaysi ta'lim tamoyili haqida fikr yuritilgan",
    options: [
      "Ta'limning o'quvchilarga mos bo'lish tamoyili",
      "Ta'limning ilmiylik tamoyili",
      "Ta'limning izchillik tamoyili",
      "Ta'limning madaniyat bilan uyg'unligi tamoyili"
    ],
    correctAnswer: "Ta'limning ilmiylik tamoyili"
  },
  {
    question: "O'quv materiallarining mazmuni u yoki bu sinf o'quvchilarining jismoniy rivojiga, umumiy tayyorgarligiga - saviyasi va imkoniyatlariga loyiq bo'lishi tushuniladi. Bu qaysi ta'lim tamoyili",
    options: [
      "Ta'limning izchillik tamoyili",
      "Ta'limning o'quvchilarga mos bo'lish tamoyili",
      "Ta'limning ilmiylik tamoyili",
      "Ta'limning tabiat bilan uyg'unligi tamoyili"
    ],
    correctAnswer: "Ta'limning o'quvchilarga mos bo'lish tamoyili"
  },
  {
    question: "O'quvchilarning uzluksiz va tizimli sur'atda mustaqil ish olib borishlarini, o'quvchilarning o'zlashtirgan bilim va hosil bo'lgan ko'nikma, malakalarini hisobga olib borishni ham o'z ichiga oladi. Bu qaysi tamoyildir",
    options: [
      "Ta'limning ilmiylik tamoyili",
      "Ta'limning tizimliligi va izchillik tamoyili",
      "Ta'limning tabiat bilan uyg'unligi tamoyili",
      "Ta'limning madaniyat bilan uyg'unligi tamoyili"
    ],
    correctAnswer: "Ta'limning tizimliligi va izchillik tamoyili"
  },
  {
    question: "Yopiq testlar",
    options: [
      "faqat yozma javob talab qiladi",
      "respondentlar «ha», «yo'q», «qisman» yoki «ijobiy», «qoniqarli», «salbiy» va hokazo tarzdagi javob variantlarini tanlash orqali savollarga javob beradilar.",
      "faqat og'zaki javob talab qiladi",
      "matematik hisob-kitoblarni o'z ichiga oladi"
    ],
    correctAnswer: "respondentlar «ha», «yo'q», «qisman» yoki «ijobiy», «qoniqarli», «salbiy» va hokazo tarzdagi javob variantlarini tanlash orqali savollarga javob beradilar."
  },
  {
    question: "Pedagogik tajriba ...",
    options: [
      "lotincha «o'qitish»",
      "eksperiment - lotincha «sinab ko'rish», «tajriba qilib ko'rish»",
      "yunoncha «o'lchash»",
      "arabcha «so'rov»"
    ],
    correctAnswer: "eksperiment - lotincha «sinab ko'rish», «tajriba qilib ko'rish»"
  },
  {
    question: "Kim ijtimoiy pedagogikaga uning ob'yekti va predmetini aniqlash orqali ta'rif bermoqchi bo'lgan",
    options: [
      "A.V.Mudrik",
      "M. A. Galaguzova",
      "V.Vasilkova",
      "L.S. Vigotskiy"
    ],
    correctAnswer: "M. A. Galaguzova"
  },
  {
    question: "O'zbekiston Respublikasining ilk va maktabgacha yoshdagi bolalar rivojlanishiga qo'yiladigan Davlat talablarinining necha sohalarga bo'linadi",
    options: [
      "3",
      "5",
      "7",
      "9"
    ],
    correctAnswer: "5"
  },
  {
    question: "Ushbu misralar kimning qalamiga mansub \"Aytsang unutaman, koʻrsam eslab qolaman, o'zim bajarib, anglab yetaman\"",
    options: [
      "Suqrot",
      "Konfutsiy",
      "Platon",
      "Arastu"
    ],
    correctAnswer: "Konfutsiy"
  },
  {
    question: "Jamiyat ma'naviyatining shakllantiruvchi omillarini ko'rsating",
    options: [
      "iqtisodiyot, siyosat, texnika",
      "madaniyat, ma'rifat, mafkura",
      "tabiat, biologiya, irsiyat",
      "sport, o'yin, dam olish"
    ],
    correctAnswer: "madaniyat, ma'rifat, mafkura"
  },
  {
    question: "Ushbu asarlar kimning qalamiga mansub?\"Onalar maktabi\", \"Insoniy ishlarni tuzatish haqida umumiy maslahatlar\" va \"Hislar vositasi bilan idrok qilinadigan narsalarning suratlari\".",
    options: [
      "J.J. Russo",
      "Yan Amos Komenskiy",
      "K.D. Ushinskiy",
      "I.G. Pestalossi"
    ],
    correctAnswer: "Yan Amos Komenskiy"
  },
  {
    question: "Alisher Navoiyning ko'proq qaysi asarida ustoz haqidagi fikr yuritilgan",
    options: [
      "'Mahbub ul-qulub'",
      "'Hayrat-ul abror' asari;",
      "'Saddi Iskandariy'",
      "'Lison ut-tayr'"
    ],
    correctAnswer: "'Hayrat-ul abror' asari;"
  },
  {
    question: "Ijtimoiy pedagogning suhbati ta'limning qaysi metodiga kiritiladi",
    options: [
      "Ko'rgazmali",
      "Og'zaki",
      "Amaliy",
      "Nazorat"
    ],
    correctAnswer: "Og'zaki"
  },
  {
    question: "Tafakkurni shakllantirishga yo'naltirilgan pedagogik faoliyat qaysi tarbiya turiga kiradi",
    options: [
      "Estetik",
      "Aqliy",
      "Axloqiy",
      "Jismoniy"
    ],
    correctAnswer: "Aqliy"
  },
  {
    question: "Ijtimoiy pedagogika qachon va qayerda fan sifatida shakllangan",
    options: [
      "XIX asrda Germaniyada",
      "80-yillarda Rossiyada",
      "XX asrda AQShda",
      "Qadimgi Yunonistonda"
    ],
    correctAnswer: "80-yillarda Rossiyada"
  },
  {
    question: "Ijtimoiy pedagogikaning ijtimoiy sog'lomlashtirish funksiyasining mazmuni nima",
    options: [
      "faqat sog'lom bolalar bilan ishlash",
      "Nogiron bolalar jismoniy yoki psixik kamchiliklari bor bolalar bilan o'tkaziladigan tarbiyaviy va ta`lim ishlari bulib, bunda pedagog asosiy ijtimoiy vazifalarni bajaradi",
      "faqat jismoniy mashg'ulotlar o'tkazish",
      "faqat tibbiy yordam ko'rsatish"
    ],
    correctAnswer: "Nogiron bolalar jismoniy yoki psixik kamchiliklari bor bolalar bilan o'tkaziladigan tarbiyaviy va ta`lim ishlari bulib, bunda pedagog asosiy ijtimoiy vazifalarni bajaradi"
  },
  {
    question: "XX- asrning 80- yillari o'rtalarida pedagogik amaliyotda paydo bo'lgan ijtimoiy - shaxsiy texnologiya muallifi qaysi javobda to'g'ri ko'rsatilgan",
    options: [
      "V.A. Suxomlinskiy",
      "Sh. A. Amonashvili",
      "A.S. Makarenko",
      "I.G. Pestalossi"
    ],
    correctAnswer: "Sh. A. Amonashvili"
  },
  {
    question: "Mazkur tuzilma, bir tomondan, jamoa a'zolari qo'yilgan ishchanlik munosabatlarini ifoda etsa, ikkinchi tomondan, rahbarlik vazifasini bajaruvchi tarbiyachilar hamda jamoa a'zolari o'rtasidagi mavjud boshqarish munosabatlari mazmunini ifoda etadi. Bu jamoaning qanday tuzilishi",
    options: [
      "norasmiy tuzilishi",
      "rasmiy tuzilishi",
      "kommunikativ tuzilishi",
      "ijtimoiy tuzilishi"
    ],
    correctAnswer: "rasmiy tuzilishi"
  },
  {
    question: "Jamoaning barcha a'zolari o'rtasidagi shaxslararo ma'naviy, psixologik",
    options: [
      "rasmiy tuzilishi",
      "norasmiy tuzilishi",
      "ishchanlik munosabati",
      "boshqarish munosabati"
    ],
    correctAnswer: "norasmiy tuzilishi"
  },
  {
    question: "Oilaning rekreativ vazifasi nimani anglatadi",
    options: [
      "bolalarni dunyoga keltirish",
      "o‘zaro jismoniy, moddiy va psixologik yordam ko‘rsatish, bir-birining salomatligini mustahkamlash, oila a’zolarining dam olishlarini tashkil qilish",
      "oila a’zolarining o‘zaro muloqoti",
      "oilaviy budjetni boshqarish"
    ],
    correctAnswer: "o‘zaro jismoniy, moddiy va psixologik yordam ko‘rsatish, bir-birining salomatligini mustahkamlash, oila a’zolarining dam olishlarini tashkil qilish"
  },
  {
    question: "O‘zaro jismoniy, moddiy va psixologik yordam ko‘rsatish, bir-birining salomatligini mustahkamlash, oila a’zolarining dam olishlarini tashkil qilish oilaning qaysi vazifasi hisoblanadi",
    options: [
      "oilaning felitsitologik vazifasi",
      "oilaning rekreativ vazifasi",
      "oilaning reproduktiv vazifasi",
      "oilaning tarbiyaviy vazifasi"
    ],
    correctAnswer: "oilaning rekreativ vazifasi"
  },
  {
    question: "Oilaning kommunikativ vazifasi nimani anglatadi",
    options: [
      "o‘zaro jismoniy, moddiy va psixologik yordam ko‘rsatish",
      "oila a’zolarining o‘zaro muloqot va o‘zaro tushunishga bo‘lgan ehtiyojini qondirish",
      "bolalarni dunyoga keltirish",
      "oilaviy budjetni boshqarish"
    ],
    correctAnswer: "oila a’zolarining o‘zaro muloqot va o‘zaro tushunishga bo‘lgan ehtiyojini qondirish"
  }
];


// ===== GLOBAL O'ZGARUVCHILAR =====
const quizContainer = document.getElementById('quiz-container');
const nextButton = document.getElementById('nextBtn');
const summaryResultsSpan = document.getElementById('summaryResults');
const resultModal = document.getElementById('resultModal');
const continueBtn = document.getElementById('continueBtn');

let shuffledAllQuestions = [];
let currentQuestionIndex = 0;
let totalAttempts = 0;
let correctCount = 0;
let questionAnsweredThisTurn = false;

// 20 ta savollik blok uchun
let blockCorrectCount = 0;
let blockTotalCount = 0;
let blockStartIndex = 0;

// ===== YORDAMCHI FUNKSIYALAR =====
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function updateResults() {
    let percentage = 0;
    if (totalAttempts > 0) {
        percentage = (correctCount / totalAttempts) * 100;
    }
    summaryResultsSpan.textContent = `Urinish: ${totalAttempts}, To'g'ri: ${correctCount}, Foiz: ${percentage.toFixed(0)}%`;
}

function loadQuestion() {
    quizContainer.innerHTML = '';
    questionAnsweredThisTurn = false;
    nextButton.disabled = true;

    if (shuffledAllQuestions.length === 0) {
        shuffledAllQuestions = [...questionsData];
        shuffleArray(shuffledAllQuestions);
        currentQuestionIndex = 0;
    }

    if (currentQuestionIndex >= shuffledAllQuestions.length) {
        currentQuestionIndex = 0;
        shuffleArray(shuffledAllQuestions);
    }

    const q = shuffledAllQuestions[currentQuestionIndex];
    const questionBlock = document.createElement('div');
    questionBlock.classList.add('question-block');

    const questionText = document.createElement('p');
    questionText.classList.add('question-text');
    questionText.textContent = `${totalAttempts + 1}. ${q.question}`;
    questionBlock.appendChild(questionText);

    const optionsList = document.createElement('ul');
    optionsList.classList.add('options-list');

    const shuffledOptions = [...q.options];
    shuffleArray(shuffledOptions);

    shuffledOptions.forEach((option, optionIndex) => {
        const listItem = document.createElement('li');
        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = 'question';
        radioInput.value = option;
        radioInput.id = `q-option${optionIndex}`;

        const label = document.createElement('label');
        label.htmlFor = `q-option${optionIndex}`;
        label.textContent = option;

        radioInput.addEventListener('change', (event) => {
            if (questionAnsweredThisTurn) return;

            const selectedValue = event.target.value;
            const allLabels = questionBlock.querySelectorAll('label');
            
            totalAttempts++;
            blockTotalCount++;

            if (selectedValue === q.correctAnswer) {
                // To'g'ri javob
                label.classList.add('selected-correct');
                correctCount++;
                blockCorrectCount++;

                let feedbackDiv = questionBlock.querySelector('.feedback');
                if (feedbackDiv) feedbackDiv.remove();
                
                feedbackDiv = document.createElement('div');
                feedbackDiv.classList.add('feedback', 'correct');
                feedbackDiv.textContent = 'To\'g\'ri!';
                questionBlock.appendChild(feedbackDiv);
            } else {
                // Noto'g'ri javob
                label.classList.add('selected-wrong');
                
                // To'g'ri javobni ko'rsatish
                allLabels.forEach(lbl => {
                    const radio = document.getElementById(lbl.htmlFor);
                    if (radio && radio.value === q.correctAnswer) {
                        lbl.classList.add('show-correct');
                    }
                });

                let feedbackDiv = questionBlock.querySelector('.feedback');
                if (feedbackDiv) feedbackDiv.remove();
                
                feedbackDiv = document.createElement('div');
                feedbackDiv.classList.add('feedback', 'incorrect');
                feedbackDiv.textContent = `Noto\'g\'ri. To'g'ri javob: "${q.correctAnswer}"`;
                questionBlock.appendChild(feedbackDiv);
            }

            updateResults();

            const radioButtons = questionBlock.querySelectorAll('input[type="radio"]');
            radioButtons.forEach(radio => {
                radio.disabled = true;
            });

            questionAnsweredThisTurn = true;
            nextButton.disabled = false;
        });

        listItem.appendChild(radioInput);
        listItem.appendChild(label);
        optionsList.appendChild(listItem);
    });

    questionBlock.appendChild(optionsList);
    quizContainer.appendChild(questionBlock);
}

function showResultModal() {
    const modalCorrect = document.getElementById('modalCorrect');
    const modalWrong = document.getElementById('modalWrong');
    const modalPercent = document.getElementById('modalPercent');
    const modalVerdict = document.getElementById('modalVerdict');
    const modalIcon = document.querySelector('.modal-icon');

    const wrongCount = blockTotalCount - blockCorrectCount;
    const percentage = blockTotalCount > 0 ? (blockCorrectCount / blockTotalCount) * 100 : 0;

    modalCorrect.textContent = blockCorrectCount;
    modalWrong.textContent = wrongCount;
    modalPercent.textContent = percentage.toFixed(0) + '%';

    // Baholash (70% o'tish bali)
    if (percentage >= 70) {
        modalVerdict.textContent = '🎉 Tabriklaymiz! Siz imtihondan muvaffaqiyatli o\'tdingiz!';
        modalVerdict.className = 'modal-verdict pass';
        modalIcon.textContent = '🎉';
    } else {
        modalVerdict.textContent = '😔 Afsuski, siz imtihondan o\'ta olmadingiz. Yana harakat qiling!';
        modalVerdict.className = 'modal-verdict fail';
        modalIcon.textContent = '😔';
    }

    resultModal.style.display = 'block';
}

function handleNextQuestion() {
    currentQuestionIndex++;
    
    // Har 20 ta savoldan keyin modal ko'rsatish
    if (blockTotalCount > 0 && blockTotalCount % 20 === 0) {
        showResultModal();
        return;
    }

    loadQuestion();
}

// ===== HODISA TINGLOVCHILAR =====
nextButton.addEventListener('click', handleNextQuestion);

continueBtn.addEventListener('click', () => {
    resultModal.style.display = 'none';
    
    // Blok statistikasini tiklash
    blockCorrectCount = 0;
    blockTotalCount = 0;
    blockStartIndex = currentQuestionIndex;
    
    // Yangi savol yuklash
    loadQuestion();
});

// ===== LOGIN TIZIMI =====
window.addEventListener('DOMContentLoaded', function() {
    const isAuthenticated = localStorage.getItem(AUTH_KEY);
    
    if (isAuthenticated === 'true') {
        document.getElementById('loginScreen').classList.add('hidden');
        document.body.classList.remove('login-active');
        startTimer();
        updateResults();
        loadQuestion();
    } else {
        document.body.classList.add('login-active');
        document.getElementById('loginScreen').style.display = 'flex';
    }
});

document.getElementById('loginBtn').addEventListener('click', function() {
    checkCredentials();
});

document.getElementById('password').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkCredentials();
    }
});

document.getElementById('username').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('password').focus();
    }
});

function checkCredentials() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    const loginBtn = document.getElementById('loginBtn');
    const btnText = document.getElementById('btnText');

    if (!username || !password) {
        errorMessage.textContent = '⚠️ Iltimos, barcha maydonlarni to\'ldiring!';
        errorMessage.classList.add('show');
        return;
    }

    loginBtn.disabled = true;
    btnText.innerHTML = 'Tekshirilmoqda<span class="loading"></span>';
    errorMessage.classList.remove('show');

    setTimeout(() => {
        if (username === VALID_CREDENTIALS.username && password === VALID_CREDENTIALS.password) {
            localStorage.setItem(AUTH_KEY, 'true');
            errorMessage.classList.remove('show');
            
            btnText.textContent = '✓ Muvaffaqiyatli!';
            loginBtn.style.background = 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)';
            
            setTimeout(() => {
                showMainContent();
            }, 500);
        } else {
            errorMessage.textContent = '❌ Login yoki parol noto\'g\'ri!';
            errorMessage.classList.add('show');
            loginBtn.disabled = false;
            btnText.textContent = 'Kirish';
            
            document.getElementById('password').value = '';
            document.getElementById('password').focus();
        }
    }, 500);
}

function showMainContent() {
    const loginScreen = document.getElementById('loginScreen');
    
    loginScreen.style.animation = 'fadeOut 0.5s ease-out';
    
    setTimeout(() => {
        loginScreen.classList.add('hidden');
        document.body.classList.remove('login-active');
        startTimer();
        updateResults();
        loadQuestion();
    }, 500);
}

function logout() {
    if (confirm('Rostdan ham tizimdan chiqmoqchimisiz?')) {
        localStorage.removeItem(AUTH_KEY);
        location.reload();
    }
}

console.log('%c💡 Tizimdan chiqish uchun:', 'color: blue; font-size: 14px; font-weight: bold;');
console.log('%clogout()', 'color: green; font-size: 12px; background: #f0f0f0; padding: 5px;');

// ===== TAYMER =====
let startTime;
let timerInterval;

function startTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const elapsedTime = Date.now() - startTime;
    const totalSeconds = Math.floor(elapsedTime / 1000);
    
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formattedTime = 
        String(minutes).padStart(2, '0') + ':' + 
        String(seconds).padStart(2, '0');

    document.getElementById('timer').textContent = formattedTime;

}








