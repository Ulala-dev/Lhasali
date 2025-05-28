import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { mountainTheme } from "@/components/mountain/theme";

const faqs = [
  {
    question: "What does “Lhasali” mean?",
    answer: "It's the name locals gave to the traders who once hauled salt, wool and stories between Kathmandu and Lhasa. Their grit and fellowship inspire everything we build today."
  },
  {
    question: "Where is your gear made?",
    answer: "We design every product in-house and partner with audited factories in China that specialise in technical packs and outerwear."
  },
  {
    question: "Which trekking bag is right for my trip?",
    answer: "• 30 L Yaklet – weekend peaks or carry-on only travel\n• 45 L High-Pass – 3- to 5-day treks with hostel or hut stops\n• 60 L Caravan – week-long expeditions or gear-heavy journeys\nWhen in doubt, size up—compression straps tame extra volume."
  },
  {
    question: "Are the packs waterproof?",
    answer: "The fabrics are PU-coated and seam-bound to shrug off heavy rain. Submersion will eventually let water in, so keep electronics in a dry sack."
  },
  {
    question: "What's your warranty?",
    answer: "We stand behind every stitch. If workmanship or materials fail within a year of purchase, we'll repair or replace the item—your call."
  },
  {
    question: "What's your return policy?",
    answer: "Unused gear in original packaging can be returned within 30 days for a full refund. Try it indoors, keep the tags on, and you're covered."
  },
  {
    question: "How do I care for my bag?",
    answer: "After muddy adventures, rinse with cool water, scrub gently with a soft brush, air-dry away from direct sun, and store uncompressed. Skip the washing machine and detergents—they break down coatings."
  },
  {
    question: "How is Lhasali gear sustainable?",
    answer: "We use bluesign-approved fabrics, recycled webbing, solvent-free coatings and minimal packaging. Durable design means fewer replacements and less waste over time."
  },
  {
    question: "How can I reach you?",
    answer: "Drop us a line at lhasaligear@gmail.com or send us a message below(contact section). We respond within one business day, usually sooner."
  }
];

const MountainPeak = ({ className = "", color = mountainTheme.colors.earth.DEFAULT }) => (
  <svg
    className={className}
    viewBox="0 0 40 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "block" }}
  >
    <path
      d="M0 16 L10 6 L16 12 L22 4 L28 10 L40 0 L40 16 Z"
      fill={color}
    />
  </svg>
);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-himalaya-maroon mb-8 text-center">
          FAQs
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <Accordion type="single" collapsible onValueChange={val => {
            if (val) {
              const idx = parseInt((val as string).replace("item-", ""), 10);
              setOpenIndex(idx);
            } else {
              setOpenIndex(null);
            }
          }}>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <div className="relative bg-white rounded-xl shadow-md p-6 transition-all duration-300">
                  {/* Animated mountain peak above question when open */}
                  <div
                    className={`flex justify-center transition-all duration-500 ease-in-out overflow-visible h-0 ${openIndex === index ? "opacity-100 translate-y-0 h-6" : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                  >
                    <MountainPeak className="w-10 h-4" color={mountainTheme.colors.earth.DEFAULT} />
                  </div>
                  <AccordionTrigger className="text-left text-himalaya-maroon hover:text-himalaya-orange text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 mt-2">
                    {faq.answer}
                  </AccordionContent>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
