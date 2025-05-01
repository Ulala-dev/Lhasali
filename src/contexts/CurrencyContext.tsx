import React, { createContext, useContext, useState, useCallback } from 'react';

// Define conversion rates (you might want to fetch these from an API in production)
const CONVERSION_RATES = {
    NPR_TO_USD: 0.0075, // 1 NPR = 0.0075 USD (approximate)
    USD_TO_NPR: 133.33, // 1 USD = 133.33 NPR (approximate)
};

type CurrencyType = 'NPR' | 'USD';

interface CurrencyContextType {
    currency: CurrencyType;
    toggleCurrency: () => void;
    formatPrice: (amount: number, originalCurrency: CurrencyType) => string;
    convertPrice: (amount: number, fromCurrency: CurrencyType) => number;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
    const [currency, setCurrency] = useState<CurrencyType>('NPR');

    const toggleCurrency = useCallback(() => {
        setCurrency(curr => curr === 'NPR' ? 'USD' : 'NPR');
    }, []);

    const convertPrice = useCallback((amount: number, fromCurrency: CurrencyType): number => {
        if (fromCurrency === currency) return amount;

        if (fromCurrency === 'NPR' && currency === 'USD') {
            return amount * CONVERSION_RATES.NPR_TO_USD;
        } else {
            return amount * CONVERSION_RATES.USD_TO_NPR;
        }
    }, [currency]);

    const formatPrice = useCallback((amount: number, originalCurrency: CurrencyType): string => {
        const convertedAmount = convertPrice(amount, originalCurrency);

        if (currency === 'USD') {
            return `$${convertedAmount.toFixed(2)}`;
        } else {
            return `NPR ${convertedAmount.toFixed(2)}`;
        }
    }, [currency, convertPrice]);

    const value = {
        currency,
        toggleCurrency,
        formatPrice,
        convertPrice,
    };

    return (
        <CurrencyContext.Provider value={value}>
            {children}
        </CurrencyContext.Provider>
    );
}

export function useCurrency() {
    const context = useContext(CurrencyContext);
    if (context === undefined) {
        throw new Error('useCurrency must be used within a CurrencyProvider');
    }
    return context;
} 