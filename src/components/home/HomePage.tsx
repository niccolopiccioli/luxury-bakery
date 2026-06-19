"use client";

import { useState, useCallback } from "react";
import { Preloader } from "./Preloader";
import { HeroSection } from "./HeroSection";
import { ManifestoSection } from "./ManifestoSection";
import { CreationsPreviewSection } from "./CreationsPreviewSection";
import { LaboratorySection } from "./LaboratorySection";
import { PressStrip } from "./PressStrip";
import { TestimonialsSection } from "./TestimonialsSection";
import { OffersSection } from "./OffersSection";
import { GalleryTeaserSection } from "./GalleryTeaserSection";
import { VisitSection } from "./VisitSection";

export function HomePage() {
  const [ready, setReady] = useState(false);
  const handlePreloaderComplete = useCallback(() => setReady(true), []);

  return (
    <>
      <Preloader onComplete={handlePreloaderComplete} />
      <HeroSection ready={ready} />
      <ManifestoSection />
      <CreationsPreviewSection />
      <LaboratorySection />
      <PressStrip />
      <TestimonialsSection />
      <OffersSection />
      <GalleryTeaserSection />
      <VisitSection />
    </>
  );
}
