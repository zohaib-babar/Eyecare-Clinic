import RevealText from "../ui/RevealText.jsx";
import { testimonials } from "../../data/content.js";

// One large quote with two smaller ones beside it, on a dark background.
export default function Testimonials() {
  const [main, ...others] = testimonials;

  return (
    <section className="section-y relative overflow-hidden bg-navy-950 text-white">
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div className="absolute -right-24 top-10 h-96 w-96 animate-drift rounded-full bg-aqua-500/15 blur-3xl" />

      <div className="container-x relative">
        <RevealText text="In our patients' words" className="text-4xl !text-white sm:text-5xl lg:text-6xl" />

        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-20">
          <figure data-reveal="fade" className="lg:col-span-7">
            <blockquote className="font-display text-3xl leading-[1.2] text-white sm:text-4xl lg:text-5xl">
              {main.quote}
            </blockquote>
            <figcaption className="mt-8 text-white/65">
              <span className="font-semibold text-white">{main.name}</span>, {main.detail}
            </figcaption>
          </figure>

          <div className="lg:col-span-5" data-stagger>
            {others.map((t) => (
              <figure key={t.name} className="border-t border-white/20 py-8 first:pt-0 first:border-t-0 lg:first:border-t lg:first:pt-8">
                <blockquote className="text-lg leading-relaxed text-white/85">{t.quote}</blockquote>
                <figcaption className="mt-4 text-sm text-white/60">
                  <span className="font-semibold text-white">{t.name}</span>, {t.detail}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
