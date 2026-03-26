export interface Product {
  id: number;
  name: string;
  price: number;
  category: 'Fruits' | 'Dairy' | 'Snacks';
  image: string;
  description?: string;
}
