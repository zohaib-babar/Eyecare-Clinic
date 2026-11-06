import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import useScrollAnimations from "../../hooks/useScrollAnimations.js";
import { prefersReducedMotion } from "../../utils/motion";
import Footer from "./Footer.jsx";

/**
 * Wrap every page in <Page>. It gives each page:
 *  - a scroll back to the top when you arrive
 *  - a soft fade-in entrance
 *  - all the data-attribute scroll animations (see useScrollAnimations)
 *  - the footer
 */
export default function Page({ children }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  useScrollAnimations(ref);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const tween = gsap.fromTo(
      ref.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power2.out", clearProps: "opacity" }
    );
    return () => tween.kill();
  }, []);

  return (
    <div ref={ref}>
      {children}
      <Footer />
    </div>
  );
}
