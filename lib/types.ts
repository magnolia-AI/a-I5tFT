export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category?: string; // Optional: e.g., "summer", "winter", "sports"
  description?: string; // Optional: a short description
}

