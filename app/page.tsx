
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import WhyChoose from "@/components/WhyChoose";
import Image from "next/image";
import About from "./about/page";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import FAQs from "@/components/FAQs";

export default function Home() {

  return (
    <div className="">
      <Header />
      <section className="z-40">
        <Hero />
      </section>

      <section id="whychoose" className="z-40 scroll-mt-12">
        <WhyChoose />
      </section>
      <section id="features" className="z-40 pt-10 scroll-mt-12">
        <Features />
      </section>
      <section id="howitworks" className="z-40 pt-10 scroll-mt-12">
        <HowItWorks />
      </section>
      <section id="faqs" className="z-40 pt-10 scroll-mt-12">
        <FAQs />
      </section>
      <section className="z-40 pt-12">
        <CTA />
      </section>
    </div>
  );
}
