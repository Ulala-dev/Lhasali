
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I know if the gear will handle extreme conditions?",
    answer: "Every piece is field-tested in the Himalayas by local guides and experienced trekkers. We provide detailed performance ratings and real-world testing scenarios for each product."
  },
  {
    question: "What if the sizes don't fit me correctly?",
    answer: "We offer detailed size guides with international conversions. If you're still unsure, our expert team can help you find the perfect fit, and we offer hassle-free returns if needed."
  },
  {
    question: "Is international shipping reliable?",
    answer: "We partner with premium courier services and provide full tracking. Each package is carefully packed to withstand international transit, and we guarantee safe delivery or full refund."
  },
  {
    question: "How authentic are these products?",
    answer: "Each item comes with details about its origin, the craftspeople who made it, and the traditional techniques used. We work directly with local artisans to ensure authenticity."
  }
];

export default function FAQ() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-himalaya-maroon mb-8 text-center">
          FAQs
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-himalaya-maroon hover:text-himalaya-orange">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
