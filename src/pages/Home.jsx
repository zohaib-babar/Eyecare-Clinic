import Page from "../components/layout/Page.jsx";
import Hero from "../components/home/Hero.jsx";
import Marquee from "../components/home/Marquee.jsx";
import AboutPreview from "../components/home/AboutPreview.jsx";
import ServicesPreview from "../components/home/ServicesPreview.jsx";
import WhyUs from "../components/home/WhyUs.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import CtaBanner from "../components/sections/CtaBanner.jsx";

export default function Home() {
  return (
    <Page>
      <Hero />
      <Marquee />
      <AboutPreview />
      <ServicesPreview />
      <WhyUs />
      <Testimonials />
      <CtaBanner />
    </Page>
  );
}
