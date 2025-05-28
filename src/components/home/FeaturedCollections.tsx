import React from "react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const collections = [
  {
    title: "Jackets",
    image: "/jacket.jpg",
    category: "Jacket"
  },
  {
    title: "Non-clothing gear",
    image: "/gear.png",
    category: "Bottle"
  },
  {
    title: "Bags",
    image: "/bag.jpg",
    category: "Bag"
  }
];

const cloudStyles = `
  @keyframes cloud-slow {
    0% { left: 0; }
    100% { left: 100vw; }
  }
  @keyframes cloud-medium {
    0% { left: 33vw; }
    100% { left: 110vw; }
  }
  @keyframes cloud-fast {
    0% { left: 66vw; }
    100% { left: 120vw; }
  }
  .animate-cloud-slow {
    animation: cloud-slow 60s linear infinite;
  }
  .animate-cloud-medium {
    animation: cloud-medium 45s linear infinite;
  }
  .animate-cloud-fast {
    animation: cloud-fast 30s linear infinite;
  }
  @keyframes bird-fly1 {
    0% { left: -10vw; }
    100% { left: 110vw; }
  }
  @keyframes bird-fly2 {
    0% { left: -20vw; }
    100% { left: 120vw; }
  }
  @keyframes bird-fly3 {
    0% { left: -15vw; }
    100% { left: 115vw; }
  }
  .animate-bird-fly1 {
    animation: bird-fly1 35s linear infinite;
  }
  .animate-bird-fly2 {
    animation: bird-fly2 50s linear infinite;
  }
  .animate-bird-fly3 {
    animation: bird-fly3 40s linear infinite;
  }
`;

const pathStyles = `
@keyframes draw-path {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes move-dot {
  0% { offset-distance: 0%; }
  100% { offset-distance: 100%; }
}
.animated-path {
  stroke-dasharray: 1200;
  stroke-dashoffset: 1200;
  animation: draw-path 2.5s ease-out forwards;
}
.animated-dot {
  offset-path: path('M60,60 C300,20 600,120 900,40 1200,100 1350,80 1380,120');
  animation: move-dot 4s linear infinite;
}
`;

const gradientStyles = `
@keyframes gradient-move {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.animated-gradient-bg {
  background: linear-gradient(120deg, #5A1212, #F26722, #8B3A3A, #FFD580);
  background-size: 300% 300%;
  animation: gradient-move 18s ease-in-out infinite;
}
@keyframes wave-move {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100px); }
}
.animated-wave {
  animation: wave-move 8s linear infinite alternate;
}
`;

const BirdSVG = ({ width = 40, height = 20, color = "#5A1212", opacity = 0.7 }) => (
  <svg width={width} height={height} viewBox="0 0 40 20" fill="none" style={{ opacity }}>
    <path d="M2 18 Q10 2 20 10 Q30 2 38 18" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M12 12 Q15 7 20 10 Q25 7 28 12" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" />
  </svg>
);

export default function FeaturedCollections() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Animated Gradient Background */}
      <style dangerouslySetInnerHTML={{ __html: gradientStyles }} />
      <div className="absolute inset-0 w-full h-full animated-gradient-bg z-0" aria-hidden="true" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-himalaya-maroon mb-8 text-center">
          Featured Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <Link
              key={collection.title}
              to={`/shop?category=${encodeURIComponent(collection.category)}`}
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
            </Link>
          ))}
        </div>
      </div>
      {/* Animated Wave Divider */}
      <div className="absolute left-0 right-0 bottom-0 w-full overflow-hidden z-10" style={{ height: 60 }} aria-hidden="true">
        <svg className="animated-wave" width="100%" height="60" viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
          <path d="M0,30 Q180,60 360,30 T720,30 T1080,30 T1440,30 V60 H0Z" fill="#5A1212" fillOpacity="0.13" />
          <path d="M0,40 Q240,10 480,40 T960,40 T1440,40 V60 H0Z" fill="#F26722" fillOpacity="0.10" />
        </svg>
      </div>
    </section>
  );
}
