import { useId } from "react";

// Pre-calculate the fine fibres of the iris so we do not repeat the maths on every render.
const FIBRES = Array.from({ length: 96 }, (_, i) => {
  const angle = (i / 96) * Math.PI * 2;
  const inner = 108 + (i % 4) * 7;
  const outer = 236 + ((i * 37) % 64);
  return {
    x1: 400 + Math.cos(angle) * inner,
    y1: 400 + Math.sin(angle) * inner,
    x2: 400 + Math.cos(angle) * outer,
    y2: 400 + Math.sin(angle) * outer,
    opacity: 0.18 + ((i * 13) % 10) / 22,
  };
});

/**
 * A drawn iris, used as artwork and as a fallback when a photo cannot load.
 * The pupil and glint have class names so GSAP can animate them from the hero.
 *
 * fit="slice" fills its box like a background (default).
 * fit="meet"  shows the whole circle without cropping.
 */
export default function EyeArt({ className = "", fit = "slice" }) {
  // Unique ids so several EyeArt drawings on one page never clash
  const uid = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 800 800"
      preserveAspectRatio={`xMidYMid ${fit}`}
      className={className}
      role="img"
      aria-label="Illustration of an eye"
    >
      <defs>
        <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#12264d" />
          <stop offset="1" stopColor="#050f26" />
        </linearGradient>
        <radialGradient id={`${uid}-iris`} cx="50%" cy="50%" r="50%">
          <stop offset="0.38" stopColor="#3fd0e3" />
          <stop offset="0.7" stopColor="#1b6f9e" />
          <stop offset="1" stopColor="#0b1b3b" />
        </radialGradient>
        <radialGradient id={`${uid}-pupil`} cx="50%" cy="50%" r="50%">
          <stop offset="0.7" stopColor="#020712" />
          <stop offset="1" stopColor="#0b1b3b" />
        </radialGradient>
      </defs>

      <rect width="800" height="800" fill={`url(#${uid}-bg)`} />

      {/* Slowly turning outer rings */}
      <g className="animate-spin-reverse" style={{ transformOrigin: "400px 400px" }}>
        <circle cx="400" cy="400" r="380" fill="none" stroke="#6edcec" strokeOpacity="0.14" strokeDasharray="2 14" />
        <circle cx="400" cy="400" r="340" fill="none" stroke="#6edcec" strokeOpacity="0.1" />
      </g>

      {/* Iris body and fibres */}
      <circle cx="400" cy="400" r="262" fill={`url(#${uid}-iris)`} />
      <g className="eye-iris animate-spin-slow" style={{ transformOrigin: "400px 400px" }}>
        {FIBRES.map((f, i) => (
          <line
            key={i}
            x1={f.x1}
            y1={f.y1}
            x2={f.x2}
            y2={f.y2}
            stroke="#a6ecf6"
            strokeOpacity={f.opacity}
            strokeWidth="1.4"
          />
        ))}
      </g>
      <circle cx="400" cy="400" r="262" fill="none" stroke="#050f26" strokeOpacity="0.55" strokeWidth="16" />

      {/* Pupil: GSAP shrinks this while the visitor scrolls */}
      <circle className="eye-pupil" cx="400" cy="400" r="104" fill={`url(#${uid}-pupil)`} />

      {/* Light reflections: GSAP nudges these with the cursor */}
      <g className="eye-glint">
        <ellipse cx="340" cy="338" rx="42" ry="26" transform="rotate(-32 340 338)" fill="#ffffff" fillOpacity="0.4" />
        <circle cx="452" cy="452" r="10" fill="#ffffff" fillOpacity="0.28" />
      </g>
    </svg>
  );
}
