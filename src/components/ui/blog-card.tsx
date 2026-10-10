import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { isDoodleAsset } from "@/lib/assets";
import { cn } from "@/lib/cn";
import { Reveal } from "./reveal";

/** White rounded Brewlog card (image, title, date, “Read” pill). Used on the home and blog pages. */
export function BlogCard({ post, className }: { post: BlogPost; className?: string }) {
  return (
    <Link
      href={`/blog/articles/${post.slug}`}
      className={cn("relative flex w-full items-center gap-2.5 self-auto md:self-start", className)}
    >
      <Reveal y={50} className="relative w-px flex-1">
        <article className="nookaa-blog-card group flex w-full flex-col items-center justify-start gap-[18px] overflow-hidden rounded-[38.48px] bg-white px-3 pt-3 pb-[35px] lg:gap-5 lg:rounded-[42px] lg:px-4 lg:pt-4 lg:pb-10">
          <div className="relative h-[205px] w-auto self-stretch overflow-clip rounded-[32px] bg-[#f5f1e9]">
            <Image
              src={post.image.src}
              alt={post.imageAlt}
              fill
              sizes="(min-width: 1200px) calc((min(100vw - 100px, 1200px) - 40px) / 3 - 32px), (min-width: 810px) calc((min(100vw - 80px, 750px) - 20px) / 2 - 24px), calc(min(100vw - 60px, 800px) - 24px)"
              unoptimized={post.image.src.startsWith("/brand/")}
              className={cn("rounded-[inherit] transition-transform duration-500 ease-out motion-reduce:transition-none motion-reduce:transform-none group-hover:scale-[1.04]", isDoodleAsset(post.image) ? "object-contain p-3" : "object-cover")}
              style={post.imagePosition ? { objectPosition: post.imagePosition } : undefined}
            />
          </div>
          <div className="flex w-full min-w-0 flex-col items-center justify-start gap-[32.32px] lg:gap-[35.91px]">
            <p className="w-full max-w-[250px] font-autour text-[20px]/[26px] text-brown text-center whitespace-pre-wrap lg:max-w-[280px] lg:text-[25px]/[32.5px]">
              {post.title}
            </p>
            <p className="w-full font-chiron text-[14px]/[16.8px] font-medium text-ash text-center whitespace-pre-wrap">{post.date}</p>
          </div>
          <span className="inset-border relative inline-flex w-min items-center justify-center gap-2.5 rounded-[100px] bg-orange px-6 py-3 font-chiron text-[16px]/[19.2px] font-bold whitespace-pre text-brown shadow-press transition-[transform,box-shadow] duration-200 ease-out [--border-color:var(--color-brown)] [--border-width:3px] group-hover:translate-y-[3px] group-hover:shadow-[0_5px_0_0_var(--color-brown)] lg:px-8 lg:text-[18px]/[21.6px]">
            Read
          </span>
        </article>
      </Reveal>
    </Link>
  );
}

/** Responsive grid: 1 column on mobile, 2 on tablet, 3 on desktop. */
export const blogGridClass =
  "relative flex w-full max-w-[800px] flex-col content-start items-start gap-6 md:grid md:max-w-[750px] md:auto-rows-[minmax(0,1fr)] md:grid-cols-[repeat(2,minmax(50px,1fr))] md:justify-center md:gap-5 lg:max-w-[1200px] lg:grid-cols-[repeat(3,minmax(50px,1fr))]";
