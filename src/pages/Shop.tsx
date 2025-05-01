// src/pages/Shop.tsx
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { ShoppingCart, Heart, Filter } from "lucide-react";
import { Price } from "@/components/ui/price";

export default function Shop() {
    const [viewMode, setViewMode] = useState("grid");

    const products = [
        {
            id: 1,
            name: "Himalayan Trekking Backpack",
            price: 129.99,
            image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3",
            category: "Bags"
        },
        {
            id: 2,
            name: "Hand-Woven Yak Wool Scarf",
            price: 49.99,
            image: "https://images.unsplash.com/photo-1549989476-69a92fa57c36",
            category: "Accessories"
        },
        {
            id: 3,
            name: "Traditional Nepalese Hat",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1521119989659-a83eee488004",
            category: "Accessories"
        },
        {
            id: 4,
            name: "Handcrafted Leather Journal",
            price: 29.99,
            image: "https://images.unsplash.com/photo-1589998059171-988d887df646",
            category: "Stationery"
        },
        {
            id: 5,
            name: "Mountain Trail Hiking Boots",
            price: 159.99,
            image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
            category: "Footwear"
        },
        {
            id: 6,
            name: "Sherpa-Lined Winter Jacket",
            price: 179.99,
            image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
            category: "Apparel"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow">
                {/* Shop Header */}
                <div className="h-[80px]"></div> {/* Spacer for fixed header, same color as section below */}
                <section className="bg-himalaya-maroon text-white py-12">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-bold mb-4">Shop Our Collection</h1>
                        <p className="text-xl max-w-3xl">
                            Authentic Himalayan craftsmanship. Every piece tells a story.
                        </p>
                    </div>
                </section>

                {/* Product Filters and Search */}
                <section className="py-8 border-b">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="w-full md:w-64">
                                <Input placeholder="Search products..." className="w-full" />
                            </div>

                            <div className="flex items-center gap-4 w-full md:w-auto">
                                <div className="flex gap-2 items-center">
                                    <Filter className="h-5 w-5 text-gray-500" />
                                    <span className="text-gray-700">Filter:</span>
                                </div>
                                <select className="border rounded-md px-3 py-2 bg-white">
                                    <option>All Categories</option>
                                    <option>Bags</option>
                                    <option>Accessories</option>
                                    <option>Apparel</option>
                                    <option>Footwear</option>
                                    <option>Stationery</option>
                                </select>

                                <select className="border rounded-md px-3 py-2 bg-white">
                                    <option>Sort by: Latest</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Popularity</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Products Grid */}
                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {products.map(product => (
                                <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                                    <div className="aspect-square overflow-hidden relative">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            className="absolute top-2 right-2 bg-white/80 text-himalaya-maroon hover:bg-white"
                                        >
                                            <Heart className="h-5 w-5" />
                                        </Button>
                                    </div>
                                    <div className="p-4">
                                        <span className="text-sm text-gray-500">{product.category}</span>
                                        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                                        <div className="flex justify-between items-center">
                                            <Price
                                                amount={product.price}
                                                originalCurrency="USD"
                                                className="font-bold text-himalaya-maroon"
                                            />
                                            <Button size="sm" className="bg-himalaya-orange hover:bg-himalaya-gold">
                                                <ShoppingCart className="h-4 w-4 mr-2" />
                                                Add to Cart
                                            </Button>
                                        </div>
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