import { doodles, type ImageAsset } from "./assets";

/** A block of article body content. */
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  /** Display date, e.g. "Jan 20, 2026" */
  date: string;
  /** ISO date for <time> and sorting. */
  isoDate: string;
  category: "Brewing" | "Beverages" | "Guides" | "Community";
  readTime: string;
  excerpt: string;
  image: ImageAsset;
  imageAlt: string;
  imagePosition?: string;
  body: Block[];
};

/**
 * Brewlog articles. The first three are the posts linked from the home page
 * (titles, dates and images from the original); their article text is new.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "why-coffee-tastes-better-here.",
    title: "Why Coffee Tastes Better Here.",
    date: "Jan 20, 2026",
    isoDate: "2026-01-20",
    category: "Brewing",
    readTime: "4 min read",
    excerpt: "Fresh beans, careful preparation and a great sip to go. Here’s what really goes into every nookaa cup.",
    image: doodles.barista,
    imageAlt:
      "Nookaa barista otter crafting a beverage.",
    body: [
      { type: "p", text: "People tell us all the time that our coffee just tastes better. We love hearing it, but there’s no secret trick behind it. There are a handful of small decisions we make every single day, and they add up in your cup." },
      { type: "h2", text: "It starts with fresh beans" },
      { type: "p", text: "Coffee is at its best within a few weeks of roasting. We order in small batches, so the bag we open on Monday was roasted days ago, not months ago. That freshness is the difference between a cup that tastes flat and one that tastes bright, sweet and alive." },
      { type: "h2", text: "We grind for every single order" },
      { type: "p", text: "Ground coffee starts losing its aroma within minutes. That’s why nothing gets ground ahead of time here. Every shot and every pour-over starts with beans going into the grinder the moment you order." },
      { type: "quote", text: "Great coffee isn’t complicated. It’s just a hundred small things done with care, every time." },
      { type: "h2", text: "Dialled in, every morning" },
      { type: "p", text: "Humidity, temperature and the age of the beans all change how coffee extracts. Before the doors open, our baristas taste and adjust the grind until the espresso is exactly where it should be. If it isn’t right, it doesn’t get served." },
      { type: "h2", text: "Care that travels with you" },
      { type: "p", text: "At Nookaa, the care goes into your takeaway cup. Pick up your coffee at our counter and enjoy it wherever your day takes you." },
    ],
  },
  {
    slug: "find-your-favourite-beverage",
    title: "Find Your Favourite Beverage",
    date: "Jan 13, 2026",
    isoDate: "2026-01-13",
    category: "Beverages",
    readTime: "3 min read",
    excerpt: "Warm or chilled, bold or mellow: a little inspiration for your next Nookaa sip.",
    image: doodles.mug,
    imageAlt: "Nookaa otter holding a favourite beverage.",
    body: [
      { type: "p", text: "At Nookaa, beverages are the whole story. Whether you want something comforting or refreshing, your next favourite starts with what you’re in the mood for." },
      { type: "h2", text: "Start with your mood" },
      { type: "p", text: "Choose a warm beverage for a slower moment, or a chilled sip for a refreshing break. Explore our menu and see what catches your eye." },
      { type: "h2", text: "Explore beyond your usual" },
      { type: "p", text: "Love a creamy latte? Try matcha. Prefer a bold flavour? Explore our coffee options. Ask our team to help you choose something that suits your taste." },
      { type: "h2", text: "Make more of every sip" },
      { type: "p", text: "The Nookaa app brings rewards, discounts and beverage subscriptions together, so there’s even more to look forward to." },
    ],
  },
  {
    slug: "how-to-order-coffee-like-a-pro",
    title: "How to Order Coffee Like a Pro",
    date: "Dec 16, 2025",
    isoDate: "2025-12-16",
    category: "Guides",
    readTime: "5 min read",
    excerpt: "Cortado or flat white? Single or double? A friendly guide to ordering exactly what you’re craving.",
    image: doodles.inspector,
    imageAlt: "Nookaa otter exploring beverage choices.",
    body: [
      { type: "p", text: "Coffee menus can feel like a different language. The good news is that almost every drink is built from the same three ingredients: espresso, milk and water. Once you know how they combine, ordering gets easy." },
      { type: "h2", text: "Start with the strength" },
      { type: "p", text: "Most of our drinks come with a double shot. If you like it gentler, ask for a single. If you need a real wake-up, add an extra shot. Our baristas won’t judge." },
      { type: "h2", text: "Then choose your milk" },
      { type: "list", items: ["Cortado: equal parts espresso and warm milk, small and punchy.", "Flat white: espresso with a thin layer of silky microfoam.", "Latte: more milk, softer flavour, light foam on top.", "Cappuccino: a thicker, airier foam cap."] },
      { type: "h2", text: "Hot, iced or cold brew?" },
      { type: "p", text: "Iced drinks are regular espresso served over ice, so they stay bold. Cold brew is steeped slowly for hours, which makes it smoother and naturally sweeter. That’s perfect if you find coffee too bitter." },
      { type: "quote", text: "There’s no wrong order. The best coffee is the one you actually enjoy." },
      { type: "h2", text: "Don’t be shy, just ask" },
      { type: "p", text: "Tell us what you usually like and we’ll suggest something new. Half the fun of a good coffee shop is discovering a drink you didn’t know you loved." },
    ],
  },
  {
    slug: "a-beginners-guide-to-cold-brew",
    title: "A Beginner’s Guide to Cold Brew",
    date: "Dec 2, 2025",
    isoDate: "2025-12-02",
    category: "Brewing",
    readTime: "4 min read",
    excerpt: "Smooth, sweet and ridiculously easy to make at home. Here’s how we brew ours, step by step.",
    image: doodles.waiter,
    imageAlt: "Nookaa otter serving hot and chilled beverages.",
    body: [
      { type: "p", text: "Cold brew is one of the most-ordered drinks at nookaa, and one of the easiest to make yourself. Time does all the work, and you don’t need any fancy gear." },
      { type: "h2", text: "What you’ll need" },
      { type: "list", items: ["100 g coarsely ground coffee", "1 litre of cold, filtered water", "A large jar or jug", "A fine sieve and a paper filter"] },
      { type: "h2", text: "How to brew it" },
      { type: "p", text: "Stir the coffee and water together until all the grounds are wet. Cover the jar and leave it in the fridge for 14 to 18 hours. Strain it through the sieve, then through the paper filter for a really clean cup." },
      { type: "quote", text: "Coarse grind, cold water, lots of patience. That’s the whole secret." },
      { type: "h2", text: "Serving ideas" },
      { type: "p", text: "Pour it over ice as it is, top it with a splash of oat milk, or add a pinch of cinnamon. It keeps in the fridge for up to a week, so make a big batch." },
    ],
  },
  {
    slug: "finding-your-daily-coffee-ritual",
    title: "Finding Your Daily Coffee Ritual",
    date: "Nov 18, 2025",
    isoDate: "2025-11-18",
    category: "Community",
    readTime: "3 min read",
    excerpt: "The ten quiet minutes that change your whole day, and how our regulars make them count.",
    image: doodles.smile,
    imageAlt: "A minimal doodle of Nookaa’s otter, keeping its signature glasses and blue scarf.",
    body: [
      { type: "p", text: "Ask any of our regulars and they’ll tell you: the coffee is only half of it. The other half is the ritual. It’s the familiar walk, the favourite takeaway cup and the friendly hello at the counter." },
      { type: "h2", text: "Make your pickup a small ritual" },
      { type: "p", text: "A favourite beverage can brighten a busy day. Pick it up on your morning walk or between errands, and enjoy a small moment as you go." },
      { type: "h2", text: "Pick your sip" },
      { type: "p", text: "Rituals love consistency. Find a beverage you love, or switch between coffee, matcha and coolers as your mood changes." },
      { type: "quote", text: "Strangers become familiar faces one coffee at a time." },
      { type: "h2", text: "Say hi" },
      { type: "p", text: "Our favourite part of every ritual is the people. Say hello at the counter, collect your beverage and carry that friendly start into the rest of your day." },
    ],
  },
  {
    slug: "your-guide-to-grab-and-go",
    title: "Your Guide to Grab & Go",
    date: "Nov 4, 2025",
    isoDate: "2025-11-04",
    category: "Guides",
    readTime: "2 min read",
    excerpt: "Choose your beverage, collect it at the counter and take it along. Your Nookaa stop, made simple.",
    image: doodles.scooter,
    imageAlt: "Nookaa otter on a scooter carrying a takeaway beverage.",
    body: [
      { type: "p", text: "Nookaa is a grab-and-go brand serving beverages only. Our compact outlets are built around the pickup counter, so your favourite sip can come along for the day." },
      { type: "h2", text: "Choose your beverage" },
      { type: "p", text: "Explore hot and iced coffees, cold brew, matcha, teas and coolers. Check our menu for the full selection, prices and add-ons." },
      { type: "h2", text: "Collect at the counter" },
      { type: "p", text: "Order your favourite, collect your prepared beverage and head on. There’s no table reservation or table service." },
      { type: "h2", text: "A brief stop, then onward" },
      { type: "p", text: "Any seating is small and temporary, for a short stop. Nookaa is designed for takeaway beverages, rather than long work sessions or a seated meal." },
      { type: "h2", text: "More to enjoy in the app" },
      { type: "p", text: "Discover beverage rewards, discounts and subscriptions in the Nookaa app." },
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
