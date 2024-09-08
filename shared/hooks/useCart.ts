import React from 'react';
import { useCartStore } from '../store/cart';
import { CreateCartItemValues } from '../../@types/prisma';
import { CartStateItem } from '../utils/getCartDetails';

type ReturnProps = {
  totalAmount: number;
  items: CartStateItem[];
  updateItemQuantity: (id: number, quantity: number) => void;
  removeCartItem: (id: number) => void;
  addCartItem: (values: CreateCartItemValues) => void;
};

export const useCart = (): ReturnProps => {
  const cartState = useCartStore((state) => state);
  React.useEffect(() => {
    cartState.fetchCartItems();
  }, []);

  return cartState;
};
