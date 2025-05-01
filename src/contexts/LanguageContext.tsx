
import React, { createContext, useContext, useState } from "react";

type Language = "en" | "ne";

type Translations = {
  [key: string]: {
    en: string;
    ne: string;
  };
};

// Common translations
const translations: Translations = {
  // Navigation
  "nav.home": {
    en: "Home",
    ne: "गृहपृष्ठ"
  },
  "nav.products": {
    en: "Products",
    ne: "उत्पादनहरू"
  },
  "nav.stories": {
    en: "Artisan Stories",
    ne: "कलाकार कथाहरू"
  },
  "nav.about": {
    en: "About",
    ne: "हाम्रो बारेमा"
  },
  "nav.contact": {
    en: "Contact",
    ne: "सम्पर्क"
  },
  
  // Hero 
  "hero.title": {
    en: "Authentic Nepali Craftsmanship",
    ne: "प्रामाणिक नेपाली शिल्पकला"
  },
  "hero.subtitle": {
    en: "Handcrafted treasures from the heart of the Himalayas",
    ne: "हिमालयको मुटुबाट हस्तनिर्मित खजाना"
  },
  "hero.cta": {
    en: "Explore Collection",
    ne: "संग्रह हेर्नुहोस्"
  },
  
  // Products
  "products.title": {
    en: "Featured Products",
    ne: "विशेष उत्पादनहरू"
  },
  "products.viewAll": {
    en: "View All",
    ne: "सबै हेर्नुहोस्"
  },
  
  // Artisan 
  "artisan.title": {
    en: "Meet Our Artisans",
    ne: "हाम्रो कलाकारहरूसँग भेट्नुहोस्"
  },
  "artisan.readMore": {
    en: "Read Story",
    ne: "कथा पढ्नुहोस्"
  },

  // Footer
  "footer.about": {
    en: "About Us",
    ne: "हाम्रो बारेमा"
  },
  "footer.shipping": {
    en: "Shipping",
    ne: "ढुवानी"
  },
  "footer.returns": {
    en: "Returns",
    ne: "फिर्ता"
  },
  "footer.contact": {
    en: "Contact Us",
    ne: "हामीलाई सम्पर्क गर्नुहोस्"
  },
  "footer.rights": {
    en: "All rights reserved",
    ne: "सर्वाधिकार सुरक्षित"
  },
  "footer.language": {
    en: "Language",
    ne: "भाषा"
  }
};

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key: string) => key,
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
