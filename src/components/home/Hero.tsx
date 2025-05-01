import React, { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background parallax image */}
      <div className="absolute inset-0 z-0">
        <div
          // className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1500&auto=format')] bg-cover bg-center"
          className="absolute inset-0 bg-[url('/hero1.png')] bg-cover bg-center"

          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        />
        <div className="absolute inset-0 bg-himalaya-maroon/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <div className="text-white">
            <div className="inline-block mb-4 bg-himalaya-orange/90 px-4 py-1 rounded-sm">
              <span className="text-sm uppercase tracking-wider">{t("Handcrafted treasures from the heart of the Himalayas")}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("Authentic Nepali Craftsmanship")}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Experience the pinnacle of Himalayan craftsmanship with gear designed and tested
              in the world's most challenging terrains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-himalaya-orange hover:bg-himalaya-gold text-white"
              >
                {t("Shop Now")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-himalaya-orange hover:bg-white hover:text-himalaya-maroon transition-all"
              >
                {t("Read Our Story")}
              </Button>
            </div>
          </div>

          {/* Featured image box */}
          <div className="hidden md:block">
            <div className="border-4 border-himalaya-orange rounded-lg overflow-hidden transform rotate-1 shadow-xl">
              <img
                src="/hero2.png"
                alt="Featured Himalayan craft"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10",
          "pointer-events-none"
        )}
      />
    </section>
  );
}
