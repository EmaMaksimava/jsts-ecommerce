import { Product } from "../Interfaces/Product";

export interface Cart {
  products: {
    [key: string]: {
      amount: number;
      product: Product;
    }
  };
};

export interface State {
  products: Product[];
  cart: Cart;
}
