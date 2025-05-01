import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { useCurrency } from "@/contexts/CurrencyContext";

export default function Header() {
  const { t } = useLanguage();
  const { currency, toggleCurrency } = useCurrency();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Get the current path and update when it changes
    setCurrentPath(window.location.pathname);
  }, []);

  const navLinks = [
    { href: "/", label: t("Home") },
    { href: "/about", label: t("About") },
    { href: "/shop", label: t("Shop") },
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
            {/* Desktop nav (left) */}
            <nav className="hidden md:flex items-center space-x-8 col-span-1">
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

            {/* Logo (center) */}
            <a href="/" className="flex justify-center col-span-1">
              <img
                src="/logo new.png"
                alt="Lhasali Gear"
                className="h-10 w-auto md:h-12"
              />
            </a>

            {/* Actions + toggled search (right) */}
            <div className="flex items-center justify-end space-x-2 md:space-x-4 col-span-1">
              {/* search toggle */}
              <button onClick={() => setIsSearchOpen(o => !o)} className="text-white">
                <Search className="h-5 w-5 text-white" />
              </button>
              {isSearchOpen && (
                <div className="relative w-40 ml-2">
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full pl-8 bg-white/10 border-himalaya-orange/20 text-white placeholder:text-white/60"
                  />
                  <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
                </div>
              )}
              {/* existing currency, cart, user, mobile menu */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleCurrency}
                className="text-white hover:text-white/80"
              >
                {currency}
              </Button>

              <Button variant="ghost" size="icon" className="relative text-white">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-himalaya-gold text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                  0
                </span>
              </Button>

              <Button variant="ghost" size="icon" className="text-white">
                <User className="h-5 w-5" />
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
        </div>
      </div>
    </header>
  );
}
