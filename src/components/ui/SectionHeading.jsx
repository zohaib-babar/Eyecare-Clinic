import RevealText from "./RevealText.jsx";

/**
 * Standard heading block: a large title and an optional paragraph.
 * Pass light for dark backgrounds, align="center" to centre it.
 */
export default function SectionHeading({ title, text, light = false, align = "left", className = "" }) {
  const center = align === "center";

  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      <RevealText
        text={title}
        className={`text-4xl leading-[1.05] sm:text-5xl lg:text-6xl ${light ? "!text-white" : ""}`}
      />
      {text && (
        <p
          data-reveal="fade"
          className={`mt-6 max-w-xl text-lg leading-relaxed ${center ? "mx-auto" : ""} ${
            light ? "text-white/70" : "text-slate-600"
          }`}
        >
          {text}
        </p>
      )}
    </div>
  );
}
