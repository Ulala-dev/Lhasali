
export type Product = {
  id: string;
  name: string;
  nameNe: string;
  category: string;
  price: number;
  currency: string;
  imageUrl: string;
  origin: string;
  artisanId: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Hand-woven Dhaka Topi",
    nameNe: "हातले बुनेको ढाका टोपी",
    category: "Accessories",
    price: 1200,
    currency: "NPR",
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    origin: "Palpa",
    artisanId: "1"
  },
  {
    id: "2",
    name: "Pashmina Shawl",
    nameNe: "पश्मिना शल",
    category: "Clothing",
    price: 3500,
    currency: "NPR",
    imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    origin: "Kathmandu",
    artisanId: "2"
  },
  {
    id: "3",
    name: "Thangka Painting",
    nameNe: "थांका चित्रकला",
    category: "Art",
    price: 15000,
    currency: "NPR",
    imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    origin: "Bhaktapur",
    artisanId: "3"
  },
  {
    id: "4",
    name: "Handmade Lokta Paper Journal",
    nameNe: "हस्तनिर्मित लोक्ता कागज जर्नल",
    category: "Stationery",
    price: 650,
    currency: "NPR",
    imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    origin: "Baglung",
    artisanId: "1"
  },
];
