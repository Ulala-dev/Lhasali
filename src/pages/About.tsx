// src/pages/About.tsx
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Users, Award, MapPin, Heart } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Section = ({
    title,
    content,
    icon: Icon,
    className = ""
}: {
    title: string;
    content: string;
    icon: any;
    className?: string;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`relative p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl transition-all duration-300 hover:shadow-lg hover:shadow-himalaya-maroon/40 ${className}`}
    >
        <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
                <Icon className="w-8 h-8 text-himalaya-maroon" />
                <h3 className="text-2xl font-bold text-himalaya-maroon">{title}</h3>
            </div>
            <p className="text-gray-700">{content}</p>
        </div>
    </motion.div>
);

const TimelinePoint = ({
    year,
    title,
    description,
    position = "left"
}: {
    year: string;
    title: string;
    description: string;
    position?: "left" | "right";
}) => (
    <div className="grid grid-cols-1 md:grid-cols-9 items-center w-full relative">
        {/* Left milestone (mobile: always show, desktop: left only) */}
        <div className={`md:col-span-4 ${position === "left" ? "flex justify-end" : ""} ${position === "right" ? "hidden md:flex" : ""}`}>
            {(position === "left" || typeof window !== 'undefined' && window.innerWidth < 768) && (
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="inline-block p-3 md:p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-none md:shadow-lg text-left w-full md:w-auto mb-2 md:mb-0"
                >
                    <span className="text-himalaya-orange font-semibold text-base md:text-lg">{year}</span>
                    <h4 className="text-base md:text-xl font-bold text-himalaya-maroon mt-1 md:mt-2">{title}</h4>
                    <p className="text-xs md:text-base text-gray-600 mt-1 md:mt-2">{description}</p>
                </motion.div>
            )}
        </div>
        {/* Timeline dot only (desktop only) */}
        <div className="hidden md:flex col-span-1 flex-col items-center relative z-10">
            <div className="w-6 h-6 bg-himalaya-maroon rounded-full border-4 border-white" />
        </div>
        {/* Right milestone (desktop only) */}
        <div className={`md:col-span-4 ${position === "right" ? "flex justify-start" : "hidden md:flex"}`}>
            {position === "right" && (
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="inline-block p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg text-left w-full md:w-auto"
                >
                    <span className="text-himalaya-orange font-semibold text-lg">{year}</span>
                    <h4 className="text-xl font-bold text-himalaya-maroon mt-2">{title}</h4>
                    <p className="text-base text-gray-600 mt-2">{description}</p>
                </motion.div>
            )}
        </div>
    </div>
);

// Decorative SVGs
const Bird = () => (
    <svg width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-2 top-2 md:left-12 md:top-8 z-20 opacity-80">
        <path d="M2 30C10 10 38 10 46 30" stroke="#F26722" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2" fill="#F26722" />
    </svg>
);

const Cloud = () => (
    <svg width="80" height="32" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-2 top-8 md:right-12 md:top-16 z-10 opacity-60">
        <ellipse cx="20" cy="20" rx="20" ry="12" fill="#F26722" fillOpacity="0.08" />
        <ellipse cx="60" cy="16" rx="18" ry="10" fill="#F26722" fillOpacity="0.10" />
    </svg>
);

