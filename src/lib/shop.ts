export type Service = {
  id: string;
  name: string;
  price: number;
  minutes: number;
  description: string;
};

export type Barber = {
  id: string;
  name: string;
  role: string;
  bio: string;
};

export const SHOP = {
  name: "Mercer Barbers",
  tagline: "A heritage barber shop for the modern man.",
  address: "24 Ironmonger Row, Clerkenwell, London EC1V 3RP",
  phone: "020 7946 0000",
  phoneHref: "tel:+442079460000",
  email: "chair@mercerbarbers.co.uk",
  established: "Est. 1998 · Clerkenwell",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=24+Ironmonger+Row+Clerkenwell+London+EC1V+3RP",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Google", href: "https://www.google.com/maps" },
    { label: "WhatsApp", href: "https://wa.me/442079460000" },
  ],
  hours: [
    { days: "Mon – Fri", time: "09:00 – 19:00" },
    { days: "Saturday", time: "08:00 – 18:00" },
    { days: "Sunday", time: "Closed" },
  ],
};

export const SERVICES: Service[] = [
  {
    id: "classic-cut",
    name: "Classic Cut",
    price: 45,
    minutes: 45,
    description: "Scissor work, neck fade, and a styled finish.",
  },
  {
    id: "skin-fade",
    name: "Skin Fade",
    price: 55,
    minutes: 50,
    description: "Precision clipper taper, blended by hand.",
  },
  {
    id: "razor-shave",
    name: "Straight Razor Shave",
    price: 60,
    minutes: 45,
    description: "Hot towels, pre-shave oil, and a cool finish.",
  },
  {
    id: "beard-sculpt",
    name: "Beard Sculpt",
    price: 40,
    minutes: 30,
    description: "Shape, trim, and hot-towel conditioning.",
  },
  {
    id: "kids-cut",
    name: "Young Gent's Cut",
    price: 25,
    minutes: 30,
    description: "For under-12s. Patient hands, no fuss.",
  },
  {
    id: "full-works",
    name: "The Full Works",
    price: 110,
    minutes: 90,
    description: "Cut, shave, and beard — the whole ritual.",
  },
];

export const BARBERS: Barber[] = [
  {
    id: "marcus",
    name: "Marcus Vale",
    role: "Master Barber · Fades",
    bio: "Twenty-two years behind the chair. Opened the Ironmonger Row shop in 1998 and still takes the first appointment of every day.",
  },
  {
    id: "dario",
    name: "Dario Sol",
    role: "Shave Specialist · Rituals",
    bio: "Trained in Naples on straight razors alone. Treats the hot towel as the most important ten minutes of your week.",
  },
  {
    id: "elliot",
    name: "Elliot Reed",
    role: "Beard & Trim · Textures",
    bio: "Our youngest hand and the one people ask for by name for textured crops and curl work.",
  },
];

export const TIME_SLOTS = [
  "09:00",
  "10:00",
  "10:30",
  "11:30",
  "12:00",
  "13:30",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "17:30",
  "18:00",
];

/** Next N bookable dates, skipping Sundays (shop closed). */
export function upcomingDates(count = 12): Date[] {
  const out: Date[] = [];
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);
  cursor.setDate(cursor.getDate() + 1);
  while (out.length < count) {
    if (cursor.getDay() !== 0) out.push(new Date(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }
  return out;
}

export function formatDateTile(d: Date) {
  return d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric" });
}

export function formatDateLong(d: Date) {
  return d.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function toDateKey(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate(),
  ).padStart(2, "0")}`;
}
