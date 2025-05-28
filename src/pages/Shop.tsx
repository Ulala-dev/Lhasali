// src/pages/Shop.tsx
import React, { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { ShoppingCart, Heart, Filter, X, Share2, ChevronLeft, ChevronRight, Search, ChevronDown } from "lucide-react";
import { Price } from "@/components/ui/price";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSearchParams, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ProductSpecifications {
    [key: string]: string;
}

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    description: string;
    specifications: ProductSpecifications;
    colors: string[];
    sizes: string[];
    images: string[];
}

interface CartItem extends Product {
    quantity: number;
    selectedColor: number;
    selectedSize: string;
}

const allCategories = [
    "Jacket",
    "Trousers",
    "T-shirt",
    "Hat",
    "Sleepingbag",
    "Sleeping liner",
    "Tent",
    "Airmat",
    "Air pillow",
    "Shoe",
    "Sandle",
    "Gloves",
    "Socks",
    "Aquatap",
    "Tharmus",
    "Bottle",
    "Bag",
    "Headlight",
    "Stick",
    "Camping chair",
    "Hammock",
    "Swiss knife",
    "Thermals",
    "Raincoat",
    "Punching",
    "Towel",
    "Buffer"
];

const popularCategories = ["Jacket", "Bag", "T-shirt", "Bottle"];

const products: Product[] = [
    {
        id: 1,
        name: "Red Trekking Backpack",
        price: 129.99,
        image: "/bag1.jpg",
        category: "Bag",
        description: "A durable and spacious trekking backpack perfect for your mountain adventures. Features multiple compartments, water-resistant material, and ergonomic design.",
        specifications: {
            capacity: "40L",
            material: "Nylon",
            weight: "1.2kg",
            dimensions: "60x30x25cm"
        },
        colors: ["#8B3A3A", "#F5C16C", "#2D2D2D"],
        sizes: ["S", "M", "L"],
        images: ["/bag1.jpg", "/bag2.jpg", "/bag3.jpg"]
    },
    {
        id: 2,
        name: "Blue Jacket",
        price: 49.99,
        image: "/jacket1.jpg",
        category: "Jacket",
        description: "A lightweight, water-resistant jacket perfect for mountain treks. Features adjustable hood, multiple pockets, and breathable fabric.",
        specifications: {
            material: "Polyester",
            weight: "0.8kg",
            waterproof: "Yes",
            pockets: "4"
        },
        colors: ["#E0B0FF", "#F5C16C"],
        sizes: ["S", "M", "L", "XL"],
        images: ["/jacket1.jpg", "/jacket2.jpg", "/jacket3.jpg"]
    },
    {
        id: 3,
        name: "Hello x-way Bottle",
        price: 34.99,
        image: "bottle1.jpg",
        category: "Bottle",
        description: "Insulated water bottle that keeps your drinks cold for 24 hours or hot for 12 hours. Perfect for long treks.",
        specifications: {
            capacity: "750ml",
            material: "Stainless Steel",
            insulation: "Double-walled",
            lid: "Screw-top"
        },
        colors: ["#2D2D2D", "#B87333"],
        sizes: ["One Size"],
        images: ["bottle1.jpg", "bottle2.jpg", "bottle3.jpg"]
    },
    {
        id: 4,
        name: "Lhasali Handbag",
        price: 29.99,
        image: "/bag2.jpg",
        category: "Bag",
        description: "Elegant handbag crafted from premium materials. Perfect for both casual and formal occasions.",
        specifications: {
            material: "Leather",
            weight: "0.5kg",
            compartments: "3",
            closure: "Zipper"
        },
        colors: ["#8B3A3A", "#2D2D2D"],
        sizes: ["One Size"],
        images: ["/bag2.jpg", "/bag3.jpg", "/bag4.jpg"]
    },
    {
        id: 5,
        name: "Red Trekking Stick",
        price: 159.99,
        image: "/stick1.jpg",
        category: "Stick",
        description: "Professional trekking pole with adjustable height and comfortable grip. Perfect for mountain treks.",
        specifications: {
            material: "Aluminum",
            weight: "0.3kg",
            adjustable: "Yes",
            sections: "3"
        },
        colors: ["#2D2D2D", "#B87333"],
        sizes: ["One Size"],
        images: ["/stick1.jpg", "/stick2.jpg", "/stick3.jpg"]
    },
    {
        id: 6,
        name: "Black and White Jacket",
        price: 179.99,
        image: "/jacket2.jpg",
        category: "Jacket",
        description: "Stylish and functional jacket with modern design. Features water-resistant material and multiple pockets.",
        specifications: {
            material: "Nylon",
            weight: "0.9kg",
            waterproof: "Yes",
            pockets: "5"
        },
        colors: ["#2D2D2D", "#FFFFFF"],
        sizes: ["S", "M", "L", "XL"],
        images: ["/jacket2.jpg", "/jacket3.jpg", "/jacket4.jpg"]
    },
    {
        id: 7,
        name: "Pink Dodge Bottle",
        price: 34.99,
        image: "bottle2.jpg",
        category: "Bottle",
        description: "Vibrant pink water bottle with double-wall insulation. Keeps drinks cold for 24 hours.",
        specifications: {
            capacity: "500ml",
            material: "Stainless Steel",
            insulation: "Double-walled",
            lid: "Flip-top"
        },
        colors: ["#FF69B4", "#2D2D2D"],
        sizes: ["One Size"],
        images: ["bottle2.jpg", "bottle3.jpg", "bottle4.jpg"]
    }
];

