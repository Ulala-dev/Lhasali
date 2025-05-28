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
    // Get the current path and update when it changes
    setCurrentPath(window.location.pathname);
  }, []);

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-himalaya-maroon">
      {/* Navigation & Logo merged */}
      <div
        className={cn(
          "border-t border-himalaya-orange/20",
          "py-4 md:py-6"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-2">
            {/* Logo (left) */}
            <a href="/" className="flex justify-start col-span-1">
              <img
                src="/logo new.png"
                alt="Lhasali Gear"
                className="h-10 w-auto md:h-12"
              />
            </a>

            {/* Desktop nav (center) */}
            <nav className="hidden md:flex items-center justify-center space-x-8 col-span-1">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  rel="noopener noreferrer"
                  className={`text-white hover:text-white/80 transition-colors font-bold uppercase tracking-[0.05em] font-header
                    ${currentPath === link.href ? "border-b-2 border-himalaya-gold pb-1 font-header" : ""}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions (right) */}
            <div className="flex items-center justify-end space-x-4 col-span-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleCurrency}
                className="text-white hover:text-white/80"
              >
                {currency}
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 border-t border-himalaya-orange/20">
          <div className="flex flex-col space-y-4 pt-4">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                rel="noopener noreferrer"
                className={`text-white hover:text-white/80 transition-colors font-bold uppercase text-[1.2rem] tracking-[0.05em] font-header
                  ${currentPath === link.href ? "border-b-2 border-himalaya-gold pb-1" : ""}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
