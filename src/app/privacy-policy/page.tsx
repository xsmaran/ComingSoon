import { StructuredData } from "@/components/ui/structured-data";
import { breadcrumbSchema } from "@/lib/seo";
import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/ui/legal-page";

export const metadata = pageMetadata('Privacy Policy', 'Read how Nookaa handles personal information when you use our beverage app, website and grab-and-go outlets.', '/privacy-policy');
export default function Page() { return <><StructuredData data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: 'Privacy Policy', path: '/privacy-policy' }])} /><LegalPage document="privacy" /></>; }
