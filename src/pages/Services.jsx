import Page from "../components/layout/Page.jsx";
import PageHeader from "../components/sections/PageHeader.jsx";
import ServiceCard from "../components/sections/ServiceCard.jsx";
import CtaBanner from "../components/sections/CtaBanner.jsx";
import Accordion from "../components/ui/Accordion.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import { faqs, services, steps } from "../data/content.js";

export default function Services() {
  return (
    <Page>
      <PageHeader
        current="Services"
        title="Care for every part of your eyes."
        text="Eight services, one team. Choose what you need, or start with an examination and we will guide you from there."
      />

      <div className="page-body bg-mist">
        {/* All services. Every second card sits lower for a staggered rhythm. */}
        <section className="section-y">
          <div className="container-x">
            <div className="grid gap-6 md:grid-cols-2" data-stagger>
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  detailed
                  cta={{ label: "Enquire about this service", to: `/contact?service=${service.id}` }}
                  className="md:even:mt-14"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Process: a real sequence, so the steps are numbered */}
        <section className="section-y bg-navy-950 text-white">
          <div className="container-x">
            <SectionHeading light title="How a visit works" text="Four simple steps, from your first call to long-term follow-up." />

            <ol className="relative mt-16 grid gap-12 md:grid-cols-4 md:gap-8" data-stagger>
              {steps.map((step, i) => (
                <li key={step.title} className="relative">
                  <div className="mb-6 flex items-center gap-4">
                    <span className="font-display text-6xl text-aqua-400">{i + 1}</span>
                    <span className="h-px flex-1 bg-white/20" />
                  </div>
                  <h3 className="text-3xl !text-white">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/65">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Questions */}
        <section className="section-y bg-white">
          <div className="container-x grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading title="Questions we hear most" text="Cannot find your answer? Call us and we will be glad to help." />
            </div>
            <div className="lg:col-span-8">
              <Accordion items={faqs} />
            </div>
          </div>
        </section>

        <CtaBanner />
      </div>
    </Page>
  );
}
