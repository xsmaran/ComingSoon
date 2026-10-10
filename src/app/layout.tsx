import { StructuredData } from "@/components/ui/structured-data";
import { brandSchema } from "@/lib/seo";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Preloader } from "@/components/sections/preloader";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { DiamondStrip } from "@/components/ui/diamond-strip";

const baloo = localFont({
  src: [
    { path: "../fonts/Baloo2-400.ttf", weight: "400", style: "normal" },
    { path: "../fonts/Baloo2-800.ttf", weight: "800", style: "normal" },
  ],
  display: "swap",
  variable: "--font-baloo",
});

const autourOne = localFont({
  src: "../fonts/AutourOne-Regular.woff2",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-autour-one",
});

const chironGoRound = localFont({
  src: [
    { path: "../fonts/ChironGoRoundTC-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/ChironGoRoundTC-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/ChironGoRoundTC-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/ChironGoRoundTC-700.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-chiron-goround",
});

const description =
  "Nookaa is a grab-and-go beverage brand. Explore coffees, matcha, teas and coolers, pick up your favourite at the counter and take it along.";

export const metadata: Metadata = {
  metadataBase: new URL("https://nookaa.in"),
  title: { default: "Nookaa - Grab & Go Beverages", template: "%s - nookaa" },
  description,
  applicationName: "Nookaa",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: {
    icon: "/brand/official-otter.png",
    apple: "/brand/official-otter.png",
  },
  openGraph: {
    type: "website",
    title: "Nookaa - Grab & Go Beverages",
    description,
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nookaa - Grab & Go Beverages",
    description,
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${autourOne.variable} ${chironGoRound.variable} ${baloo.variable}`}>
      <body>
        <StructuredData data={brandSchema} />
        <div className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-clip">
          <noscript><style>{".nookaa-preloader { display: none !important; } .nookaa-reveal { opacity: 1 !important; transform: none !important; filter: none !important; }"}</style></noscript>
          <Preloader />
          <ScrollProgress />
          <Navbar />
          {children}
          <DiamondStrip />
          <Footer />
        </div>
      </body>
    </html>
  );
}
