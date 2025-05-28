import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Price } from "@/components/ui/price";
import { Trash2 } from "lucide-react";

interface CartItem {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
    selectedColor: number;
    selectedSize: string;
}

export default function Cart() {
    // This would typically come from a global state management solution
    const [cartItems, setCartItems] = React.useState<CartItem[]>([]);

    const handleRemoveItem = (itemId: number) => {
        setCartItems(prev => prev.filter(item => item.id !== itemId));
    };

    const handleUpdateQuantity = (itemId: number, newQuantity: number) => {
        if (newQuantity < 1) return;
        setCartItems(prev =>
            prev.map(item =>
                item.id === itemId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 10; // Example shipping cost
    const total = subtotal + shipping;

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold text-himalaya-maroon mb-8">Shopping Cart</h1>

                    {cartItems.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-600 mb-4">Your cart is empty</p>
                            <Button
                                className="bg-himalaya-maroon hover:bg-himalaya-maroon/90"
                                onClick={() => window.location.href = '/shop'}
                            >
                                Continue Shopping
                            </Button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Cart Items */}
                            <div className="lg:col-span-2">
                                <div className="space-y-4">
                                    {cartItems.map(item => (
                                        <div
                                            key={item.id}
                                            className="flex gap-4 p-4 bg-white rounded-lg shadow-sm"
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-24 h-24 object-cover rounded-md"
                                            />
                                            <div className="flex-grow">
                                                <h3 className="font-semibold">{item.name}</h3>
                                                <p className="text-sm text-gray-600">
                                                    Size: {item.selectedSize}
                                                </p>
                                                <div className="flex items-center gap-4 mt-2">
                                                    <div className="flex items-center gap-2">
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                                        >
                                                            -
                                                        </Button>
                                                        <span className="w-8 text-center">
                                                            {item.quantity}
                                                        </span>
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                                        >
                                                            +
                                                        </Button>
                                                    </div>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="text-red-500 hover:text-red-600"
                                                        onClick={() => handleRemoveItem(item.id)}
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <Price
                                                    amount={item.price * item.quantity}
                                                    originalCurrency="USD"
                                                    className="font-semibold"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Order Summary */}
                            <div className="lg:col-span-1">
                                <div className="bg-white rounded-lg shadow-sm p-6">
                                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                                    <div className="space-y-2 mb-4">
                                        <div className="flex justify-between">
                                            <span>Subtotal</span>
                                            <Price
                                                amount={subtotal}
                                                originalCurrency="USD"
                                            />
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Shipping</span>
                                            <Price
                                                amount={shipping}
                                                originalCurrency="USD"
                                            />
                                        </div>
                                        <div className="border-t pt-2 mt-2">
                                            <div className="flex justify-between font-semibold">
                                                <span>Total</span>
                                                <Price
                                                    amount={total}
                                                    originalCurrency="USD"
                                                    className="text-himalaya-maroon"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <Button className="w-full bg-himalaya-maroon hover:bg-himalaya-maroon/90">
                                        Proceed to Checkout
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
} 