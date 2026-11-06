import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { introWait, prefersReducedMotion } from "../utils/motion";

gsap.registerPlugin(ScrollTrigger);

/**
 * One hook that powers every scroll animation on a page.
 *
 * Instead of writing GSAP code in each component, you add a data attribute
 * to any element and this hook animates it when it scrolls into view:
 *
 *   data-reveal="up | left | right | scale | fade"   fade in (and move) once
 *   data-stagger                                      children appear one after another
 *   data-split                                        headline text reveals word by word
 *   data-image-reveal                                 image unveils with a clip-path wipe
 *   data-parallax                                     image drifts slowly while scrolling
 *   data-counter="1200" data-suffix="+"               number counts up
 *   data-line="x | y"                                 a line draws itself
 *   data-delay="0.2"                                  optional extra delay in seconds
 *
 * Usage: attach the ref of a wrapper element, see components/layout/Page.jsx
 */
export default function useScrollAnimations(scopeRef) {
  useLayoutEffect(() => {
    const scope = scopeRef.current;
    if (!scope || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const find = (selector) => gsap.utils.toArray(selector, scope);

      // Play once, when the element's top reaches 88% of the viewport height.
      const trigger = (el, start = "top 88%") => ({ trigger: el, start, once: true });

      // Elements already on screen at page load wait for the opening curtain.
      const delayFor = (el) => {
        const own = Number(el.dataset.delay || 0);
        const onFirstScreen = el.getBoundingClientRect().top < window.innerHeight;
        return own + (onFirstScreen ? introWait() : 0);
      };

      // 1. Simple reveals
      const offsets = {
        up: { y: 36 },
        left: { x: -60 },
        right: { x: 60 },
        scale: { scale: 0.94 },
        fade: {},
      };
      find("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          ...(offsets[el.dataset.reveal] || offsets.up),
          duration: 1.1,
          ease: "power3.out",
          delay: delayFor(el),
          clearProps: "transform",
          scrollTrigger: trigger(el),
        });
      });

      // 2. Staggered groups (cards, rows, list items)
      find("[data-stagger]").forEach((el) => {
        gsap.from(Array.from(el.children), {
          opacity: 0,
          y: 44,
          duration: 1,
          ease: "power3.out",
          stagger: 0.13,
          delay: delayFor(el),
          clearProps: "transform",
          scrollTrigger: trigger(el, "top 85%"),
        });
      });

      // 3. Headline word reveal (words slide up from behind a mask)
      find("[data-split]").forEach((el) => {
        gsap.from(el.querySelectorAll(".rt-word"), {
          yPercent: 115,
          duration: 1.1,
          ease: "power4.out",
          stagger: 0.055,
          delay: delayFor(el),
          scrollTrigger: trigger(el, "top 90%"),
        });
      });

      // 4. Image wipe: a clip-path opens while the picture settles from a zoom
      find("[data-image-reveal]").forEach((el) => {
        const radius = el.dataset.radius || "2.5rem";
        gsap.fromTo(
          el,
          { clipPath: `inset(0% 0% 100% 0% round ${radius})` },
          {
            clipPath: `inset(0% 0% 0% 0% round ${radius})`,
            duration: 1.5,
            ease: "power4.inOut",
            delay: delayFor(el),
            clearProps: "clipPath",
            scrollTrigger: trigger(el, "top 88%"),
          }
        );
        const inner = el.querySelector("[data-scale-target]");
        if (inner) {
          gsap.from(inner, {
            scale: 1.3,
            duration: 2,
            ease: "power3.out",
            delay: delayFor(el),
            scrollTrigger: trigger(el, "top 88%"),
          });
        }
      });

      // 5. Parallax: the image moves slightly slower than the page
      find("[data-parallax]").forEach((el) => {
        const distance = Number(el.dataset.speed || 0.08) * 100;
        gsap.fromTo(
          el,
          { yPercent: -distance },
          {
            yPercent: distance,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      // 6. Number counters
      find("[data-counter]").forEach((el) => {
        const end = Number(el.dataset.counter);
        const suffix = el.dataset.suffix || "";
        const counter = { value: 0 };
        el.textContent = `0${suffix}`;
        gsap.to(counter, {
          value: end,
          duration: 2.2,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = `${Math.round(counter.value).toLocaleString("en-US")}${suffix}`;
          },
          scrollTrigger: trigger(el, "top 92%"),
        });
      });

      // 7. Lines that draw themselves
      find("[data-line]").forEach((el) => {
        if (el.dataset.line === "x") {
          gsap.from(el, {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 1.4,
            ease: "power3.inOut",
            delay: delayFor(el),
            scrollTrigger: trigger(el, "top 94%"),
          });
        } else {
          // Vertical line fills as the visitor scrolls (used by the timeline)
          gsap.from(el, {
            scaleY: 0,
            transformOrigin: "top center",
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement,
              start: "top 65%",
              end: "bottom 65%",
              scrub: true,
            },
          });
        }
      });
    }, scope);

    // Images and fonts change the page height after load, so measure again.
    const refresh = () => ScrollTrigger.refresh();
    const timer = setTimeout(refresh, 500);
    window.addEventListener("load", refresh);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", refresh);
      ctx.revert(); // removes every animation and ScrollTrigger made above
    };
  }, [scopeRef]);
}
