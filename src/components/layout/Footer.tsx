import React, { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Facebook, Instagram, ArrowUp } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const footerStyles = `
@keyframes wave-move-footer {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100px); }
}
.animated-footer-wave {
  animation: wave-move-footer 10s linear infinite alternate;
}
.animated-footer-icon {
  transition: transform 0.2s, color 0.2s;
}
.animated-footer-icon:hover {
  transform: scale(1.18) translateY(-4px) rotate(-8deg);
  color: #F26722 !important;
}
`;

export default function Footer() {
  const { t } = useLanguage();
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative bg-himalaya-maroon text-himalaya-white pt-8 md:pt-12 pb-6 overflow-hidden">
      {/* Animated Wave Divider */}
      <style dangerouslySetInnerHTML={{ __html: footerStyles }} />
      <div className="absolute left-0 right-0 top-0 w-full overflow-hidden z-10" style={{ height: 60 }} aria-hidden="true">
        <svg className="animated-footer-wave" width="100%" height="60" viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
          <path d="M0,30 Q180,60 360,30 T720,30 T1080,30 T1440,30 V60 H0Z" fill="#5A1212" fillOpacity="0.13" />
          <path d="M0,40 Q240,10 480,40 T960,40 T1440,40 V60 H0Z" fill="#F26722" fillOpacity="0.10" />
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <img
              src="/logo new.png"
              alt="Lhasali Gear"
              className="h-8 w-auto mb-4 mx-auto sm:mx-0"
            />
            <p className="text-himalaya-white/80 mb-4 text-sm md:text-base">
              From the heights of the Himalayas to adventurers around the world, we craft excellence. Each piece reflects a story of heritage, innovation, and sustainable craftsmanship."
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-himalaya-gold font-medium mb-4 text-base md:text-lg">Quick Links</h4>
            <ul className="space-y-2 text-himalaya-white/80 text-sm md:text-base">
              <li><Link to="/about" className="hover:text-himalaya-gold transition-colors">Our Story</Link></li>
              <li><Link to="/shop" className="hover:text-himalaya-gold transition-colors">Products</Link></li>
              <li><Link to="/contact" className="hover:text-himalaya-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-center sm:text-left">
            <h4 className="text-himalaya-gold font-medium mb-4 text-base md:text-lg">Contact Us</h4>
            <ul className="space-y-2 text-himalaya-white/80 text-sm md:text-base">
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>JP Road, Thamel, Kathmandu 44600, Nepal</span>
              </li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+9771234567890" className="hover:underline">+977 1234567890</a>
              </li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:lhasaligear@gmail.com" className="hover:underline">lhasaligear@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-himalaya-white/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-himalaya-white/80 text-center md:text-left">
            © {new Date().getFullYear()} Lhasali Gear. All rights reserved.
          </p>
          <div className="flex space-x-6 justify-center md:justify-end w-full md:w-auto">
            <a
              href="https://www.facebook.com/share/1BZg6BQso4/"
              target="_blank"
              rel="noopener noreferrer"
              className="animated-footer-icon text-himalaya-white/80 hover:text-himalaya-gold transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/lhasaligear?igsh=MWFhMW03bjE4eTk0aA=="
              target="_blank"
              rel="noopener noreferrer"
              className="animated-footer-icon text-himalaya-white/80 hover:text-himalaya-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@lhasaligear?_t=ZS-8wi3iky3X0a&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="animated-footer-icon text-himalaya-white/80 hover:text-himalaya-gold transition-colors"
              aria-label="TikTok"
            >
              <FaTiktok className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Scroll to Top Button */}
        {showScroll && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 bg-himalaya-orange hover:bg-himalaya-gold text-white rounded-full shadow-lg p-3 transition-all duration-300 flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </footer>
  );
}
