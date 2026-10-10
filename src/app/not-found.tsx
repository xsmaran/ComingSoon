import type { Metadata } from "next";
import { Otter } from "@/components/ui/otter";
import { BrownPill, PillButton } from "@/components/ui/pill-button";

export const metadata: Metadata = { title: "Page not found", robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <main className="relative flex w-full grow flex-col items-center justify-center gap-6 overflow-clip bg-cream px-5 pt-[150px] pb-[80px] text-center lg:pt-[200px] lg:pb-[120px]">
      <div className="relative h-[158px] w-[130px]">
        <Otter variant="empty" className="size-full" />
      </div>
      <p className="font-autour text-[90px]/[100px] text-brown lg:text-[120px]/[130px]">404</p>
      <h1 className="font-autour text-[30px]/[42px] text-brown lg:text-[42px]/[58.8px]">This cup is empty</h1>
      <p className="max-w-[460px] font-chiron text-[18px]/[25.2px] text-brown md:text-[20px]/[26px]">
        The page you’re looking for has been sipped, moved or never brewed. Let’s get you back to the good stuff.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
        <PillButton href="/" className="px-8 py-4 text-[18px]/[27px]">
          Back home
        </PillButton>
        <BrownPill href="/menu">See the menu</BrownPill>
      </div>
    </main>
  );
}
