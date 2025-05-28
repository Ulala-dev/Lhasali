
import React, { useState } from "react";
import { Product } from "@/data/products";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  className?: string;
};

export default function ProductCard({ product, className }: ProductCardProps) {
  const { language } = useLanguage();
  const [imageLoaded, setImageLoaded] = useState(false);

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat(language === "en" ? "en-US" : "ne-NP", {
      style: "currency",
      currency: currency === "NPR" ? "NPR" : "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card
      className={cn("overflow-hidden transition-all hover:shadow-md", className)}
    >
      <div className="relative aspect-square overflow-hidden">
        <div
          className={cn(
            "absolute inset-0 bg-nepal-stone image-loading",
            imageLoaded ? "opacity-0" : "opacity-100"
          )}
        />
        <img
          src={`${product.imageUrl}?w=400&h=400&fit=crop&auto=format`}
          alt={language === "en" ? product.name : product.nameNe}
          className="object-cover w-full h-full transition-opacity duration-300"
          style={{ opacity: imageLoaded ? 1 : 0 }}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium text-lg">
          {language === "en" ? product.name : product.nameNe}
        </h3>
        <p className="text-sm text-muted-foreground">
          {product.origin}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <span className="font-semibold text-nepal-indigo">
          {formatPrice(product.price, product.currency)}
        </span>
        <button className="text-sm text-nepal-terracotta hover:underline">
          {language === "en" ? "View Details" : "विवरण हेर्नुहोस्"}
        </button>
      </CardFooter>
    </Card>
  );
}
