import { StructuredData } from "@/components/ui/structured-data";
import { breadcrumbSchema } from "@/lib/seo";
import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/ui/legal-page";

export const metadata = pageMetadata('Terms & Conditions', 'Read Nookaa’s terms for beverage pickup, payments, refunds, rewards and subscriptions at our grab-and-go outlets.', '/terms');
export default function Page() { return <><StructuredData data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: 'Terms & Conditions', path: '/terms' }])} /><LegalPage document="terms" /></>; }
