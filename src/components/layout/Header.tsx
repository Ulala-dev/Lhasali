import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search, Menu, X, ShoppingCart } from "lucide-react";
import { useCurrency } from "@/contexts/CurrencyContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Header() {
  const { t } = useLanguage();
  const { currency, toggleCurrency } = useCurrency();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPath, setCurrentPath] = useState("/");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  const navLinks = [
    { href: "/", label: t("Home") },
    { href: "/about", label: t("About") },
    { href: "/shop", label: t("Products") },
    { href: "/contact", label: t("Contact") }
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 bg-himalaya-maroon transition-all duration-300",
      isScrolled ? "shadow-lg" : ""
    )}>
      <div className={cn(
        "border-t border-himalaya-orange/20",
        "py-3 md:py-4"
      )}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between md:grid md:grid-cols-3 md:items-center md:gap-2">
            {/* Logo (left) */}
            <a href="/" className="flex items-center h-full">
              <img
                src="/logo new.png"
                alt="Lhasali Gear"
                className="h-8 w-auto md:h-12"
              />
            </a>

            {/* Desktop nav (center) */}
            <nav className="hidden md:flex items-center justify-center space-x-8 md:col-span-1">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  rel="noopener noreferrer"
                  className={`text-white hover:text-white/80 transition-colors font-bold uppercase tracking-[0.05em] font-header text-sm md:text-base
                    ${currentPath === link.href ? "border-b-2 border-himalaya-gold pb-1 font-header" : ""}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions (right) */}
            <div className="flex items-center justify-end md:col-span-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleCurrency}
                className="text-white hover:text-white/80 hidden sm:inline-flex"
              >
                {currency}
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white menu-button flex items-center justify-center h-10 w-10"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                style={{ minHeight: 40, minWidth: 40 }}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile navigation menu */}
      <div className={cn(
        "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
        isMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <nav className="mobile-menu bg-himalaya-maroon border-t border-himalaya-orange/20">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-white hover:text-white/80 transition-colors font-bold uppercase text-base tracking-[0.05em] font-header
                    ${currentPath === link.href ? "border-b-2 border-himalaya-gold pb-1" : ""}`}
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleCurrency}
                className="text-white hover:text-white/80 sm:hidden w-full justify-start"
              >
                {currency}
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
