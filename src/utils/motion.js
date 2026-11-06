// Small helpers shared by the animation code.

// True when the visitor's device asks for reduced motion.
export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// The opening curtain covers the page for about a second and a half on first load.
// Animations that start on screen wait for it so they are actually seen.
const intro = { endsAt: performance.now() + 1300 };

export const introWait = () => Math.max(0, (intro.endsAt - performance.now()) / 1000);
