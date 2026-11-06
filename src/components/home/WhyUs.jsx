import SectionHeading from "../ui/SectionHeading.jsx";
import { whyUs } from "../../data/content.js";

// Four reasons presented as wide rows with hairline dividers.
export default function WhyUs() {
  return (
    <section className="section-y bg-white">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              title="What it feels like to be a patient here"
              text="Good eye care is part science, part attention. These are the things we protect."
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          {whyUs.map((item) => (
            <div key={item.title} className="group relative">
              <div data-line="x" className="h-px bg-navy-900/15 transition-colors duration-500 group-hover:bg-aqua-500" />
              <div data-reveal="fade" className="grid gap-3 py-9 md:grid-cols-5 md:gap-8">
                <h3 className="text-3xl leading-tight transition-all duration-500 group-hover:translate-x-2 group-hover:text-aqua-700 md:col-span-2">
                  {item.title}
                </h3>
                <p className="leading-relaxed md:col-span-3">{item.text}</p>
              </div>
            </div>
          ))}
          <div data-line="x" className="h-px bg-navy-900/15" />
        </div>
      </div>
    </section>
  );
}
