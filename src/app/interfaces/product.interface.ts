export interface IProduct {
  id?: string;
  article: string;
  title: string;
  image?: string;
  imageFile?: File;
  description: string;
  category: string;
  price: number;
  old_price: number;
}
