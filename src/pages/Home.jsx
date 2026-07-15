import React from "react";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import EcosystemSection from "@/components/home/EcosystemSection";
import ProductsPreview from "@/components/home/ProductsPreview";
import DirectorStrip from "@/components/home/DirectorStrip";
import CommunityPreview from "@/components/home/CommunityPreview";
import FoundationPreview from "@/components/home/FoundationPreview";
import CareersTeaser from "@/components/home/CareersTeaser";
import ContactTeaser from "@/components/home/ContactTeaser";
import TypographyArt from "@/components/shared/TypographyArt";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutPreview />
      <EcosystemSection />
      <TypographyArt />
      <ProductsPreview />
      <DirectorStrip />
      <CommunityPreview />
      <FoundationPreview />
      <CareersTeaser />
      <ContactTeaser />
    </div>
  );
}