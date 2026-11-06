import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import gsap from "gsap";
import Button from "../ui/Button.jsx";
import { clinic, navLinks } from "../../data/content.js";
import { introWait, prefersReducedMotion } from "../../utils/motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const headerRef = useRef(null);

  // The bar starts transparent over the dark hero and turns to frosted white after scrolling.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the page changes.
  useEffect(() => setOpen(false), [pathname]);

  // Stop the page behind the menu from scrolling.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Slide the bar in once the intro curtain has lifted.
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const tween = gsap.from(headerRef.current, {
      yPercent: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: introWait() + 0.2,
      clearProps: "transform,opacity",
    });
    return () => tween.kill();
  }, []);

  const solid = scrolled && !open;

  const linkClass = ({ isActive }) =>
    `relative py-1 text-sm font-semibold transition-colors duration-300 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:bg-current after:transition-transform after:duration-500 ${
      isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
    }`;

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-[70] transition-all duration-500 ${
          solid
            ? "bg-white/85 py-3 text-navy-900 shadow-soft backdrop-blur-xl"
            : "bg-transparent py-5 text-white"
        }`}
      >
        <div className="container-x flex items-center justify-between">
          <Link
            to="/"
            className="flex items-baseline gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua-400"
          >
            <span className="font-display text-3xl leading-none">EyeCare</span>
            <span className={`text-sm font-semibold ${solid ? "text-aqua-700" : "text-aqua-300"}`}>Clinic</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-10 lg:flex" aria-label="Main">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end className={linkClass}>
                {link.label}
              </NavLink>
            ))}
            <Button to="/contact" variant={solid ? "dark" : "primary"}>
              Book an Appointment
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors lg:hidden ${
              solid ? "border-navy-900/25 hover:bg-navy-900/5" : "border-white/35 hover:bg-white/10"
            }`}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {/* Mobile menu: a circle expands from the button to fill the screen */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className="fixed inset-0 z-[60] flex flex-col justify-between overflow-y-auto bg-navy-950 px-6 pb-10 pt-28 text-white lg:hidden"
        style={{
          clipPath: open
            ? "circle(150% at calc(100% - 3rem) 2.5rem)"
            : "circle(0% at calc(100% - 3rem) 2.5rem)",
          visibility: open ? "visible" : "hidden",
          transition: open
            ? "clip-path 0.8s cubic-bezier(0.7, 0, 0.2, 1), visibility 0s"
            : "clip-path 0.7s cubic-bezier(0.7, 0, 0.2, 1), visibility 0s linear 0.7s",
        }}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-2">
          {navLinks.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              end
              tabIndex={open ? 0 : -1}
              className={({ isActive }) =>
                `font-display text-5xl transition-all duration-700 sm:text-6xl ${
                  isActive ? "text-aqua-400" : "text-white"
                } ${open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`
              }
              style={{ transitionDelay: open ? `${250 + i * 90}ms` : "0ms" }}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div
          className={`space-y-1 text-white/70 transition-opacity duration-700 ${open ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: open ? "650ms" : "0ms" }}
        >
          <p>{clinic.address.join(", ")}</p>
          <a href={clinic.phoneLink} tabIndex={open ? 0 : -1} className="block text-white">
            {clinic.phone}
          </a>
        </div>
      </div>
    </>
  );
}
