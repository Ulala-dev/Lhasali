// src/pages/Contact.tsx
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow">
                {/* Contact Hero */}
                <div className="h-[80px]"></div> {/* Spacer for fixed header, same color as section below */}
                <section className="bg-himalaya-maroon text-white py-12">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                        <p className="text-xl max-w-3xl">
                            We'd love to hear from you. Reach out with questions, feedback, or partnership opportunities.
                        </p>
                    </div>
                </section>

                {/* Contact Content */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2">
                                <h2 className="text-2xl font-bold text-himalaya-maroon mb-6">Send Us a Message</h2>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Your Name</label>
                                            <Input placeholder="Full name" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Email Address</label>
                                            <Input type="email" placeholder="email@example.com" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Subject</label>
                                        <Input placeholder="How can we help you?" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Your Message</label>
                                        <Textarea
                                            placeholder="Tell us more about your inquiry..."
                                            className="min-h-[150px]"
                                        />
                                    </div>
                                    <Button
                                        className="bg-himalaya-orange hover:bg-himalaya-gold text-white"
                                        size="lg"
                                    >
                                        Send Message
                                    </Button>
                                </form>
                            </div>

                            <div className="lg:col-span-1 bg-himalaya-white p-6 rounded-lg">
                                <h2 className="text-2xl font-bold text-himalaya-maroon mb-6">Contact Information</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <MapPin className="h-6 w-6 text-himalaya-orange flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-medium">Our Location</h3>
                                            <p className="text-gray-600">123 Thamel Street<br />Kathmandu 44600<br />Nepal</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <Phone className="h-6 w-6 text-himalaya-orange flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-medium">Phone</h3>
                                            <p className="text-gray-600">+977 1-4123456</p>
                                            <p className="text-gray-600">+977 9812345678</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <Mail className="h-6 w-6 text-himalaya-orange flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-medium">Email</h3>
                                            <p className="text-gray-600">info@lhasaligear.com</p>
                                            <p className="text-gray-600">support@lhasaligear.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <Clock className="h-6 w-6 text-himalaya-orange flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-medium">Business Hours</h3>
                                            <p className="text-gray-600">Monday - Friday: 9am to 6pm</p>
                                            <p className="text-gray-600">Saturday: 10am to 4pm</p>
                                            <p className="text-gray-600">Sunday: Closed</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <h3 className="font-medium mb-4">Find Us On Map</h3>
                                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                                        <img
                                            src="https://maps.googleapis.com/maps/api/staticmap?center=Thamel,Kathmandu&zoom=15&size=600x300&maptype=roadmap&markers=color:red%7CThamel,Kathmandu&key=YOUR_GOOGLE_MAPS_API_KEY"
                                            alt="Map of our location"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}