export default function Shop() {
    const [viewMode, setViewMode] = useState("grid");
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
    const [showAllCategories, setShowAllCategories] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [sortBy, setSortBy] = useState("newest");
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    useEffect(() => {
        const searchParam = searchParams.get("search");
        const categoryParam = searchParams.get("category");

        if (searchParam) {
            setSearchQuery(searchParam);
        }

        if (categoryParam) {
            setSelectedCategory(categoryParam);
            setShowAllCategories(true);

            // Scroll to products section after a short delay to ensure DOM is ready
            setTimeout(() => {
                const productsSection = document.querySelector('.products-section');
                if (productsSection) {
                    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                    const elementPosition = productsSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }, 100);
        }
    }, [searchParams]);

    // Example badges and color swatches for demo
    const productColors = {
        1: ["#8B3A3A", "#F5C16C", "#2D2D2D"],
        2: ["#E0B0FF", "#F5C16C"],
        5: ["#2D2D2D", "#B87333"]
    };

    const handleAddToCart = (product: Product) => {
        const newItem: CartItem = {
            ...product,
            quantity: 1,
            selectedColor: 0,
            selectedSize: product.sizes[0]
        };
        // addToCart(newItem);
        setSelectedProduct(null);
    };

    const handleAddToFavorites = (product: Product) => {
        // addToFavorites(product);
    };

    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
        const matchesSearch = searchQuery === "" ||
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortBy) {
            case "price-low":
                return a.price - b.price;
            case "price-high":
                return b.price - a.price;
            case "latest":
            default:
                return b.id - a.id;
        }
    });

    const displayedCategories = showAllCategories ? allCategories : popularCategories;

    const handlePreviousImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedProduct) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? selectedProduct.images.length - 1 : prev - 1
            );
        }
    };

    const handleNextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedProduct) {
            setCurrentImageIndex((prev) =>
                prev === selectedProduct.images.length - 1 ? 0 : prev + 1
            );
        }
    };

    const handleThumbnailClick = (index: number, e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex(index);
    };

    // Reset current image index when a new product is selected
    useEffect(() => {
        if (selectedProduct) {
            setCurrentImageIndex(0);
        }
    }, [selectedProduct]);

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-24 flex flex-col items-center justify-center">
                {/* Product Filters and Search */}
                <section className="py-8 border-b bg-white/80 backdrop-blur-sm">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
                            <div className="w-full md:w-80">
                                <div className="relative">
                                    <Input
                                        placeholder="Search products..."
                                        className="w-full rounded-full border-2 border-himalaya-maroon/20 shadow-sm focus:border-himalaya-maroon focus:ring-himalaya-maroon/30 px-5 py-3 text-base"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-himalaya-maroon/60 pointer-events-none">
                                        <Search className="h-5 w-5" />
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 w-full md:w-auto">
                                <div className="flex gap-2 items-center">
                                    <Filter className="h-5 w-5 text-himalaya-maroon/70" />
                                    <span className="text-himalaya-maroon font-semibold">Filter:</span>
                                </div>
                                <div className="relative">
                                    <select className="rounded-full border-2 border-himalaya-maroon/20 bg-white px-5 py-2 shadow-sm text-base focus:border-himalaya-maroon focus:ring-himalaya-maroon/30 appearance-none pr-10">
                                        <option>All Categories</option>
                                        {allCategories.map(category => (
                                            <option key={category}>{category}</option>
                                        ))}
                                    </select>
                                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-himalaya-maroon/60">
                                        <ChevronDown className="h-4 w-4" />
                                    </span>
                                </div>

                                <div className="relative">
                                    <select
                                        className="rounded-full border-2 border-himalaya-maroon/20 bg-white px-5 py-2 shadow-sm text-base focus:border-himalaya-maroon focus:ring-himalaya-maroon/30 appearance-none pr-10"
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                    >
                                        <option value="latest">Sort by: Latest</option>
                                        <option value="price-low">Price: Low to High</option>
                                        <option value="price-high">Price: High to Low</option>
                                    </select>
                                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-himalaya-maroon/60">
                                        <ChevronDown className="h-4 w-4" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Category Badges */}
                <section className="py-6">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap gap-3 justify-center">
                            <button
                                onClick={() => setSelectedCategory("All")}
                                className={`px-5 py-2 rounded-full border text-sm font-semibold transition-all duration-200
                                    ${selectedCategory === "All"
                                        ? "bg-himalaya-maroon text-white border-himalaya-maroon shadow"
                                        : "bg-white text-himalaya-maroon border-himalaya-maroon/30 hover:bg-himalaya-maroon/10"}
                                `}
                            >
                                All
                            </button>
                            {displayedCategories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-5 py-2 rounded-full border text-sm font-semibold transition-all duration-200
                                    ${selectedCategory === category
                                            ? "bg-himalaya-maroon text-white border-himalaya-maroon shadow"
                                            : "bg-white text-himalaya-maroon border-himalaya-maroon/30 hover:bg-himalaya-maroon/10"}
                                `}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                        {!showAllCategories && (
                            <div className="text-center mt-4">
                                <button
                                    onClick={() => setShowAllCategories(true)}
                                    className="text-himalaya-maroon hover:text-himalaya-orange text-sm font-medium"
                                >
                                    Show All Categories
                                </button>
                            </div>
                        )}
                    </div>
                </section>

                {/* Products Grid */}
                <section className="py-12 products-section">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {sortedProducts.map(product => (
                                <div
                                    key={product.id}
                                    className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-himalaya-maroon/30 group cursor-pointer"
                                    onClick={() => setSelectedProduct(product)}
                                >
                                    <div className="aspect-square overflow-hidden relative">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <span className="text-sm text-gray-500">{product.category}</span>
                                        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                                        {/* Color Swatches */}
                                        {productColors[product.id] && (
                                            <div className="flex gap-2 mb-2">
                                                {productColors[product.id].map((color, idx) => (
                                                    <span
                                                        key={color + idx}
                                                        className="w-4 h-4 rounded-full border border-gray-300"
                                                        style={{ backgroundColor: color }}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                        <div className="flex justify-between items-center">
                                            <Price
                                                amount={product.price}
                                                originalCurrency="USD"
                                                className="font-bold text-himalaya-maroon"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Product Details Modal */}
                {selectedProduct && (
                    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h2 className="text-2xl font-bold text-himalaya-maroon">{selectedProduct.name}</h2>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setSelectedProduct(null)}
                                    >
                                        <X className="h-5 w-5" />
                                    </Button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Product Images */}
                                    <div className="space-y-4">
                                        <div className="relative aspect-square rounded-lg overflow-hidden">
                                            <img
                                                src={selectedProduct.images[currentImageIndex]}
                                                alt={selectedProduct.name}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-between p-4">
                                                <button
                                                    className="bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
                                                    onClick={handlePreviousImage}
                                                >
                                                    <ChevronLeft className="h-6 w-6 text-himalaya-maroon" />
                                                </button>
                                                <button
                                                    className="bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
                                                    onClick={handleNextImage}
                                                >
                                                    <ChevronRight className="h-6 w-6 text-himalaya-maroon" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-4 gap-4">
                                            {selectedProduct.images.map((image, index) => (
                                                <div
                                                    key={index}
                                                    className={`aspect-square rounded-lg overflow-hidden cursor-pointer transition-opacity hover:opacity-75 ${index === currentImageIndex ? 'ring-2 ring-himalaya-maroon' : ''
                                                        }`}
                                                    onClick={(e) => handleThumbnailClick(index, e)}
                                                >
                                                    <img
                                                        src={image}
                                                        alt={`${selectedProduct.name} view ${index + 1}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Product Info */}
                                    <div className="space-y-6">
                                        <div>
                                            <Price
                                                amount={selectedProduct.price}
                                                originalCurrency="USD"
                                                className="text-2xl font-semibold text-himalaya-orange"
                                            />
                                        </div>

                                        <p className="text-gray-600">{selectedProduct.description}</p>

                                        {/* Color Display */}
                                        {selectedProduct.colors && (
                                            <div>
                                                <h3 className="font-semibold mb-2">Available Colors</h3>
                                                <div className="flex gap-2">
                                                    {selectedProduct.colors.map((color, index) => (
                                                        <div
                                                            key={color}
                                                            className="w-8 h-8 rounded-full border-2 border-gray-200"
                                                            style={{ backgroundColor: color }}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Size Display */}
                                        {selectedProduct.sizes && (
                                            <div>
                                                <h3 className="font-semibold mb-2">Available Sizes</h3>
                                                <div className="flex gap-2">
                                                    {selectedProduct.sizes.map((size) => (
                                                        <div
                                                            key={size}
                                                            className="px-4 py-2 border border-gray-300 rounded-md bg-gray-50"
                                                        >
                                                            {size}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Specifications */}
                                        <div>
                                            <h3 className="font-semibold mb-2">Specifications</h3>
                                            <div className="space-y-2">
                                                {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                                                    <div key={key} className="flex justify-between py-2 border-b">
                                                        <span className="text-gray-600">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                                                        <span className="font-medium">{value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}