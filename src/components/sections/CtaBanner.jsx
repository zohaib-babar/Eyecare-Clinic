import Button from "../ui/Button.jsx";
import RevealText from "../ui/RevealText.jsx";
import { clinic } from "../../data/content.js";

// Bright aqua call-to-action panel with slowly pulsing rings behind it.
export default function CtaBanner() {
  return (
    <section className="bg-white pb-20 md:pb-28">
      <div className="container-x">
        <div
          data-reveal="scale"
          className="relative isolate overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-aqua-400 via-aqua-300 to-aqua-400 bg-[length:200%_200%] px-8 py-16 animate-gradient sm:px-14 md:py-24"
        >
          {/* Pulsing rings */}
          <div aria-hidden="true" className="absolute -right-24 top-1/2 -z-10 h-80 w-80 -translate-y-1/2">
            {[0, 2.3, 4.6].map((delay) => (
              <span
                key={delay}
                className="absolute inset-0 animate-ring rounded-full border border-navy-950/25"
                style={{ animationDelay: `${delay}s` }}
              />
            ))}
          </div>

          <RevealText
            text="Ready to see things more clearly?"
            className="max-w-2xl text-5xl leading-[1.02] !text-navy-950 sm:text-6xl"
          />
          <p data-reveal="fade" className="mt-6 max-w-lg text-lg leading-relaxed text-navy-900/80">
            Most patients are seen within the week. Tell us what you need and we will find the right specialist and a time that suits you.
          </p>
          <div data-reveal="fade" className="mt-10 flex flex-wrap gap-4">
            <Button to="/contact" variant="dark" size="lg">Book an Appointment</Button>
            <Button href={clinic.phoneLink} variant="outlineDark" size="lg">Call {clinic.phone}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
