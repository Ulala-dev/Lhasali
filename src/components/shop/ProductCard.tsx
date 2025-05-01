import { Price } from '@/components/ui/price';

interface ProductCardProps {
    product: {
        price: number;
        // add other product properties as needed
    };
}

export function ProductCard({ product }: ProductCardProps) {
    return <Price amount={product.price} />;
} 