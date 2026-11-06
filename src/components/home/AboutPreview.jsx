import Button from "../ui/Button.jsx";
import RevealText from "../ui/RevealText.jsx";
import SmartImage from "../ui/SmartImage.jsx";
import { images } from "../../data/images.js";

export default function AboutPreview() {
  return (
    <section className="section-y overflow-hidden bg-white">
      <div className="container-x grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
        {/* Image composition */}
        <div className="relative lg:col-span-6">
          <SmartImage
            src={images.clinic}
            alt="Clinicians reviewing an eye examination"
            className="aspect-[4/5] w-[88%]"
          />
          <div className="absolute -bottom-10 right-0 w-[48%]" data-reveal="scale" data-delay="0.3">
            <SmartImage
              src={images.consult}
              alt="A patient consultation"
              className="aspect-square border-[10px] border-white shadow-lift"
              radius="2rem"
              reveal={false}
              parallax={false}
            />
          </div>
          <div
            data-reveal="left"
            data-delay="0.5"
            className="glass absolute left-4 top-8 max-w-[11rem] rounded-2xl !bg-navy-950/80 p-5 text-white shadow-lift"
          >
            <p className="font-display text-5xl leading-none">18</p>
            <p className="mt-2 text-sm text-white/75">years of looking after eyes in this community</p>
          </div>
        </div>

        {/* Text */}
        <div className="lg:col-span-6 lg:pl-10">
          <RevealText
            text="Careful examination. Plain explanations. Time for your questions."
            className="text-4xl leading-[1.05] sm:text-5xl lg:text-6xl"
          />
          <div data-reveal="fade" className="mt-8 space-y-5 text-lg leading-relaxed">
            <p>
              We opened EyeCare Clinic because eye appointments often feel rushed. Here, every visit starts with a conversation, and every result is explained in words you can use.
            </p>
            <p>
              From a first glasses prescription to complex retina care, our clinicians work as one team, so the person who examines you knows exactly what the surgeon will need.
            </p>
          </div>
          <div data-reveal="fade" className="mt-10">
            <Button to="/about" variant="dark" size="lg">About the Clinic</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
