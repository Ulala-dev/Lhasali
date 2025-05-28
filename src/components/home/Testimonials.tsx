import React from "react";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "USA",
    text: "The quality of these Himalayan products exceeded my expectations. Perfect for my Everest Base Camp trek!",
    rating: 5
  },
  {
    name: "Michael Chen",
    location: "Singapore",
    text: "Authentic Nepali craftsmanship with modern functionality. Worth every penny.",
    rating: 5
  },
  {
    name: "Emma Watson",
    location: "UK",
    text: "These products aren't just beautiful - they're incredibly durable and practical for serious trekking.",
    rating: 5
  }
];

const bubbleStyles = `
@keyframes bubble-in {
  0% { opacity: 0; transform: translateY(30px) scale(0.95); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}
.speech-bubble-modern {
  position: relative;
  background: linear-gradient(135deg, #8B3A3A 85%, #F26722 100%);
  color: #fff;
  border-radius: 1.5rem;
  padding: 2rem 1.5rem 2.5rem 1.5rem;
  box-shadow: 0 4px 32px 0 rgba(242,103,34,0.13), 0 2px 8px 0 rgba(90,18,18,0.10);
  border: 2px solid #F6C16C;
  animation: bubble-in 0.7s cubic-bezier(.23,1.01,.32,1) both;
  will-change: transform, box-shadow, border-color;
  transition: box-shadow 0.3s, border-color 0.3s, transform 0.2s, background 0.3s;
  overflow: hidden;
}
.speech-bubble-modern:after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -18px;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border: 14px solid transparent;
  border-top: 18px solid #8B3A3A;
  filter: drop-shadow(0 2px 0 rgba(242,103,34,0.10));
}
.speech-bubble-modern .quote-bg {
  position: absolute;
  top: 16px;
  right: 24px;
  font-size: 5rem;
  color: rgba(246,193,108,0.08);
  pointer-events: none;
  z-index: 0;
}
.speech-bubble-modern:hover {
  box-shadow: 0 12px 48px 0 rgba(246,193,108,0.25), 0 8px 24px 0 rgba(90,18,18,0.18);
  border-color: #F26722;
  background: linear-gradient(120deg, #8B3A3A 60%, #F26722 100%);
  transform: scale(1.08) translateY(-10px) rotate(-2deg);
}
`;

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <style dangerouslySetInnerHTML={{ __html: bubbleStyles }} />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-himalaya-maroon mb-12 text-center">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="speech-bubble-modern transition-transform duration-300 ease-in-out"
            >
              <span className="quote-bg">“</span>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-himalaya-orange text-himalaya-orange"
                  />
                ))}
              </div>
              <p className="mb-4 text-lg font-medium">{testimonial.text}</p>
              <div className="flex flex-col">
                <span className="font-bold text-himalaya-gold text-lg">
                  {testimonial.name}
                </span>
                <span className="text-himalaya-gold text-sm">
                  {testimonial.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
