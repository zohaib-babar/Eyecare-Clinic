import { useState } from "react";

/**
 * Question and answer list. One answer is open at a time.
 * The panel height animates with a CSS grid-rows transition, no extra library needed.
 */
export default function Accordion({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-navy-900/10 border-y border-navy-900/10" data-stagger>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              className="group flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua-500"
            >
              <span
                className={`font-display text-2xl transition-all duration-500 sm:text-3xl ${
                  isOpen ? "text-aqua-700" : "text-navy-900 group-hover:translate-x-2"
                }`}
              >
                {item.q}
              </span>
              <span className="shrink-0 text-sm font-semibold text-navy-900/60 transition-colors group-hover:text-navy-900">
                {isOpen ? "Hide" : "Show"}
              </span>
            </button>

            <div
              id={`faq-panel-${i}`}
              role="region"
              className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p
                  className={`max-w-2xl pb-7 leading-relaxed transition-opacity duration-500 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
