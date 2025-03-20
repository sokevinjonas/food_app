export interface Product {
  id: number;
  name: string;
  description: string;
  rating: number;
  image: string;
  category_id: number;
  seller_id: number;
  default_price: number | null;
  cut_price?: number | null;
  varieties: Variety[];
  type: string;
}

export interface Variety {
  id: number;
  unit: string;
  quantity: number;
  price: number;
  is_default: boolean;
}
