import type { Metadata } from "next";
import { beverageCategories, menuNotes } from "./beverage-menu";
import { faqs } from "./content";
import { contactInfo } from "./pages";

export const siteUrl = "https://nookaa.in";
export const brandDescription = "Nookaa is a grab-and-go beverage brand serving coffees, matcha, teas, coolers and more. Explore the menu with prices, app rewards and beverage subscriptions.";
export const organizationId = `${siteUrl}/#organization`;

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${siteUrl}${path}`;
  const socialTitle = `${title} | Nookaa`;
  return {
    title, description,
    alternates: { canonical: url },
    openGraph: { title: socialTitle, description, url, siteName: "Nookaa", locale: "en_IN", type: "website", images: [{ url: `${siteUrl}/opengraph-image`, width: 1200, height: 630, alt: "Nookaa — grab-and-go beverages" }] },
    twitter: { card: "summary_large_image", title: socialTitle, description, images: [`${siteUrl}/opengraph-image`] },
  };
}

export const brandSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": organizationId, name: "Nookaa", url: siteUrl, description: brandDescription, telephone: contactInfo.phone.replace(/[^+\d]/g, ""), email: contactInfo.email, address: { "@type": "PostalAddress", streetAddress: "Shop No 1, Icon Heights, J-25, Kandivali, Panchsheel Garden, Mahavir Nagar, Kandivali West", addressLocality: "Mumbai", addressRegion: "Maharashtra", postalCode: "400067", addressCountry: "IN" }, logo: { "@type": "ImageObject", url: `${siteUrl}/brand/official-otter.png` } },
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, name: "Nookaa", url: siteUrl, publisher: { "@id": organizationId }, inLanguage: "en-IN" },
  ],
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: `${siteUrl}${item.path}` })) };
}

export const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export const menuSchema = {
  "@context": "https://schema.org", "@type": "Menu", "@id": `${siteUrl}/menu#beverage-menu`,
  name: "Nookaa Beverage Menu", url: `${siteUrl}/menu`, inLanguage: "en-IN",
  description: `Beverages only. Hot cups ${menuNotes.hotCupMl} ml; cold cups ${menuNotes.coldCupMl} ml. Prices in INR; taxes extra.`,
  hasMenuSection: beverageCategories.map(category => ({
    "@type": "MenuSection", name: category.name,
    hasMenuItem: category.items.map(item => ({ "@type": "MenuItem", name: item.name, offers: { "@type": "Offer", price: item.price, priceCurrency: "INR", url: `${siteUrl}/menu#menu-${category.id}` } })),
  })),
};
