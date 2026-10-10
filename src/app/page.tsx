import { StructuredData } from "@/components/ui/structured-data";
import { breadcrumbSchema, faqSchema, menuSchema } from "@/lib/seo";
import { pageMetadata } from "@/lib/seo";
import { BeverageMenu } from "@/components/sections/beverage-menu";
import { Manifesto } from "@/components/sections/manifesto";
import { ScrollScene } from "@/components/ui/scroll-scene";
import { AppDownload } from "@/components/sections/app-download";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { TickerBand, Ribbons } from "@/components/sections/ticker-band";
import { Audiences } from "@/components/sections/audiences";
import { MenuStack } from "@/components/sections/menu-stack";
import { PeopleStack } from "@/components/sections/people-stack";
import { Testimonials } from "@/components/sections/testimonials";
import { Blogs } from "@/components/sections/blogs";
import { Faq } from "@/components/sections/faq";

export const metadata = pageMetadata('Grab & Go Beverages', 'Nookaa serves beverages only: coffees, matcha, teas, coolers and more. Explore prices, takeaway pickup, app rewards and beverage subscriptions.', '/');

export default function Home() {
  return (
    <>
      <main className="relative flex w-full flex-col items-center justify-center overflow-clip bg-cream">
        <StructuredData data={faqSchema} />
        <StructuredData data={menuSchema} />
        <Hero />
        <Manifesto />
        <About />
        <TickerBand />
        <ScrollScene travel={35}><Audiences /></ScrollScene>
        <MenuStack />
        <BeverageMenu />
        <AppDownload />
        <PeopleStack />
        <ScrollScene travel={40}><Testimonials /></ScrollScene>
        <ScrollScene travel={35}><Blogs /></ScrollScene>
        <Ribbons />
        <ScrollScene travel={25}><Faq /></ScrollScene>
      </main>
    </>
  );
}
