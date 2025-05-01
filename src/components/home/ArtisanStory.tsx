
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { artisans } from "@/data/stories";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ArtisanStory() {
  const { t, language } = useLanguage();
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // For this component, we'll just feature the first artisan story
  const featuredArtisan = artisans[0];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-nepal-indigo mb-8 text-center">
          {t("artisan.title")}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-lg overflow-hidden">
            <div 
              className={cn(
                "absolute inset-0 bg-nepal-stone image-loading", 
                imageLoaded ? "opacity-0" : "opacity-100"
              )}
            />
            <img
              src={`${featuredArtisan.imageUrl}?w=600&h=600&fit=crop&auto=format`}
              alt={language === "en" ? featuredArtisan.name : featuredArtisan.nameNe}
              className="w-full h-full object-cover rounded-lg transition-opacity duration-300"
              style={{ opacity: imageLoaded ? 1 : 0 }}
              onLoad={() => setImageLoaded(true)}
              loading="lazy"
            />
          </div>
          
          {/* Content */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-nepal-stone/20 nepal-pattern">
            <h3 className="text-2xl font-bold mb-2">
              {language === "en" ? featuredArtisan.name : featuredArtisan.nameNe}
            </h3>
            <div className="flex space-x-4 mb-4">
              <span className="text-nepal-terracotta">
                {language === "en" ? featuredArtisan.craft : featuredArtisan.craftNe}
              </span>
              <span className="text-nepal-slate">
                {language === "en" ? featuredArtisan.location : featuredArtisan.locationNe}
              </span>
            </div>
            <p className="mb-6 text-nepal-slate leading-relaxed">
              {language === "en" ? featuredArtisan.story : featuredArtisan.storyNe}
            </p>
            <Button className="bg-nepal-terracotta hover:bg-nepal-terracotta/90">
              {t("artisan.readMore")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
