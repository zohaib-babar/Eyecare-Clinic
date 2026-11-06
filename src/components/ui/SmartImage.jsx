import { useEffect, useRef, useState } from "react";
import EyeArt from "./EyeArt.jsx";

/**
 * A photograph with three safety nets:
 *  - the iris artwork shows while the photo loads (and stays if it fails)
 *  - the photo fades in once ready
 *  - GSAP attributes give it a reveal wipe and a gentle parallax
 *
 * Props
 *  src, alt      the picture
 *  className     size and position, e.g. "aspect-[4/5]" or "absolute inset-0"
 *  radius        corner radius (CSS value). Use "0px" for full-bleed backgrounds.
 *  reveal        play the clip-path wipe when scrolled into view
 *  parallax      move slowly while scrolling
 *  priority      load immediately (use for the hero)
 */
export default function SmartImage({
  src,
  alt,
  className = "",
  radius = "2.5rem",
  reveal = true,
  parallax = true,
  priority = false,
  children,
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const imgRef = useRef(null);

  // If the browser already has the image cached, onLoad may have fired before React attached it.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    <div
      className={`relative overflow-hidden bg-navy-900 ${className}`}
      style={{ borderRadius: radius }}
      {...(reveal ? { "data-image-reveal": true, "data-radius": radius } : {})}
    >
      {/* The inner layer is taller than the frame so parallax never shows an edge */}
      <div
        className={`absolute inset-x-0 ${parallax ? "-top-[10%] h-[120%]" : "inset-y-0"}`}
        {...(parallax ? { "data-parallax": true, "data-speed": "0.07" } : {})}
      >
        <div className="absolute inset-0" data-scale-target>
          <EyeArt className="absolute inset-0 h-full w-full" />
          {!failed && (
            <img
              ref={imgRef}
              src={src}
              alt={alt}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              onLoad={() => setLoaded(true)}
              onError={() => setFailed(true)}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
            />
          )}
        </div>
      </div>
      {children}
    </div>
  );
}
