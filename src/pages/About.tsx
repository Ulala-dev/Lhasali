// src/pages/About.tsx
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

export default function About() {
    return (
        <div className="min-h-screen flex flex-col ">
            <Header />

            <main className="flex-grow ">
                {/* Hero Section */}
                <div className="h-[80px]"></div> {/* Spacer for fixed header, same color as section below */}

                <section className="bg-himalaya-maroon text-white py-20">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
                        <p className="text-xl max-w-3xl">
                            Discover the journey and passion behind Lhasali Gear - bringing authentic
                            Himalayan craftsmanship to adventurers worldwide.
                        </p>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-himalaya-maroon mb-6">Our Mission</h2>
                                <p className="text-gray-700 mb-4">
                                    Founded in 2015 by a team of passionate trekkers and local artisans,
                                    Lhasali Gear bridges the gap between ancient Himalayan craftsmanship and
                                    modern adventure needs. Our journey began in the small villages of Nepal,
                                    where generations of skilled craftspeople have perfected their art.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    We believe in preserving cultural heritage while creating sustainable
                                    livelihoods. Every product tells a story of tradition, resilience, and
                                    the breathtaking beauty of the Himalayas.
                                </p>
                                <Button className="bg-himalaya-orange hover:bg-himalaya-gold text-white mt-4">
                                    Learn About Our Values
                                </Button>
                            </div>
                            <div className="rounded-lg overflow-hidden shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1518002171953-a080ee817e1f"
                                    alt="Himalayan craftsmen"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-16 bg-himalaya-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-himalaya-maroon mb-12 text-center">
                            Meet Our Team
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    name: "Tenzing Sherpa",
                                    role: "Founder & CEO",
                                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                                },
                                {
                                    name: "Maya Gurung",
                                    role: "Head of Design",
                                    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
                                },
                                {
                                    name: "Kiran Tamang",
                                    role: "Lead Artisan",
                                    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
                                }
                            ].map((member, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                                        <p className="text-himalaya-orange">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}