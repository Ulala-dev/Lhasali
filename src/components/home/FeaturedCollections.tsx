
import React from "react";
import { Card } from "@/components/ui/card";

const collections = [
  {
    title: "Jackets",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&auto=format",
    href: "/shop/jackets"
  },
  {
    title: "Bags",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format",
    href: "/shop/bags"
  },
  {
    title: "Non-clothing gear",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&auto=format",
    href: "/shop/gear"
  },
];

export default function FeaturedCollections() {
  return (
    <section className="py-16 bg-himalaya-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-himalaya-maroon mb-8 text-center">
          Featured Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <a
              key={collection.title}
              href={collection.href}
              className="block"
            >
              <Card
                className="group relative overflow-hidden aspect-[4/5] cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div
                  className="absolute inset-0 bg-cover bg-center transform transition-transform group-hover:scale-110"
                  style={{ backgroundImage: `url(${collection.image})` }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                  <h3 className="text-xl font-semibold">{collection.title}</h3>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
