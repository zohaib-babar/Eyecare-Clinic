import Page from "../components/layout/Page.jsx";
import PageHeader from "../components/sections/PageHeader.jsx";
import StatsBand from "../components/sections/StatsBand.jsx";
import CtaBanner from "../components/sections/CtaBanner.jsx";
import RevealText from "../components/ui/RevealText.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import SmartImage from "../components/ui/SmartImage.jsx";
import { images } from "../data/images.js";
import { milestones, team, values } from "../data/content.js";

export default function About() {
  return (
    <Page>
      <PageHeader
        current="About"
        title="Built on patience and precision."
        text="EyeCare Clinic began with a simple idea: people deserve time, clear answers and expert hands when it comes to their eyes."
      />

      <div className="page-body">
        {/* Story: image and text */}
        <section className="section-y">
          <div className="container-x grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <SmartImage
                src={images.team}
                alt="The clinical team at EyeCare Clinic"
                className="aspect-[4/5]"
                radius="2.5rem"
              />
            </div>
            <div className="lg:col-span-7">
              <RevealText
                text="A practice that grew by listening."
                className="text-4xl leading-[1.05] sm:text-5xl lg:text-6xl"
              />
              <div data-reveal="fade" className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed">
                <p>
                  We started as two optometrists and a single examination room. Patients told us what mattered to them: not being rushed, understanding their results, and seeing the same familiar faces on every visit. We built the clinic around those three things.
                </p>
                <p>
                  Today our team includes surgeons, retina specialists, paediatric optometrists and opticians. We share one record, one waiting room and one approach, so care is joined up from your first check to any treatment you may need later.
                </p>
              </div>
              <blockquote
                data-reveal="fade"
                className="mt-10 max-w-2xl border-l-2 border-aqua-500 pl-6 font-display text-3xl leading-snug text-navy-900"
              >
                Our mission is to protect sight, and to make every patient feel informed rather than hurried.
              </blockquote>
            </div>
          </div>
        </section>

        <StatsBand />

        {/* Values */}
        <section className="section-y">
          <div className="container-x">
            <SectionHeading title="What we hold ourselves to" />
            <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] bg-navy-900/10 md:grid-cols-3" data-stagger>
              {values.map((v) => (
                <div
                  key={v.title}
                  className="group relative isolate bg-white p-9 transition-colors duration-500 hover:bg-navy-900 md:p-12"
                >
                  <h3 className="text-4xl transition-colors duration-500 group-hover:!text-white">{v.title}</h3>
                  <div className="mt-6 h-px w-12 bg-aqua-500 transition-all duration-500 group-hover:w-28" />
                  <p className="mt-6 leading-relaxed transition-colors duration-500 group-hover:text-white/75">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline: this really is a sequence, so the years mark the order */}
        <section className="section-y bg-mist">
          <div className="container-x">
            <SectionHeading title="Our story so far" text="A few moments that shaped the clinic you visit today." />

            <div className="relative mt-16">
              <div className="absolute left-[0.6rem] top-0 h-full w-px bg-navy-900/10 md:left-1/2" />
              <div
                data-line="y"
                className="absolute left-[0.6rem] top-0 h-full w-px bg-aqua-500 md:left-1/2"
              />

              <ol className="space-y-14">
                {milestones.map((m, i) => (
                  <li
                    key={m.year}
                    data-reveal={i % 2 === 0 ? "left" : "right"}
                    className="relative grid pl-12 md:grid-cols-2 md:gap-24 md:pl-0"
                  >
                    <span className="absolute left-0 top-2 h-[1.3rem] w-[1.3rem] rounded-full border-4 border-mist bg-aqua-500 md:left-1/2 md:-translate-x-1/2" />
                    <div className={i % 2 === 0 ? "md:text-right" : "md:col-start-2"}>
                      <p className="font-display text-5xl text-aqua-700">{m.year}</p>
                      <h3 className="mt-2 text-2xl">{m.title}</h3>
                      <p className="mt-3 leading-relaxed">{m.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-y">
          <div className="container-x">
            <SectionHeading title="The people looking after your eyes" />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" data-stagger>
              {team.map((person) => (
                <article
                  key={person.name}
                  className="group relative isolate overflow-hidden rounded-[1.75rem] bg-mist p-7 transition-shadow duration-500 hover:shadow-lift"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 translate-y-full bg-gradient-to-br from-navy-800 to-navy-950 transition-transform duration-500 ease-out group-hover:translate-y-0"
                  />
                  <p className="flex h-20 w-20 items-center justify-center rounded-full bg-navy-900 font-display text-3xl text-white transition-colors duration-500 group-hover:bg-aqua-400 group-hover:text-navy-950">
                    {person.name.replace("Dr. ", "").split(" ").map((n) => n[0]).join("")}
                  </p>
                  <h3 className="mt-14 text-2xl transition-colors duration-500 group-hover:!text-white">{person.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-aqua-700 transition-colors duration-500 group-hover:text-aqua-300">
                    {person.role}
                  </p>
                  <p className="mt-4 text-sm transition-colors duration-500 group-hover:text-white/70">{person.focus}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner />
      </div>
    </Page>
  );
}
