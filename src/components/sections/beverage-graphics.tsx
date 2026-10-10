/** Decorative vector artwork; motion is CSS-only and respects reduced motion. */
export function BeverageGraphics() {
  return <div className="beverage-graphics" aria-hidden="true">
    <svg className="beverage-graphics__spark" viewBox="0 0 64 64"><path d="M32 3Q35 29 61 32Q35 35 32 61Q29 35 3 32Q29 29 32 3Z" fill="currentColor" /></svg>
    <svg className="beverage-graphics__cup" viewBox="0 0 100 130" fill="none">
      <path d="M65 6 56 42" stroke="#a95728" strokeWidth="5" strokeLinecap="round" />
      <path d="M24 42h53l-8 65c-.5 5-4 8-9 8H41c-5 0-8.5-3-9-8Z" fill="#d8e3c5" stroke="#5d3b1f" strokeWidth="2" />
      <path d="M30 69h40l-4 37H35Z" fill="#a9be87" />
      <ellipse cx="50" cy="42" rx="30" ry="6" fill="#f5f1e9" stroke="#5d3b1f" strokeWidth="2" />
      <path d="m40 57 9 2-2 9-9-2Zm16 15 9-2 2 9-9 2Z" fill="#f5f1e9" opacity=".7" />
      <path d="M47 92q3-13 13-12-1 12-13 12Z" fill="#f5f1e9" />
    </svg>
    <span className="beverage-graphics__dot" />
  </div>;
}
