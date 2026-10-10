import { ScrollScene } from "@/components/ui/scroll-scene";
import Image from "next/image";
import { nookaaApp } from "@/lib/app";

function StoreIcon({ apple }: { apple: boolean }) {
  return apple ? (
    <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26" aria-hidden="true">
      <path d="M17.1 12.5c0-2 1.6-3 1.7-3.1-1-1.5-2.5-1.7-3.1-1.7-1.3-.2-2.5.8-3.2.8-.7 0-1.7-.8-2.8-.8-1.4 0-2.8.9-3.5 2.1-1.5 2.6-.4 6.5 1 8.6.7 1 1.5 2.1 2.6 2.1 1.1 0 1.5-.7 2.9-.7s1.7.7 2.9.7 1.9-1 2.6-2c.8-1.2 1.2-2.3 1.2-2.4-.1 0-2.3-.9-2.3-3.6ZM14.9 6.3c.6-.8 1.1-1.8 1-2.8-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.8-1 2.8 1 .1 2-.5 2.7-1.4Z" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
      <path d="M3 2.5 13 12 3 21.5Z" fill="#54c7ee" />
      <path d="m3 2.5 13.5 7.8L13 12Z" fill="#70d894" />
      <path d="m3 21.5 13.5-7.8L13 12Z" fill="#f77b86" />
      <path d="m13 12 3.5-1.7 4 2.2-4 2.2Z" fill="#ffcf59" />
    </svg>
  );
}

export function AppDownload() {
  const stores = [
    { label: "App Store", eyebrow: "Download on the", href: nookaaApp.appStoreUrl, apple: true },
    { label: "Google Play", eyebrow: "Get it on", href: nookaaApp.playStoreUrl, apple: false },
  ];

  return (
    <section className="nookaa-app-section" aria-labelledby="nookaa-app-title">
      <ScrollScene travel={45} scaleFrom={.96}><div className="nookaa-app">
      <div className="nookaa-app__copy">
      <div className="nookaa-app__heading">
        <span className="nookaa-app__icon" aria-hidden="true">↗</span>
        <div><p className="nookaa-app__eyebrow">YOUR DAILY SIP, WITH EXTRA PERKS</p>
          <h2 id="nookaa-app-title">Get the Nookaa app.</h2></div>
      </div>
      <p className="nookaa-app__description">Unlock exciting rewards, enjoy exclusive discounts, and make your favourites a ritual with beverage subscriptions.</p>
      <div className="nookaa-app__downloads">
        {stores.map(({ label, eyebrow, href, apple }) => (
          <a key={label} href={href || "/contact-us"} target={href ? "_blank" : undefined} rel={href ? "noopener noreferrer" : undefined} className="nookaa-app__store" aria-label={href ? `Download Nookaa on ${label} (opens in a new tab)` : `Ask about Nookaa on ${label}`}>
            <StoreIcon apple={apple} />
            <span><small>{eyebrow}</small><strong>{label}</strong></span>
          </a>
        ))}

      </div>
      </div>
      <div className="nookaa-app__visual">
        <ScrollScene travel={35} rotateFrom={-5} className="nookaa-app__mascot-scene"><div className="nookaa-app__mascot">
          <span className="nookaa-app__mascot-caption">Sip. Chill. Repeat.</span>
          <Image src="/brand/official-otter.png" alt="Nookaa otter with sunglasses and a blue scarf carrying an iced beverage" width={457} height={457} sizes="(max-width: 809px) 260px, 300px" className="nookaa-app__otter" />
        </div></ScrollScene>
      <ul className="nookaa-app__perks" aria-label="App benefits">
        <li><span aria-hidden="true">✳</span><div><h3>Rewards worth sipping for</h3><p>Make your everyday beverage moments even more rewarding.</p></div></li>
        <li><span aria-hidden="true">✦</span><div><h3>A little extra, just for you</h3><p>Enjoy exclusive discounts through the Nookaa app.</p></div></li>
        <li><span aria-hidden="true">↻</span><div><h3>Your favourites, on repeat</h3><p>Find a beverage subscription that fits your daily ritual.</p></div></li>
      </ul>
      </div>
      </div></ScrollScene>
    </section>
  );
}
