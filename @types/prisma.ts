import { components } from './../prisma/constans';
import { Cart, CartItem, Component, Product, ProductItem } from '@prisma/client';

export type IProduct = Product & { items: ProductItem[]; components: Component[] };

export type CartItemDTO = CartItem & {
  productItem: ProductItem & {
    product: Product;
  };
  components: Component[];
};

export interface CartDTO extends Cart {
  items: CartItemDTO[];
}
