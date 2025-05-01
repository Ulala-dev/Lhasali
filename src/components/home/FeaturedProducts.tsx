
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function FeaturedProducts() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-nepal-cream">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
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
            className="text-nepal-terracotta flex items-center mt-4 md:mt-0"
          >
            {t("products.viewAll")}
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
