import { Link } from "react-router-dom";
import Button from "../ui/Button.jsx";
import RevealText from "../ui/RevealText.jsx";
import { clinic, navLinks, services } from "../../data/content.js";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white/70">
      {/* Large wordmark cropped at the bottom edge */}
      <p
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[0.18em] left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[24vw] leading-none text-white/[0.035]"
      >
        EyeCare
      </p>
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 animate-drift rounded-full bg-aqua-500/10 blur-3xl" />

      <div className="container-x relative pb-10 pt-24 md:pt-32">
        {/* Closing call to action */}
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <RevealText
            text="Clear sight starts with a conversation."
            className="max-w-3xl text-5xl leading-[1.02] !text-white sm:text-6xl lg:text-7xl"
          />
          <div data-reveal="fade" className="flex flex-wrap gap-4">
            <Button to="/contact" size="lg">Book an Appointment</Button>
            <Button href={clinic.phoneLink} variant="outline" size="lg">Call {clinic.phone}</Button>
          </div>
        </div>

        <div data-line="x" className="mt-20 h-px bg-white/15" />

        {/* Link columns */}
        <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-3xl text-white">{clinic.name}</p>
            <p className="mt-4 max-w-xs leading-relaxed">
              Specialist eye care for adults and children, with diagnostics and surgeons under one roof.
            </p>
          </div>

          <div>
            <h3 className="font-sans text-sm font-semibold text-white">Explore</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-sm font-semibold text-white">Services</h3>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <Link to="/services" className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-sm font-semibold text-white">Visit us</h3>
            <address className="mt-5 space-y-1 not-italic">
              {clinic.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>
            <p className="mt-4">
              <a href={clinic.phoneLink} className="transition-colors hover:text-white">{clinic.phone}</a>
            </p>
            <p>
              <a href={`mailto:${clinic.email}`} className="transition-colors hover:text-white">{clinic.email}</a>
            </p>
          </div>
        </div>

        <div className="relative mt-16 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-sm sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {clinic.name}. All rights reserved.</p>
          <p>{clinic.hours[0].days}, {clinic.hours[0].time}</p>
        </div>
      </div>
    </footer>
  );
}
