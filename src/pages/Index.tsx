import React from "react";
import { LanguageProvider } from "@/hooks/useLanguage";
import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import BrandPartners from "@/components/home/BrandPartners";
import USPTiles from "@/components/home/USPTiles";
import FeaturedCollections from "@/components/home/FeaturedCollections";
import StoryStrip from "@/components/home/StoryStrip";
import Testimonials from "@/components/home/Testimonials";
import Metrics from "@/components/home/Metrics";
import FAQ from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <FeaturedCollections />
          <USPTiles />
          <Metrics />
          <StoryStrip />
          <BrandPartners />
          <Testimonials />
          <div className="w-full flex justify-center my-0">
            <div className="h-8 w-2/3 bg-gradient-to-r from-transparent via-himalaya-orange/20 to-transparent rounded-full" />
          </div>
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
