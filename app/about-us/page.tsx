// app/about-us/page.tsx

import AboutHero from "../../components/about/AboutHero";
import MissionSection from "../../components/about/MissionSection";
import WhatWeDo from "../../components/about/WhatWeDo";
import AboutBanner from "../../components/about/AboutBanner";
import VisionSection from "../../components/about/VisionSection";
import NewsletterSection from "../../components/about/NewsletterSection";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionSection />
      <WhatWeDo />
      <AboutBanner />
      <VisionSection />
      <NewsletterSection />
    </>
  );
}