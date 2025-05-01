
import React from "react";
import { Mountain, Globe2, ShieldCheck } from "lucide-react";

export default function USPTiles() {
  const usps = [
    {
      icon: <Mountain className="h-8 w-8 text-himalaya-orange" />,
      text: "Climb higher. Spend smarter.",
    },
    {
      icon: <Globe2 className="h-8 w-8 text-himalaya-orange" />,
      text: "Trusted by trekkers from 10+ countries",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-himalaya-orange" />,
      text: "Field-tested in Himalaya",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {usps.map((usp, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
            >
              {usp.icon}
              <p className="mt-4 text-gray-800 font-medium">{usp.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
