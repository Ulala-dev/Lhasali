import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "nl" | "fr";         // tweak languages as needed

interface LanguageCtx {
    language: Language;
    setLanguage: (l: Language) => void;
}

const LanguageContext = createContext<LanguageCtx | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>("en");
    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
