import React from "react";
import { Feather, Wrench, Snowflake, Shield, Link as LinkIcon, Layers, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

export default function USPTiles() {
  const features = [
    {
      icon: <Feather className="h-8 w-8 text-himalaya-orange" />,
      text: "Light Weight",
      description: "Our products are designed to be lightweight without compromising on durability, making them perfect for long treks and expeditions."
    },
    {
      icon: <Wrench className="h-8 w-8 text-himalaya-orange" />,
      text: "Ultra-Functional",
      description: "Every product is crafted with multiple functions in mind, ensuring versatility in various mountain conditions and activities."
    },
    {
      icon: <Snowflake className="h-8 w-8 text-himalaya-orange" />,
      text: "Cold Resistance",
      description: "Specially designed to withstand extreme cold temperatures, keeping you warm and protected in harsh mountain environments."
    },
    {
      icon: <Shield className="h-8 w-8 text-himalaya-orange" />,
      text: "Impact Resistance",
      description: "Built to endure rough handling and accidental impacts, ensuring your gear stays intact during challenging adventures."
    },
    {
      icon: <LinkIcon className="h-8 w-8 text-himalaya-orange" />,
      text: "High Tenacity",
      description: "Our materials are selected for their exceptional strength and durability, capable of withstanding the toughest mountain conditions."
    },
    {
      icon: <Layers className="h-8 w-8 text-himalaya-orange" />,
      text: "Abrasion Resistance",
      description: "Designed to resist wear and tear from constant use, ensuring your gear maintains its quality even after extensive use."
    },
    {
      icon: <Leaf className="h-8 w-8 text-himalaya-orange" />,
      text: "Eco-Friendly Products",
      description: "We use eco-friendly materials that are sustainable and have minimal impact on the environment we love and protect."
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-himalaya-maroon text-center mb-12">Lhasali Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {features.map((feature, index) => (
            <Popover key={index}>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full h-full p-8 rounded-2xl border border-gray-100 bg-white shadow transition-all duration-300 hover:shadow-lg hover:shadow-himalaya-maroon/40 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center">
                    {feature.icon}
                    <p className="mt-4 text-lg text-gray-800 font-semibold tracking-wide">{feature.text}</p>
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <p className="text-center text-gray-700">{feature.description}</p>
              </PopoverContent>
            </Popover>
          ))}
        </div>
      </div>
    </section>
  );
}
