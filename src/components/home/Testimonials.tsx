
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

export default function Testimonials() {
  return (
    <section className="py-16 bg-himalaya-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-himalaya-maroon mb-12 text-center">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-himalaya-orange text-himalaya-orange" 
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <div className="flex flex-col">
                <span className="font-semibold text-himalaya-maroon">
                  {testimonial.name}
                </span>
                <span className="text-gray-500 text-sm">
                  {testimonial.location}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
