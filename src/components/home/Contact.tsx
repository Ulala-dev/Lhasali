import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-16 bg-himalaya-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-himalaya-maroon mb-12 text-center">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Send Us a Message */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-himalaya-maroon mb-4">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <Input placeholder="Full Name" className="w-full" />
              <Input type="email" placeholder="Email Address" className="w-full" />
              <Input type="tel" placeholder="Phone Number" className="w-full" />
              <Textarea placeholder="Your Message" className="w-full min-h-[150px]" />
              <Button className="w-full bg-himalaya-orange hover:bg-himalaya-gold">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="p-6 bg-white shadow-lg rounded-lg space-y-8">
            <h3 className="text-xl font-semibold text-himalaya-maroon mb-4">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="text-himalaya-orange" />
                <span>+977 1234567890</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-himalaya-orange" />
                <span>info@Lhasali Gear.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-himalaya-orange" />
                <span>Thamel, Kathmandu, Nepal</span>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-himalaya-maroon mb-2">
                Follow Us
              </h4>
              <div className="flex space-x-4 text-himalaya-orange">
                <a href="#"><Facebook className="w-6 h-6" /></a>
                <a href="#"><Instagram className="w-6 h-6" /></a>
                <a href="#"><FaTiktok className="w-6 h-6" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
