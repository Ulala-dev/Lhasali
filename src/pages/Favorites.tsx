import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Price } from "@/components/ui/price";
import { Heart, ShoppingCart } from "lucide-react";

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
}

export default function Favorites() {
    // This would typically come from a global state management solution
    const [favorites, setFavorites] = React.useState<Product[]>([]);

    const handleRemoveFromFavorites = (productId: number) => {
        setFavorites(prev => prev.filter(product => product.id !== productId));
    };

    const handleAddToCart = (product: Product) => {
        // This would typically add the product to the cart state
        console.log('Adding to cart:', product);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold text-himalaya-maroon mb-8">Favorites</h1>

                    {favorites.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-600 mb-4">Your favorites list is empty</p>
                            <Button
                                className="bg-himalaya-maroon hover:bg-himalaya-maroon/90"
                                onClick={() => window.location.href = '/shop'}
                            >
                                Browse Products
                            </Button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {favorites.map(product => (
                                <div
                                    key={product.id}
                                    className="bg-white rounded-lg overflow-hidden shadow-md"
                                >
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
                                            onClick={() => handleRemoveFromFavorites(product.id)}
                                        >
                                            <Heart className="h-5 w-5 fill-himalaya-maroon" />
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
                                            <Button
                                                size="sm"
                                                className="bg-himalaya-maroon hover:bg-himalaya-maroon/90"
                                                onClick={() => handleAddToCart(product)}
                                            >
                                                <ShoppingCart className="h-4 w-4 mr-2" />
                                                Add to Cart
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
} 