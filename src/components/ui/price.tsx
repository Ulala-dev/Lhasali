import React from 'react';
import { useCurrency } from '@/contexts/CurrencyContext';
import { cn } from '@/lib/utils';

interface PriceProps {
    amount: number;
    originalCurrency?: 'NPR' | 'USD';
    className?: string;
    showSymbol?: boolean;
}

export function Price({
    amount,
    originalCurrency = 'NPR',
    className,
    showSymbol = true
}: PriceProps) {
    const { formatPrice } = useCurrency();

    return (
        <span className={cn('font-medium', className)}>
            {formatPrice(amount, originalCurrency)}
        </span>
    );
} 