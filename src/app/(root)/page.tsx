"use client";

import About from "./_components/about";
import Background from "@/components/background";
import FAQ from "./_components/faq";
import Features from "./_components/features";
import Hero from "./_components/hero";
import HowItWorks from "./_components/how-it-works";
import Testimonials from "./_components/testimonials";

export default function Page() {
  return (
    <>
      <Background />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <About />
      <FAQ />
    </>
  );
}
