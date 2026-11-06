import Button from "../ui/Button.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import ServiceCard from "../sections/ServiceCard.jsx";
import { services } from "../../data/content.js";

// Four services in an uneven grid: one large featured card and three smaller ones.
export default function ServicesPreview() {
  const [exams, cataract, laser, glaucoma] = services;

  return (
    <section className="section-y bg-mist">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            title="Eye care for every stage of life"
            text="From routine examinations to specialist surgery, here is where most of our patients begin."
          />
          <div data-reveal="fade">
            <Button to="/services" variant="outlineDark" size="lg">All Services</Button>
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-4 lg:grid-rows-2" data-stagger>
          <ServiceCard service={exams} featured className="lg:col-span-2 lg:row-span-2" />
          <ServiceCard service={cataract} />
          <ServiceCard service={laser} />
          <ServiceCard service={glaucoma} className="lg:col-span-2" />
        </div>
      </div>
    </section>
  );
}
