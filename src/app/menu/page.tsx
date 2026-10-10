import { StructuredData } from "@/components/ui/structured-data";
import { breadcrumbSchema, faqSchema, menuSchema } from "@/lib/seo";
import { pageMetadata } from "@/lib/seo";
import { BeverageMenu } from "@/components/sections/beverage-menu";
import { Faq } from "@/components/sections/faq";
import { PageHeader } from "@/components/ui/page-header";

export const metadata = pageMetadata('Beverage Menu & Prices', 'Explore Nookaa’s hot and iced coffee, cold brew, teas, coolers, matcha, ube, cloud series and blended beverages with prices in INR. Taxes extra.', '/menu');

export default function MenuPage() {
  return <main className="relative flex w-full grow flex-col items-center overflow-clip bg-cream">
      <StructuredData data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: 'Beverage Menu & Prices', path: '/menu' }])} />
      <StructuredData data={menuSchema} />
      <StructuredData data={faqSchema} />
    <PageHeader title="Your mood. Your menu." subtitle="Every beverage, every price. Find your next favourite Nookaa sip." />
    <BeverageMenu showHeading={false} />
    <Faq />
  </main>;
}
