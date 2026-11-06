import { stats } from "../../data/content.js";

// Four figures that count up when scrolled into view.
export default function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 text-white md:py-24">
      <div className="bg-grid absolute inset-0 opacity-50" />
      <div className="absolute -left-20 top-0 h-72 w-72 animate-drift rounded-full bg-aqua-500/15 blur-3xl" />
      <div className="container-x relative">
        <dl className="grid grid-cols-2 gap-y-14 lg:grid-cols-4" data-stagger>
          {stats.map((s, i) => (
            <div key={s.label} className={`px-4 sm:px-8 ${i > 0 ? "lg:border-l lg:border-white/15" : ""} ${i % 2 === 1 ? "border-l border-white/15" : ""}`}>
              <dd
                data-counter={s.value}
                data-suffix={s.suffix}
                className="font-display text-6xl text-white md:text-7xl"
              >
                {s.value.toLocaleString("en-US")}
                {s.suffix}
              </dd>
              <dt className="mt-3 max-w-[14rem] text-white/65">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
