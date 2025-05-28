import React from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

const metrics = [
  {
    value: "100k+",
    label: "Products Sold",
    description: "Over 100,000 authentic Himalayan products sold."
  },
  {
    value: "10k+",
    label: "Happy Customers",
    description: "Our satisfied customers come back for more authentic gears."
  },
  {
    value: "20+",
    label: "Countries",
    description: "Trusted by trekkers from over 20 countries worldwide."
  }
];

const badgeStyles = `
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
.metric-badge {
  position: relative;
  display: inline-block;
  background: linear-gradient(120deg, #8B3A3A 60%, #F26722 100%);
  color: #fff;
  border-radius: 9999px;
  padding: 2.5rem 2rem 2rem 2rem;
  box-shadow: 0 4px 24px 0 rgba(90,18,18,0.10);
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  overflow: hidden;
}
.metric-badge .shimmer {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(120deg, transparent 60%, rgba(255,255,255,0.5) 80%, transparent 100%);
  background-size: 200% 100%;
  animation: shimmer 2.5s linear infinite;
  pointer-events: none;
}
`;

export default function Metrics() {
  return (
    <section className="py-16 bg-himalaya-maroon text-white">
      <style dangerouslySetInnerHTML={{ __html: badgeStyles }} />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {metrics.map((metric, index) => (
            <Popover key={index}>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full h-full p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="flex flex-col items-center">
                    <span className="metric-badge">
                      {metric.value}
                      <span className="shimmer" />
                    </span>
                    <span className="text-lg text-white font-semibold mb-2">
                      {metric.label}
                    </span>
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
