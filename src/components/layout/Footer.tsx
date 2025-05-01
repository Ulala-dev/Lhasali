import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-himalaya-maroon text-himalaya-white pt-8 md:pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <img
              src="/logo new.png"
              alt="Lhasali Gear"
              className="h-8 w-auto mb-4"
            />
            <p className="text-himalaya-white/80 mb-4">
              Crafting excellence from the heights of the Himalayas to adventurers worldwide.
              Every piece tells a story of tradition, innovation, and sustainable craftsmanship.
            </p>
          </div>

          {/* About Links */}
          <div>
            <h4 className="text-himalaya-gold font-medium mb-4">About</h4>
            <ul className="space-y-2 text-himalaya-white/80">
              <li><a href="/about" className="hover:text-himalaya-gold transition-colors">Our Story</a></li>
              <li><a href="/sustainability" className="hover:text-himalaya-gold transition-colors">Products</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-himalaya-gold font-medium mb-4">Policies</h4>
            <ul className="space-y-2 text-himalaya-white/80">
              <li><a href="/terms" className="hover:text-himalaya-gold transition-colors">Terms & Conditions</a></li>
              <li><a href="/privacy" className="hover:text-himalaya-gold transition-colors">Privacy Policy</a></li>
              <li><a href="/shipping" className="hover:text-himalaya-gold transition-colors">Shipping Info</a></li>
            </ul>
          </div>

          {/* Newsletter
          <div>
            <h4 className="text-himalaya-gold font-medium mb-4">Stay Updated</h4>
            <form className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="w-full bg-himalaya-orange hover:bg-himalaya-gold">
                Subscribe
              </Button>
            </form>
          </div> */}
        </div>

        {/* Footer bottom */}
        <div className="border-t border-himalaya-white/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-himalaya-white/80 mb-2 md:mb-0 text-center md:text-left">
            © {new Date().getFullYear()} Lhasali Gear. All rights reserved.
          </p>
          <div className="flex space-x-6 justify-center md:justify-end w-full md:w-auto">
            <a href="#" className="text-himalaya-white/80 hover:text-himalaya-gold transition-colors">
              <span className="sr-only">Facebook</span>
              <a href="#"><Facebook className="w-5 h-5" /></a>
            </a>
            <a href="#" className="text-himalaya-white/80 hover:text-himalaya-gold transition-colors">
              <span className="sr-only">Instagram</span>
              <a href="#"><Instagram className="w-5 h-5" /></a>
            </a>
            <a href="#" className="text-himalaya-white/80 hover:text-himalaya-gold transition-colors">
              <span className="sr-only">TikTok</span>
              <a href="#"><FaTiktok className="w-5 h-5" /></a>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
