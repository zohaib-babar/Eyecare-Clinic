import { Link } from "react-router-dom";

// A fill slides up from the bottom on hover, and the button lifts slightly.
const base =
  "group relative inline-flex items-center justify-center overflow-hidden rounded-full font-semibold " +
  "transition-all duration-500 ease-out active:scale-[0.97] " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua-400";

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const variants = {
  // Bright aqua, fills white on hover. For dark backgrounds.
  primary: {
    body: "bg-aqua-400 text-navy-950 shadow-[0_14px_34px_-14px_rgba(63,208,227,0.9)] hover:-translate-y-0.5 hover:shadow-[0_22px_44px_-14px_rgba(63,208,227,1)]",
    fill: "bg-white",
    text: "",
  },
  // Outlined white, fills white on hover. For dark backgrounds.
  outline: {
    body: "border border-white/40 text-white hover:-translate-y-0.5 hover:border-white",
    fill: "bg-white",
    text: "group-hover:text-navy-900",
  },
  // Solid navy, fills aqua on hover. For light backgrounds.
  dark: {
    body: "bg-navy-900 text-white shadow-[0_14px_34px_-16px_rgba(11,27,59,0.8)] hover:-translate-y-0.5",
    fill: "bg-aqua-400",
    text: "group-hover:text-navy-950",
  },
  // Outlined navy, fills navy on hover. For light backgrounds.
  outlineDark: {
    body: "border border-navy-900/25 text-navy-900 hover:-translate-y-0.5 hover:border-navy-900",
    fill: "bg-navy-900",
    text: "group-hover:text-white",
  },
};

/**
 * <Button to="/contact">Book</Button>      internal link
 * <Button href="tel:...">Call</Button>      normal link
 * <Button type="submit">Send</Button>       real button
 */
export default function Button({
  to,
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const v = variants[variant];
  const classes = `${base} ${sizes[size]} ${v.body} ${className}`;

  const content = (
    <>
      <span
        aria-hidden="true"
        className={`absolute inset-0 z-0 translate-y-[101%] rounded-full transition-transform duration-500 ease-out group-hover:translate-y-0 ${v.fill}`}
      />
      <span className={`relative z-10 transition-colors duration-500 ${v.text}`}>{children}</span>
    </>
  );

  if (to) return <Link to={to} className={classes} {...props}>{content}</Link>;
  if (href) return <a href={href} className={classes} {...props}>{content}</a>;
  return <button className={classes} {...props}>{content}</button>;
}