export default function About() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

    return (
        <div className="min-h-screen flex flex-col relative">
            {/* Decorative Bird and Cloud */}
            <Bird />
            <Cloud />
            <Header />
            <main className="flex-grow">
                {/* Lhasali Description Section */}
                <section className="w-full bg-himalaya-orange py-8 md:py-10 px-4 md:px-2 pt-24 md:pt-28">
                    <div className="max-w-2xl mx-auto flex flex-col items-center text-center text-white">
                        <div className="mb-4 md:mb-6">
                            <span className="text-2xl md:text-4xl font-bold tracking-widest font-header">LHASALI</span>
                        </div>
                        <div className="mb-4 md:mb-6">
                            <p className="text-sm md:text-lg mb-2">
                                Whether you are skiing on the frosty slopes of a high mountain, traversing a steep road, surfing a wild wave or mountain biking down a forested path, you will be using the best Lhasali product. We develop and test all our products in extreme environments, ensuring safety and quality.<br />
                                LHASALI: AN AGELESS ADVENTURE
                            </p>
                        </div>
                        <div className="mb-4 md:mb-6">
                            <p className="text-sm md:text-lg mb-2">
                                पहाडको उकालि–ओराली, चिसो अनि चिप्लो बाटोहरूमा चिप्लेटी खेल्दैका यात्रा होस् या जंगलको अलौकिक सुन्दरता नियाल्दै गरिने साइकल यात्रा, अति कठिन वातावरणमा पनि तपाईले सुरक्षित, उच्च गुणस्तरीय उत्कृष्ट ल्हासाली उत्पादनहरूको रोमाञ्चक अनुभव गर्नुहुनेछ ।<br />
                                LHASALI: AN AGELESS ADVENTURE
                            </p>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-12 md:py-20 relative bg-himalaya-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl md:text-4xl font-bold text-himalaya-maroon text-center mb-8 md:mb-16">
                            Our Core Values
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                            <Section
                                title="Heritage"
                                content="Rooted in Himalayan traditions, we honor centuries of mountain wisdom in every piece we create."
                                icon={MapPin}
                            />
                            <Section
                                title="Innovation"
                                content="Pushing boundaries with modern technology while respecting traditional craftsmanship."
                                icon={Award}
                            />
                            <Section
                                title="Community"
                                content="Supporting local artisans and building a global community of mountain enthusiasts."
                                icon={Users}
                            />
                            <Section
                                title="Sustainability"
                                content="Committed to preserving the mountains we love through responsible practices."
                                icon={Heart}
                            />
                        </div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="py-12 md:py-20 relative bg-gradient-to-b from-himalaya-white via-himalaya-maroon/10 to-himalaya-orange/10">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl md:text-4xl font-bold text-himalaya-maroon text-center mb-8 md:mb-16">
                            Our Journey
                        </h2>
                        <div className="relative">
                            {/* Timeline vertical line */}
                            <div className="hidden md:block absolute left-1/2 top-0 w-1 h-full -translate-x-1/2 bg-himalaya-maroon/40 z-0" />
                            <div className="flex flex-col gap-8 md:gap-16">
                                {[
                                    {
                                        year: "Mid 2022",
                                        title: "Launch of Lhasali T-Shirt Collection",
                                        description: "We debuted lightweight, high-altitude-ready T-shirts in small batches for local trekkers, friends, and family—combining modern performance fabrics with the spirit of Lhasa."
                                    },
                                    {
                                        year: "Late 2022",
                                        title: "Initial Feedback & Strategic Planning",
                                        description: "Over three months we gathered detailed insights from guides and trekker friends on fit, fabric, and functionality, using their input to map out our expanded product roadmap."
                                    },
                                    {
                                        year: "Early 2023",
                                        title: "Introduction of the Lhasali Trekking Bag",
                                        description: "We rolled out our first trekking pack: a durable, water-resistant design with adjustable straps, rain cover, and multiple capacity options, validating demand for a full gear range."
                                    },
                                    {
                                        year: "Late 2023",
                                        title: "Prototype Testing & Thamel Shop Opening",
                                        description: "Field-testing jackets, sticks, gloves, and inner layers with experienced trekkers led to key refinements, while quietly launching our first retail location in Thamel with limited runs of core items."
                                    },
                                    {
                                        year: "2024",
                                        title: "Production of High-Altitude Performance Gear",
                                        description: "We moved into small-scale manufacturing of insulated down jackets and technical base layers optimized for sub-zero conditions—featuring stronger zippers, enhanced padding, and eco-friendly, weather-resistant materials."
                                    }
                                ].map((item, idx) => (
                                    <div key={item.year} className="relative">
                                        <TimelinePoint
                                            year={item.year}
                                            title={item.title}
                                            description={item.description}
                                            position={typeof window !== 'undefined' && window.innerWidth < 768 ? "left" : idx % 2 === 0 ? "left" : "right"}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Founder Message Section */}
                <section className="py-12 md:py-20 bg-himalaya-white/90">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                        <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
                            <img
                                src="/message.jpeg"
                                alt="Founder's Father'"
                                className="rounded-2xl shadow-lg object-cover w-64 h-80 md:w-80 md:h-96 border-4 border-himalaya-maroon/30"
                            />
                        </div>
                        <div className="w-full md:w-2/3">
                            <h2 className="text-2xl md:text-4xl font-bold text-himalaya-maroon mb-4">A Tribute To Our Founder's Father</h2>
                            <p className="text-gray-800 text-base md:text-lg leading-relaxed bg-white/80 p-6 rounded-xl shadow">
                                My father, Mr. Ram Bahadur Timilsina, earned the affectionate title of "Lhasali Dai" from his friends and peers and "Lhasali Baa" from those younger than him. For many years, his journeys were filled with rugged landscapes and mountain ridges. The trips to his destinations didn't last a day or two but stretched on for months, as he traveled miles from family and friends by foot, mule, train, and yak to reach Lhasa. These journeys were not only about trade but also about building bridges between cultures. I grew up listening to these inspiring stories of my father—and they are simply mesmerizing.<br /><br />
                                Lhasali is more than just a trekking gear brand; it is a tribute to the legacy of the Lhasali traders and my father's enduring spirit. This photograph is a reminder of the journey he undertook, the challenges he faced, and the legacy he built. It recalls the values he spoke of, values that gradually inspired me to introduce the Nepali brand "Lhasali," to build something of our own from Nepal and share it with the world.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}