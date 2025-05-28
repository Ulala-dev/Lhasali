import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Share2, ChevronLeft } from "lucide-react";

// Mock product data - this would typically come from an API
const products = [
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
    // Add more products as needed
];

export default function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedColor, setSelectedColor] = useState(0);
    const [selectedSize, setSelectedSize] = useState("");
    const [quantity, setQuantity] = useState(1);

    const product = products.find(p => p.id === Number(id));

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-himalaya-maroon mb-4">Product Not Found</h1>
                        <Button onClick={() => navigate("/shop")}>Return to Shop</Button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <div className="container mx-auto px-4 py-8">
                    {/* Back Button */}
                    <Button
                        variant="ghost"
                        className="mb-6"
                        onClick={() => navigate("/shop")}
                    >
                        <ChevronLeft className="w-4 h-4 mr-2" />
                        Back to Shop
                    </Button>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Product Images */}
                        <div className="space-y-4">
                            <div className="aspect-square rounded-lg overflow-hidden">
                                <img
                                    src={product.images[0]}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                {product.images.map((image, index) => (
                                    <div
                                        key={index}
                                        className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-75"
                                    >
                                        <img
                                            src={image}
                                            alt={`${product.name} view ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-6">
                            <div>
                                <h1 className="text-3xl font-bold text-himalaya-maroon">{product.name}</h1>
                                <p className="text-2xl font-semibold text-himalaya-orange mt-2">
                                    ${product.price.toFixed(2)}
                                </p>
                            </div>

                            <p className="text-gray-600">{product.description}</p>

                            {/* Color Selection */}
                            {product.colors && (
                                <div>
                                    <h3 className="font-semibold mb-2">Color</h3>
                                    <div className="flex gap-2">
                                        {product.colors.map((color, index) => (
                                            <button
                                                key={color}
                                                className={`w-8 h-8 rounded-full border-2 ${selectedColor === index
                                                    ? "border-himalaya-maroon"
                                                    : "border-transparent"
                                                    }`}
                                                style={{ backgroundColor: color }}
                                                onClick={() => setSelectedColor(index)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Size Selection */}
                            {product.sizes && (
                                <div>
                                    <h3 className="font-semibold mb-2">Size</h3>
                                    <div className="flex gap-2">
                                        {product.sizes.map((size) => (
                                            <button
                                                key={size}
                                                className={`px-4 py-2 border rounded-md ${selectedSize === size
                                                    ? "border-himalaya-maroon bg-himalaya-maroon text-white"
                                                    : "border-gray-300 hover:border-himalaya-maroon"
                                                    }`}
                                                onClick={() => setSelectedSize(size)}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Quantity */}
                            <div>
                                <h3 className="font-semibold mb-2">Quantity</h3>
                                <div className="flex items-center gap-4">
                                    <Button
                                        variant="outline"
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    >
                                        -
                                    </Button>
                                    <span className="w-12 text-center">{quantity}</span>
                                    <Button
                                        variant="outline"
                                        onClick={() => setQuantity(quantity + 1)}
                                    >
                                        +
                                    </Button>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4">
                                <Button className="flex-1 bg-himalaya-maroon hover:bg-himalaya-maroon/90">
                                    <ShoppingCart className="w-4 h-4 mr-2" />
                                    Add to Cart
                                </Button>
                                <Button variant="outline">
                                    <Heart className="w-4 h-4" />
                                </Button>
                                <Button variant="outline">
                                    <Share2 className="w-4 h-4" />
                                </Button>
                            </div>

                            {/* Specifications */}
                            <div className="border-t pt-6">
                                <h3 className="font-semibold mb-4">Specifications</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {Object.entries(product.specifications).map(([key, value]) => (
                                        <div key={key}>
                                            <span className="text-gray-600 capitalize">{key}:</span>
                                            <span className="ml-2 font-medium">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
} 