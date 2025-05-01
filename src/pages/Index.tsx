import React from "react";
import { LanguageProvider } from "@/hooks/useLanguage";
import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import USPTiles from "@/components/home/USPTiles";
import FeaturedCollections from "@/components/home/FeaturedCollections";
import StoryStrip from "@/components/home/StoryStrip";
import Testimonials from "@/components/home/Testimonials";
import Metrics from "@/components/home/Metrics";
import FAQ from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";
import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <USPTiles />
          <FeaturedCollections />
          <StoryStrip />
          <Testimonials />
          <Metrics />
          <FAQ />
          <Contact />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
