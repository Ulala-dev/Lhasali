
import React from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

const metrics = [
  {
    value: "1k+",
    label: "Products Sold",
    description: "Over 1,000 authentic Himalayan products delivered worldwide"
  },
  {
    value: "1k+",
    label: "Happy Customers",
    description: "Our satisfied customers come back for more authentic gear"
  },
  {
    value: "20+",
    label: "Countries",
    description: "Trusted by trekkers from over 20 countries worldwide"
  }
];

export default function Metrics() {
  return (
    <section className="py-16 bg-himalaya-maroon text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {metrics.map((metric, index) => (
            <Popover key={index}>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full h-full p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-himalaya-gold">
                      {metric.value}
                    </div>
                    <div className="text-lg text-white">
                      {metric.label}
                    </div>
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <p className="text-center">{metric.description}</p>
              </PopoverContent>
            </Popover>
          ))}
        </div>
      </div>
    </section>
  );
}
