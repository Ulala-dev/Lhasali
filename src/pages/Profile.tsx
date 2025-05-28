import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useShop } from "@/contexts/ShopContext";

export default function Profile() {
    const { cart, favorites } = useShop();
    const [activeTab, setActiveTab] = React.useState("profile");

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow py-12 mt-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold text-himalaya-maroon mb-8">My Account</h1>

                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="profile">Profile</TabsTrigger>
                            <TabsTrigger value="orders">Orders</TabsTrigger>
                            <TabsTrigger value="settings">Settings</TabsTrigger>
                        </TabsList>

                        <TabsContent value="profile" className="mt-6">
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            First Name
                                        </label>
                                        <Input placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Last Name
                                        </label>
                                        <Input placeholder="Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Email
                                        </label>
                                        <Input type="email" placeholder="john@example.com" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone
                                        </label>
                                        <Input type="tel" placeholder="+1 (555) 000-0000" />
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <Button className="bg-himalaya-maroon hover:bg-himalaya-maroon/90">
                                        Save Changes
                                    </Button>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="orders" className="mt-6">
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h2 className="text-xl font-semibold mb-4">Order History</h2>
                                {cart.length === 0 ? (
                                    <p className="text-gray-600">No orders found.</p>
                                ) : (
                                    <div className="space-y-4">
                                        {cart.map(item => (
                                            <div
                                                key={item.id}
                                                className="flex items-center gap-4 p-4 border rounded-lg"
                                            >
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-16 h-16 object-cover rounded-md"
                                                />
                                                <div className="flex-grow">
                                                    <h3 className="font-semibold">{item.name}</h3>
                                                    <p className="text-sm text-gray-600">
                                                        Quantity: {item.quantity}
                                                    </p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-semibold">
                                                        ${(item.price * item.quantity).toFixed(2)}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </TabsContent>

                        <TabsContent value="settings" className="mt-6">
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="font-medium mb-2">Change Password</h3>
                                        <div className="space-y-4">
                                            <Input type="password" placeholder="Current Password" />
                                            <Input type="password" placeholder="New Password" />
                                            <Input type="password" placeholder="Confirm New Password" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-2">Preferences</h3>
                                        <div className="space-y-2">
                                            <label className="flex items-center gap-2">
                                                <input type="checkbox" className="rounded" />
                                                <span>Email notifications</span>
                                            </label>
                                            <label className="flex items-center gap-2">
                                                <input type="checkbox" className="rounded" />
                                                <span>Marketing emails</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="pt-4">
                                        <Button className="bg-himalaya-maroon hover:bg-himalaya-maroon/90">
                                            Save Preferences
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
            <Footer />
        </div>
    );
} 