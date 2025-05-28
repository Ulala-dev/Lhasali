import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { MountainBackground } from "@/components/mountain/MountainBackground";
import { MountainOverlay } from "@/components/mountain/MountainOverlay";
import { ParallaxContainer } from "@/components/mountain/ParallaxContainer";

export default function FeaturedProducts() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Mountain Background */}
      <ParallaxContainer className="absolute inset-0 z-0" speed={0.1}>
        <MountainBackground
          layers={3}
          color="earth"
          opacity={0.1}
          className="h-[120%] -top-[10%]"
        />
        <MountainBackground
          layers={2}
          color="forest"
          opacity={0.05}
          className="h-[110%] -top-[5%]"
        />
      </ParallaxContainer>

      {/* Topography Overlay */}
      <MountainOverlay
        type="topography"
        color="earth"
        opacity={0.1}
        className="z-10"
      />

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-nepal-indigo mb-2">
              {t("products.title")}
            </h2>
            <p className="text-nepal-slate max-w-2xl">
              Explore our handcrafted selection of authentic Nepali products, each with its own unique story and cultural significance.
            </p>
          </div>
          <Button
            variant="link"
            className="text-nepal-terracotta flex items-center mt-4 md:mt-0 group"
          >
            {t("products.viewAll")}
            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
