import { type ImageAsset } from "./assets";
import type { OtterVariant } from "@/components/ui/otter";

/* ------------------------------------------------------------------ */
/* About                                                              */
/* ------------------------------------------------------------------ */

// Adapted and shortened from the brand’s supplied About Us and founder-note artwork.
export const aboutStory = {
  title: "Great drinks should be an everyday ritual.",
  paragraphs: [
    "Somewhere along the way, grabbing a great drink became a luxury. We believe the little pauses between a hectic lecture, a busy workday or a long drive deserve something special—without making you think twice about the price.",
    "That’s why we created NOOKAA: a grab-and-go beverage brand serving handcrafted coffees, milk teas, refreshers, matcha and more. Premium ingredients, fast service, generous pours and honest prices bring café-quality beverages into everyday life.",
    "From your morning coffee to an afternoon refresher, we’re here to make every sip worth it. Because life is made up of small moments, and we’re here to make them a little happier.",
  ],
  signature: "NOOKAA — Sip the Happiness!",
};

export const aboutValues: { title: string; body: string; art: OtterVariant | ImageAsset }[] = [
  {
    title: "Handcrafted Quality",
    body: "Premium ingredients and care in every cup, bringing café-quality beverages to your everyday routine.",
    art: "inspector",
  },
  {
    title: "Ready for Your Day",
    body: "Fast service and generous pours. Pick up your favourite beverage and carry a little happiness along.",
    art: "scooter",
  },
  {
    title: "Honestly Priced",
    body: "Great drinks should be an everyday ritual, not an occasional indulgence. Every sip should feel worth it.",
    art: "mug",
  },
];

export const founder = {
  heading: "A small part of your story.",
  tagline: "Maybe one day you’ll stop by NOOKAA for a drink.",
  paragraphs: [
    "You won’t know it then, but it might become your first coffee before work, your favourite stop after college, or the sip you celebrate a small win with.",
    "Life isn’t remembered only by its big milestones. It’s remembered by the little moments that made us smile. If NOOKAA becomes a small part of one of those memories, we’ll know we’ve created something beyond a beverage brand.",
    "We want to belong in your everyday life, and we can’t wait to become a small part of your story.",
  ],
  name: "Sip the Happiness.",
  role: "With warmth, the founder of NOOKAA",
};

export const aboutTicker = [
  { word: "Matcha Latte", icon: "mug" },
  { word: "Classic Cold Brew", icon: "teacup" },
  { word: "Iced Latte", icon: "teacup" },
  { word: "Latte", icon: "mug" },
  { word: "Good Sips", icon: "chat" },
] as const;

/* ------------------------------------------------------------------ */
/* Menu                                                               */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/* Contact — placeholder details, replace with your café's real info   */
/* ------------------------------------------------------------------ */

export const contactInfo = {
  address: ["Shop No 1, Icon Heights, J-25", "Kandivali, Panchsheel Garden, Mahavir Nagar", "Kandivali West, Mumbai, Maharashtra 400067"],
  phone: "+91-9594957794",
  email: "hello@nookaa.in",
  hours: [
    { days: "Mon – Fri", time: "7:00 am – 8:00 pm" },
    { days: "Saturday", time: "8:00 am – 9:00 pm" },
    { days: "Sunday", time: "8:00 am – 6:00 pm" },
  ],
};

export const contactReasons = ["Beverage question", "App & rewards", "Feedback", "Business enquiry", "Just saying hi"];

