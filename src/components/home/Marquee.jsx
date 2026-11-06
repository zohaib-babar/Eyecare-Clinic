import { services } from "../../data/content.js";

// A slow band of service names that ties the hero to the page below.
export default function Marquee() {
  // The list is repeated so the loop has no visible gap.
  const row = [...services, ...services];

  return (
    <div className="overflow-hidden border-b border-navy-900/10 bg-white py-8 md:py-10" aria-hidden="true">
      <div className="flex w-max animate-marquee items-center gap-10 hover:[animation-play-state:paused]">
        {row.map((s, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className={`whitespace-nowrap font-display text-4xl md:text-6xl ${i % 2 ? "italic text-aqua-700" : "text-navy-900"}`}>
              {s.title}
            </span>
            <span className="h-px w-12 bg-navy-900/25" />
          </div>
        ))}
      </div>
    </div>
  );
}
