import type { MetadataRoute } from "next";
import { enquiries } from "@/lib/enquiries";
import { blogPosts } from "@/lib/blog";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...["", "/about-us", "/menu", "/blog", "/contact-us", "/privacy-policy", "/terms"].map(path => ({ url: `${siteUrl}${path}` })),
    ...enquiries.map(enquiry => ({ url: `${siteUrl}/${enquiry.slug}` })),
    ...blogPosts.map(post => ({ url: `${siteUrl}/blog/articles/${post.slug}` })),
  ];
}
