import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { prefersReducedMotion } from "../../utils/motion";

// The first thing a visitor sees: the clinic name appears, then the
// navy panel lifts away to reveal the page. It plays once per visit.
export default function IntroCurtain() {
  const root = useRef(null);
  const [done, setDone] = useState(prefersReducedMotion());

  useLayoutEffect(() => {
    if (done) return;
    document.body.style.overflow = "hidden"; // no scrolling while the curtain is down

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          onComplete: () => {
            document.body.style.overflow = "";
            setDone(true);
          },
        })
        .from(".curtain-word", { yPercent: 115, duration: 0.8, stagger: 0.1, ease: "power4.out" })
        .from(
          ".curtain-line",
          { scaleX: 0, transformOrigin: "left center", duration: 0.7, ease: "power3.inOut" },
          0.35
        )
        .to(root.current, { yPercent: -100, duration: 0.9, ease: "power4.inOut" }, 1.0);
    }, root);

    return () => {
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, [done]);

  if (done) return null;

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950"
      aria-hidden="true"
    >
      <div className="px-6">
        <p className="flex gap-4 font-display text-5xl text-white sm:text-7xl">
          <span className="inline-block overflow-hidden pb-2">
            <span className="curtain-word inline-block">EyeCare</span>
          </span>
          <span className="inline-block overflow-hidden pb-2">
            <span className="curtain-word inline-block text-aqua-400">Clinic</span>
          </span>
        </p>
        <div className="curtain-line mt-3 h-px w-full bg-aqua-400/60" />
      </div>
    </div>
  );
}
