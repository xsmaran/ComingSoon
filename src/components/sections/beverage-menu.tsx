import { beverageCategories, beverageAddOns, menuNotes, menuPrice } from "@/lib/beverage-menu";
import { Reveal } from "@/components/ui/reveal";

export function BeverageMenu({ showHeading = true }: { showHeading?: boolean }) {
  return <section id="beverage-menu" className="nookaa-beverage-menu" aria-label="Nookaa beverage menu and prices">
    <div className="nookaa-beverage-menu__inner">
      {showHeading && <Reveal y={24} className="nookaa-beverage-menu__heading"><div><p className="section-eyebrow">THE FULL MENU / YOUR NEXT FAVOURITE</p><h2>Every sip.<br /><span>Every kind of you.</span></h2></div><p>Coffee, matcha, teas, coolers and more.<br />Find your favourite, or try something new.</p></Reveal>}
      <div className="nookaa-beverage-menu__notes"><span>Hot cup {menuNotes.hotCupMl} ml</span><span>Cold cup {menuNotes.coldCupMl} ml</span><span className="nookaa-beverage-menu__veg"><span aria-hidden="true">●</span> All beverages vegetarian</span><span>Prices in INR (₹) · Taxes extra</span></div>
      <nav aria-label="Jump to a beverage category" className="nookaa-beverage-menu__categories">{beverageCategories.map((category) => <a key={category.id} href={`#menu-${category.id}`}>{category.name}</a>)}</nav>
      <div className="nookaa-beverage-menu__grid">{beverageCategories.map((category, index) => <Reveal key={category.id} y={24} delay={(index % 3) * .06} className="nookaa-beverage-menu__category">
        <article id={`menu-${category.id}`}><header><h3>{category.name}</h3><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span></header>
          <ul>{category.items.map((item) => <li key={item.name}><span>{item.name}</span><span className="nookaa-beverage-menu__leader" aria-hidden="true" /><strong>{menuPrice(item.price)}</strong></li>)}</ul>
        </article>
      </Reveal>)}</div>
      <Reveal y={24} className="nookaa-beverage-menu__addons"><div><p className="section-eyebrow">MAKE IT YOURS</p><h3>Add ons</h3></div><ul>{beverageAddOns.map((item) => <li key={item.name}><div><span>{item.name}</span>{item.options && <small>{item.options}</small>}</div><strong>{menuPrice(item.price)}</strong></li>)}</ul></Reveal>
    </div>
  </section>;
}
