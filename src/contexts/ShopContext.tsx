import React, { createContext, useContext, useState } from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    description: string;
    specifications: Record<string, string>;
    colors: string[];
    sizes: string[];
    images: string[];
}

interface CartItem extends Product {
    quantity: number;
    selectedColor: number;
    selectedSize: string;
}

interface ShopContextType {
    cart: CartItem[];
    favorites: Product[];
    addToCart: (product: Product, quantity: number, selectedColor: number, selectedSize: string) => void;
    removeFromCart: (productId: number) => void;
    updateCartItemQuantity: (productId: number, quantity: number) => void;
    addToFavorites: (product: Product) => void;
    removeFromFavorites: (productId: number) => void;
    isInFavorites: (productId: number) => boolean;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export function ShopProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [favorites, setFavorites] = useState<Product[]>([]);

    const addToCart = (product: Product, quantity: number, selectedColor: number, selectedSize: string) => {
        setCart(prev => {
            const existingItem = prev.find(item =>
                item.id === product.id &&
                item.selectedColor === selectedColor &&
                item.selectedSize === selectedSize
            );

            if (existingItem) {
                return prev.map(item =>
                    item.id === product.id &&
                        item.selectedColor === selectedColor &&
                        item.selectedSize === selectedSize
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }

            return [...prev, { ...product, quantity, selectedColor, selectedSize }];
        });
    };

    const removeFromCart = (productId: number) => {
        setCart(prev => prev.filter(item => item.id !== productId));
    };

    const updateCartItemQuantity = (productId: number, quantity: number) => {
        if (quantity < 1) return;
        setCart(prev =>
            prev.map(item =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    const addToFavorites = (product: Product) => {
        setFavorites(prev => {
            if (prev.some(p => p.id === product.id)) {
                return prev;
            }
            return [...prev, product];
        });
    };

    const removeFromFavorites = (productId: number) => {
        setFavorites(prev => prev.filter(product => product.id !== productId));
    };

    const isInFavorites = (productId: number) => {
        return favorites.some(product => product.id === productId);
    };

    return (
        <ShopContext.Provider value={{
            cart,
            favorites,
            addToCart,
            removeFromCart,
            updateCartItemQuantity,
            addToFavorites,
            removeFromFavorites,
            isInFavorites
        }}>
            {children}
        </ShopContext.Provider>
    );
}

export function useShop() {
    const context = useContext(ShopContext);
    if (context === undefined) {
        throw new Error('useShop must be used within a ShopProvider');
    }
    return context;
} 