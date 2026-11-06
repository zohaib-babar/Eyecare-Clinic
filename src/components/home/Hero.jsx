import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../ui/Button.jsx";
import EyeArt from "../ui/EyeArt.jsx";
import RevealText from "../ui/RevealText.jsx";
import SmartImage from "../ui/SmartImage.jsx";
import { images } from "../../data/images.js";
import { introWait, prefersReducedMotion } from "../../utils/motion";

gsap.registerPlugin(ScrollTrigger);

const facts = [
  { title: "Seen within the week", text: "Most new patients are offered an appointment within days." },
  { title: "Diagnostics on site", text: "Digital imaging and precise measurements at every visit." },
  { title: "Specialists together", text: "Surgeons, optometrists and opticians under one roof." },
];

/**
 * The hero has one memorable idea: the iris on the right behaves like a real eye.
 *  - On load the pupil opens wide, then settles.
 *  - While you scroll, the pupil narrows as if the page is getting brighter.
 *  - Move the cursor and the light reflection follows it.
 */
export default function Hero() {
  const root = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    let onMove;
    const ctx = gsap.context(() => {
      const pupil = ".eye-pupil";

      // Opening sequence, starts when the curtain lifts
      gsap
        .timeline({
          delay: introWait(),
          defaults: { ease: "power4.out", clearProps: "opacity,transform" },
        })
        .from(".rt-word", { yPercent: 115, duration: 1.2, stagger: 0.09 })
        .from(".hero-copy", { opacity: 0, y: 24, duration: 1 }, "-=0.7")
        .from(".hero-cta > *", { opacity: 0, y: 24, duration: 0.9, stagger: 0.12 }, "-=0.8")
        .from(".hero-eye", { opacity: 0, scale: 0.9, duration: 1.8, ease: "power3.out" }, 0)
        .from(".hero-fact", { opacity: 0, y: 40, duration: 1, stagger: 0.12 }, "-=1.1");

      // The pupil opens wide on arrival, then contracts to normal size
      gsap.fromTo(
        pupil,
        { scale: 1.45, svgOrigin: "400 400" },
        { scale: 1, svgOrigin: "400 400", duration: 2.4, delay: introWait() + 0.3, ease: "power3.out" }
      );

      // Scrolling past the hero narrows the pupil and moves the background slowly
      gsap.to(pupil, {
        scale: 0.6,
        svgOrigin: "400 400",
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-eye-drift", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });

      // The glint follows the cursor
      const glintX = gsap.quickTo(".eye-glint", "x", { duration: 0.9, ease: "power3.out" });
      const glintY = gsap.quickTo(".eye-glint", "y", { duration: 0.9, ease: "power3.out" });
      onMove = (e) => {
        glintX((e.clientX / window.innerWidth - 0.5) * 70);
        glintY((e.clientY / window.innerHeight - 0.5) * 70);
      };
      window.addEventListener("pointermove", onMove);
    }, root);

    return () => {
      if (onMove) window.removeEventListener("pointermove", onMove);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={root} className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-navy-950 text-white">
      {/* Layer 1: photograph (falls back to the iris artwork if it cannot load) */}
      <SmartImage
        src={images.hero}
        alt="Close-up of a human eye"
        className="absolute inset-0 -z-30"
        radius="0px"
        reveal={false}
        priority
      />

      {/* Layer 2: dark blue overlay keeps the text readable */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-navy-950/95 via-navy-900/85 to-navy-800/70" />
      <div className="absolute inset-x-0 bottom-0 -z-20 h-1/3 bg-gradient-to-t from-navy-950 to-transparent" />

      {/* Layer 3: slow background motion */}
      <div className="bg-grid absolute inset-0 -z-10 opacity-40" />
      <div className="absolute -left-32 top-1/4 -z-10 h-[28rem] w-[28rem] animate-drift rounded-full bg-aqua-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 -z-10 h-80 w-80 animate-drift rounded-full bg-navy-500/30 blur-3xl [animation-delay:-8s]" />

      {/* The living iris. Three nested layers so the animations never fight:
          outer = entrance, middle = scroll drift, inner = gentle floating */}
      <div className="absolute inset-y-0 -right-[22%] -z-10 flex w-[88vw] max-w-[44rem] items-center opacity-40 sm:-right-[12%] lg:right-[3%] lg:w-[38vw] lg:opacity-100">
        <div className="hero-eye w-full">
          <div className="hero-eye-drift">
            <div className="aspect-square animate-float overflow-hidden rounded-full border border-white/15 shadow-glow">
              <EyeArt className="h-full w-full" fit="meet" />
            </div>
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="container-x flex flex-1 items-center pb-10 pt-36 md:pt-40">
        <div className="max-w-3xl">
          <RevealText
            as="h1"
            auto={false}
            text="Your vision, in careful hands."
            className="text-6xl leading-[0.96] !text-white sm:text-7xl lg:text-[6.5rem]"
          />
          <p className="hero-copy mt-8 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
            Specialist eye care for adults and children, with the diagnostics and the surgeons under one roof.
          </p>
          <div className="hero-cta mt-10 flex flex-wrap gap-4">
            <Button to="/contact" size="lg">Book an Appointment</Button>
            <Button to="/services" variant="outline" size="lg">Explore Services</Button>
          </div>
        </div>
      </div>

      {/* Facts strip */}
      <div className="container-x pb-8 md:pb-10">
        <div className="grid gap-4 md:grid-cols-3">
          {facts.map((f) => (
            <div key={f.title} className="hero-fact glass rounded-2xl p-5 transition-colors duration-500 hover:bg-white/15">
              <p className="font-display text-2xl text-white">{f.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-white/65">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
