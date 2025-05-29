// src/pages/Contact.tsx
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, X, Facebook, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Contact() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
    const [showPopup, setShowPopup] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch("https://formspree.io/f/myzwrzvy", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setShowPopup(true);
                e.currentTarget.reset();
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="py-12 bg-white text-center mt-28">
                    <h1 className="text-5xl md:text-6xl font-bold text-himalaya-maroon mb-2">
                        Get in Touch
                    </h1>
                    <div className="mx-auto w-24 h-1 bg-himalaya-orange rounded-full mb-6" />
                    <p className="text-lg text-himalaya-maroon/80 max-w-2xl mx-auto">
                        We'd love to hear from you. Reach out with questions, feedback, or partnership opportunities.
                    </p>
                </section>

                {/* Contact Content */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Contact Form */}
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h2 className="text-2xl font-bold text-himalaya-maroon mb-6">Get in Touch</h2>
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6 bg-white rounded-2xl shadow-xl border border-himalaya-maroon/10 p-8"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Your Name</label>
                                            <Input
                                                type="text"
                                                name="name"
                                                placeholder="Full name"
                                                required
                                                className="rounded-lg border-himalaya-maroon/20 focus:border-himalaya-orange focus:ring-2 focus:ring-himalaya-orange/30 px-4 py-3 text-base mb-2"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Email Address</label>
                                            <Input
                                                type="email"
                                                name="email"
                                                placeholder="email@example.com"
                                                required
                                                className="rounded-lg border-himalaya-maroon/20 focus:border-himalaya-orange focus:ring-2 focus:ring-himalaya-orange/30 px-4 py-3 text-base mb-2"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Phone Number</label>
                                            <Input
                                                type="tel"
                                                name="phone"
                                                placeholder="+977 1234567890"
                                                pattern="[0-9+\s-]+"
                                                title="Please enter a valid phone number"
                                                className="rounded-lg border-himalaya-maroon/20 focus:border-himalaya-orange focus:ring-2 focus:ring-himalaya-orange/30 px-4 py-3 text-base mb-2"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Subject</label>
                                            <Input
                                                type="text"
                                                name="subject"
                                                placeholder="How can we help you?"
                                                required
                                                className="rounded-lg border-himalaya-maroon/20 focus:border-himalaya-orange focus:ring-2 focus:ring-himalaya-orange/30 px-4 py-3 text-base mb-2"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Your Message</label>
                                        <Textarea
                                            name="message"
                                            placeholder="Tell us more about your inquiry..."
                                            className="rounded-lg border-himalaya-maroon/20 focus:border-himalaya-orange focus:ring-2 focus:ring-himalaya-orange/30 px-4 py-3 text-base mb-2 min-h-[120px]"
                                            required
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full bg-himalaya-orange hover:bg-himalaya-gold text-white font-bold py-3 rounded-lg text-lg shadow-md transition-all duration-300 transform hover:scale-[1.02]"
                                        size="lg"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </Button>
                                </form>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-8">
                                <div className="bg-white rounded-lg shadow-sm p-6">
                                    <h2 className="text-2xl font-bold text-himalaya-maroon mb-6">Contact Information</h2>
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Address</h3>
                                            <a href="https://maps.app.goo.gl/dXmMpy8mZdv848g17" target="_blank" rel="noopener noreferrer" className="text-himalaya-orange hover:underline">P876+25V, JP Rd, Kathmandu 44600, Nepal</a>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Email</h3>
                                            <a href="mailto:lhasaligear@gmail.com" className="text-himalaya-orange hover:underline">lhasaligear@gmail.com</a>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Phone</h3>
                                            <a href="tel:+9771234567890" className="text-himalaya-orange hover:underline">+977 1234567890</a>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-2">Follow Us</h3>
                                            <div className="flex space-x-4">
                                                <a
                                                    href="https://www.instagram.com/lhasaligear?igsh=MWFhMW03bjE4eTk0aA=="
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-600 hover:text-himalaya-maroon transition-colors"
                                                >
                                                    <Instagram className="w-6 h-6" />
                                                </a>
                                                <a
                                                    href="https://www.facebook.com/share/1BZg6BQso4/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-600 hover:text-himalaya-maroon transition-colors"
                                                >
                                                    <Facebook className="w-6 h-6" />
                                                </a>
                                                <a
                                                    href="https://www.tiktok.com/@lhasaligear?_t=ZS-8wi3iky3X0a&_r=1"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-600 hover:text-himalaya-maroon transition-colors"
                                                >
                                                    <FaTiktok className="w-6 h-6" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Map */}
                                <a
                                    href="https://maps.app.goo.gl/dXmMpy8mZdv848g17"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block bg-white rounded-lg shadow-sm p-6 hover:shadow-lg transition-shadow cursor-pointer"
                                    title="View on Google Maps"
                                >
                                    <h2 className="text-2xl font-bold text-himalaya-maroon mb-6">Location</h2>
                                    <div className="aspect-video w-full overflow-hidden rounded-lg">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1513329765817!2d85.30785507478754!3d27.712613425260397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fc381916c9%3A0xaf58c8a13dfad3d8!2sSilver!5e0!3m2!1sen!2sjp!4v1748362744549!5m2!1sen!2sjp"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Success Popup */}
            {showPopup && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4 relative">
                        <button
                            onClick={() => setShowPopup(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            <X className="h-5 w-5" />
                        </button>
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-himalaya-maroon mb-2">Message Sent!</h3>
                            <p className="text-gray-600">
                                Thank you for contacting us. We'll get back to you soon.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}