/**
 * Headline whose words slide up from behind a mask.
 * The animation itself is run by useScrollAnimations (data-split),
 * or by the hero's own timeline when auto={false}.
 */
export default function RevealText({
  text,
  as: Tag = "h2",
  className = "",
  auto = true,
  delay,
}) {
  const words = text.split(" ");

  return (
    <Tag
      className={className}
      aria-label={text}
      {...(auto ? { "data-split": true } : {})}
      {...(delay ? { "data-delay": delay } : {})}
    >
      {words.map((word, i) => (
        <span key={i} aria-hidden="true">
          {/* The outer span is the mask, the inner span is what moves */}
          <span className="-mx-[0.05em] -mb-[0.2em] inline-block overflow-hidden px-[0.05em] pb-[0.2em] align-bottom">
            <span className="rt-word inline-block will-change-transform">{word}</span>
          </span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </Tag>
  );
}
