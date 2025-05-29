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
        {/* Left milestone */}
        <div className={`md:col-span-4 ${position === "left" ? "flex justify-end" : ""}`}>
            {position === "left" && (
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="inline-block p-4 md:p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg text-right w-full md:w-auto"
                >
                    <span className="text-himalaya-orange font-semibold">{year}</span>
                    <h4 className="text-lg md:text-xl font-bold text-himalaya-maroon mt-2">{title}</h4>
                    <p className="text-sm md:text-base text-gray-600 mt-2">{description}</p>
                </motion.div>
            )}
        </div>
        {/* Timeline dot only */}
        <div className="hidden md:flex col-span-1 flex-col items-center relative z-10">
            <div className="w-6 h-6 bg-himalaya-maroon rounded-full border-4 border-white" />
        </div>
        {/* Right milestone */}
        <div className={`md:col-span-4 ${position === "right" ? "flex justify-start" : ""}`}>
            {position === "right" && (
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="inline-block p-4 md:p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg text-left w-full md:w-auto"
                >
                    <span className="text-himalaya-orange font-semibold">{year}</span>
                    <h4 className="text-lg md:text-xl font-bold text-himalaya-maroon mt-2">{title}</h4>
                    <p className="text-sm md:text-base text-gray-600 mt-2">{description}</p>
                </motion.div>
            )}
        </div>
    </div>
);

export default function About() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

    return (
        <div className="min-h-screen flex flex-col">
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
                                        year: "2015",
                                        title: "The Beginning",
                                        description: "Founded in the heart of the Himalayas, we started with a simple mission: to create gear that honors mountain traditions."
                                    },
                                    {
                                        year: "2018",
                                        title: "Expanding Horizons",
                                        description: "Launched our first international collection, bringing Himalayan craftsmanship to the world."
                                    },
                                    {
                                        year: "2020",
                                        title: "Innovation Hub",
                                        description: "Established our research center to blend traditional techniques with modern technology."
                                    },
                                    {
                                        year: "2023",
                                        title: "Global Community",
                                        description: "Built a worldwide network of mountain enthusiasts and local artisans."
                                    }
                                ].map((item, idx) => (
                                    <div key={item.year} className="relative">
                                        {/* Mobile timeline dot */}
                                        <div className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-himalaya-maroon rounded-full border-4 border-white z-10" />
                                        <TimelinePoint
                                            year={item.year}
                                            title={item.title}
                                            description={item.description}
                                            position={idx % 2 === 0 ? "left" : "right"}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}