// Facts for the homepage — only from veon/client.json (company.*, socials[] with status "confirmed").
// No invented numbers, prices, reviews or partner logos.

export const SOON = "Розділ у розробці";

export const contacts = {
  messengerNumber: "+380 95 260 32 15",
  whatsapp: "https://wa.me/380952603215",
  viber: "viber://chat?number=%2B380952603215",
  email: "info@bimedis.com",
  offices: [
    {
      id: "ua",
      country: "Україна",
      city: "Заліщики",
      address: ["вул. Степана Бандери, 84", "м. Заліщики, Тернопільська обл., 48600"],
      phone: "+38 095 238 30 35",
      tel: "tel:+380952383035",
    },
    {
      id: "us",
      country: "США",
      city: "Kissimmee, FL",
      address: ["1016 East Osceola Parkway", "Kissimmee, FL 34744, USA"],
      phone: "+1 407 994 4619",
      tel: "tel:+14079944619",
    },
  ],
} as const;

export const socials = [
  { name: "Facebook", icon: "facebook", href: "https://www.facebook.com/Bimedis" },
  { name: "Instagram", icon: "instagram", href: "https://www.instagram.com/bimedis/" },
  { name: "YouTube", icon: "youtube", href: "https://www.youtube.com/@bimediscompany1157" },
] as const;

export const nav = [
  { href: "#categories", label: "Обладнання" },
  { href: "#buyers", label: "Покупцям" },
  { href: "#sellers", label: "Продавцям" },
  { href: "#trade-in", label: "Trade-in" },
  { href: "#directions", label: "Розділи" },
  { href: "#contacts", label: "Контакти" },
] as const;

// 26 categories of the current homepage (products_services[4]); grouping is editorial (agree in FULL).
export const categoryGroups = [
  {
    title: "Діагностика",
    items: ["Медичне діагностичне", "Ендоскопічне", "Лабораторне", "Кардіологія", "Неврологія", "Офтальмологічне", "ЛОР"],
  },
  {
    title: "Хірургія й реанімація",
    items: ["Анестезіологічне / Реанімація", "Хірургія", "Стерилізаційне", "Урологія", "Акушерство та гінекологія", "Педіатрія"],
  },
  {
    title: "Стоматологія й естетика",
    items: ["Стоматологічне", "Зуботехнічне", "Косметологія та дерматологія"],
  },
  {
    title: "Лікарня й реабілітація",
    items: ["Лікарняне", "Засоби догляду / Реабілітації", "Фізіотерапія", "Пристрої для здоров'я або фітнесу", "Мобільні клініки", "Витратні матеріали"],
  },
  {
    title: "Цифрова медицина й інше",
    items: ["Медичне ПЗ", "Телемедицина", "Медичні тренінги", "Ветеринарія"],
  },
] as const;

export const countries = [
  "Україна", "США", "Німеччина", "Іспанія", "Франція", "Італія", "Польща", "Японія", "Данія",
  "Нідерланди", "Швеція", "Румунія", "Португалія", "Індія", "Бельгія", "Австрія", "Казахстан",
  "Велика Британія", "Австралія", "Канада", "Марокко", "Алжир",
] as const;

export const tiers = [
  { name: "BASIC" },
  { name: "PRO REGIONAL" },
  { name: "PRO INTERNATIONAL" },
  { name: "PREMIUM" },
] as const;

export const extraServices = ["Переклад", "Персональна візитівка", "Персональний менеджер", "E-mail-розсилки", "Продаж контактів"] as const;

export const directions = [
  "Каталог моделей", "Запчастини", "Послуги", "Для виробників", "Аукціони", "Стати партнером",
] as const;
