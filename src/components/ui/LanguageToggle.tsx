
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ne" : "en");
  };

  return (
    <Button 
      variant="ghost" 
      size="sm"
      onClick={toggleLanguage} 
      className="flex items-center space-x-2 text-sm font-medium"
    >
      <span>{language === "en" ? "🇳🇵" : "🇬🇧"}</span>
      <span>{t("footer.language")}: {language === "en" ? "English" : "नेपाली"}</span>
    </Button>
  );
}
