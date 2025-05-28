import React from "react";

const partners = [
    {
        name: "Onepolar",
        logo: "/onepolar.png",
    },
    {
        name: "Neeko",
        logo: "/neeko.png",
    },
    {
        name: "AI ONE",
        logo: "/aione.png",
    },
    {
        name: "Naturehike",
        logo: "/naturehike.png",
    },
];

export default function BrandPartners() {
    return (
        <section className="w-full bg-himalaya-maroon py-10 px-2 relative">
            {/* Full-width orange bar at the bottom */}
            <div className="absolute left-0 right-0 bottom-0 w-full bg-himalaya-orange py-2 text-center z-10">
                <span className="text-white font-bold text-lg tracking-wide">AN AGELESS ADVENTURE</span>
            </div>
            <div className="max-w-4xl mx-auto flex flex-col items-center relative z-20">
                {/* Licensed Distributors Text */}
                <h2 className="text-white text-lg md:text-xl font-semibold mb-6 tracking-wide uppercase">Licensed Distributors Of</h2>
                {/* Partner Logos */}
                <div className="flex flex-wrap justify-center gap-6 mb-8">
                    {partners.map((brand) => (
                        <div
                            key={brand.name}
                            className="bg-white rounded-md shadow p-4 flex items-center justify-center min-w-[110px] min-h-[110px] w-[110px] h-[110px]"
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    ))}
                </div>
                {/* Lhasali Logo and Slogan */}
                <div className="flex flex-col items-center mb-2">
                    <div className="flex items-center gap-4 mb-2">
                        <span className="text-white text-4xl md:text-5xl font-black tracking-[0.2em] uppercase font-display bg-gradient-to-r from-himalaya-gold via-white to-himalaya-gold bg-clip-text text-transparent drop-shadow-lg">LHASALI</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-white text-xl font-header">ལྷ་ས་ལི་</span>
                        <span className="text-white text-xl font-header">ल्हासाली</span>
                    </div>
                </div>
            </div>
        </section>
    );
} 