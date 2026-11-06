import { Link } from "react-router-dom";
import EyeArt from "../ui/EyeArt.jsx";
import RevealText from "../ui/RevealText.jsx";

// Dark banner at the top of About, Services and Contact.
export default function PageHeader({ title, text, current }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 pb-32 pt-40 text-white md:pb-44 md:pt-52">
      <div className="bg-grid absolute inset-0 -z-10 opacity-60" />
      <div className="absolute -right-48 top-1/2 -z-10 h-[46rem] w-[46rem] -translate-y-1/2 overflow-hidden rounded-full opacity-45 md:-right-24">
        <EyeArt className="h-full w-full" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/80 to-transparent" />
      <div className="absolute -left-24 bottom-0 -z-10 h-80 w-80 animate-drift rounded-full bg-aqua-500/15 blur-3xl" />

      <div className="container-x">
        <p data-reveal="fade" className="text-sm font-medium text-white/60">
          <Link to="/" className="transition-colors hover:text-white">Home</Link>
          <span className="mx-2 text-white/30">/</span>
          <span className="text-white">{current}</span>
        </p>
        <RevealText
          as="h1"
          text={title}
          delay={0.1}
          className="mt-6 max-w-4xl text-6xl leading-[0.98] !text-white sm:text-7xl lg:text-8xl"
        />
        <p data-reveal="fade" data-delay="0.35" className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
          {text}
        </p>
      </div>
    </section>
  );
}
