import { images, doodles, type ImageAsset } from "./assets";
import { beverageCategories, menuNotes } from "./beverage-menu";
import type { OtterVariant } from "@/components/ui/otter";

export const navLinks = [
  { label: "Home", href: "/", icon: "home" },
  { label: "About", href: "/about-us", icon: "about" },
  { label: "Menu", href: "/menu", icon: "menu" },
  { label: "Brewlog", href: "/blog", icon: "blog" },
  { label: "Buzz us", href: "/contact-us", icon: "contact" },
] as const;

export type NavIcon = (typeof navLinks)[number]["icon"];

export const footerLinks = [
  { label: "About us", href: "/about-us" },
  { label: "Menu", href: "/menu" },
  { label: "Brewlog", href: "/blog" },
  { label: "Buzz us", href: "/contact-us" },
  { label: "Franchise Enquiry", href: "/franchise-inquiry" },
  { label: "Jobs", href: "/jobs" },
  { label: "Feedback", href: "/feedback" },
  { label: "Brand Collaborations", href: "/brand-collaborations" },
  { label: "Stalls and Catering", href: "/stalls-and-catering" },
];

export const tickerWords = [
  { word: "Grab & Go", icon: "chat" },
  { word: "Take a Sip", icon: "teacup" },
  { word: "On the Move", icon: "teacup" },
  { word: "Signature Beverages", icon: "mug" },
  { word: "Freshly Brewed", icon: "teacup" },
] as const;

export const ribbonWords = ["Grab & Go", "Made for Your Mood", "Signature Beverages", "Signature Beverages", "Freshly Brewed"];

export type Audience = {
  title: string;
  blurb: string;
  cta: string;
  /** Where the button goes — the matching menu on the menu page. */
  href: string;
  image: ImageAsset;
  imageAlt: string;
  otter: OtterVariant;
};

export const audiences: Audience[] = [
  {
    title: " 9-to-5 Fuelers",
    blurb: "For the desk-job heroes who need a delicious reset.",
    cta: "Fuel up",
    href: "/menu#menu-hot-coffee",
    image: images.audience1,
    otter: "mug",
    imageAlt: "A minimal doodle of the Nookaa otter carrying an office bag and a steaming coffee mug.",
  },
  {
    title: "On-the-go Creatives",
    blurb: "For the creatives grabbing a fresh sip between ideas.",
    cta: "Fuel Up",
    href: "/menu#menu-iced-coffee",
    image: images.audience2,
    otter: "laptop",
    imageAlt: "A minimal doodle of the Nookaa otter sitting with a laptop and an iced coffee.",
  },
  {
    title: "Between-class Sippers",
    blurb: "For students picking up a favourite sip between classes.",
    cta: "Fuel Up",
    href: "/menu#menu-matcha",
    image: images.audience3,
    otter: "student",
    imageAlt: "A minimal doodle of the Nookaa otter with a backpack, notebook and iced coffee.",
  },
];

export type MenuItem = { name: string; description: string; price: string };
export type Menu = { audience: string; items: MenuItem[] };

export const benefits: { title: string; body: string; otter: OtterVariant; alt: string }[] = [
  {
    title: "Served in Apt Temperature",
    body: "Brewed with precision so every sip reaches you at just the right warmth or chill.",
    otter: "waiter",
    alt: "Nookaa’s otter serving hot coffee and an iced drink on a tray.",
  },
  {
    title: "Fast but  never Rushed",
    body: "Served to you promptly without compromising on the thoughtful touches that make it special.",
    otter: "scooter",
    alt: "Nookaa’s otter riding a kick scooter with a takeaway drink.",
  },
  {
    title: "Served with a big Smile",
    body: "Delivered with warmth and friendliness that turns every visit into welcoming and good experience.",
    otter: "smile",
    alt: "Nookaa’s otter waving with a happy smile and a coffee mug.",
  },
];

export const peoplePhotos: { image: ImageAsset; alt: string }[] = [
  { image: doodles.mug, alt: "Nookaa otter choosing a favourite beverage" },
  { image: doodles.barista, alt: "Nookaa barista otter preparing a beverage for pickup" },
  { image: doodles.scooter, alt: "Nookaa otter taking a beverage to go" },
];

const prices = beverageCategories.flatMap(category => category.items.map(item => item.price));

export const faqs = [
  { q: "What is Nookaa?", a: "Nookaa is a grab-and-go brand serving beverages only, with counter pickup and small, temporary seating for a brief stop." },
  { q: "How much do Nookaa beverages cost?", a: `Beverages range from ₹${Math.min(...prices)} to ₹${Math.max(...prices)}. Prices are in INR and taxes are extra. Add-ons are priced separately; see our full menu for every item and price.` },
  { q: "What cup sizes do you serve?", a: `Our hot beverages are served in ${menuNotes.hotCupMl} ml cups and cold beverages in ${menuNotes.coldCupMl} ml cups.` },
  { q: "How does Nookaa work?", a: "Nookaa is a grab-and-go beverage brand. Walk up to our counter, choose your beverage, collect it and take it along. No reservation is needed." },
  { q: "Do you serve food or snacks?", a: "We serve beverages only. Explore coffees, matcha, teas, coolers and more on our menu." },
  { q: "Is seating available?", a: "Any seating at Nookaa is small and temporary, for a brief stop. Our outlets are designed for beverage pickup, rather than extended stays, working or studying." },
  { q: "Do you offer plant-based milk?", a: "Oat milk and almond milk are available as paid add-ons. See the menu for prices." },
  { q: "Can I take my beverage to go?", a: "Yes! That’s what Nookaa is made for. Pick up your beverage at the counter and take it wherever your day goes." },
  { q: "What can I find in the Nookaa app?", a: "Discover rewards, discounts and beverage subscriptions in the Nookaa app." },
];
