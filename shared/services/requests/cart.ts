import { axiosInstance } from '../instance';
import { CartDTO } from '../../../@types/prisma';

export const fetchCart = async (): Promise<CartDTO> => {
  return (await axiosInstance.get<CartDTO>(`/cart`)).data;
};

export const updateItemQuantity = async (itemId: number, quantity: number): Promise<CartDTO> => {
  return (
    await axiosInstance.patch<CartDTO>(`/cart/` + itemId, {
      quantity,
    })
  ).data;
};

export const removeCartItem = async (id: number): Promise<CartDTO> => {
  return (await axiosInstance.delete<CartDTO>(`/cart/` + id)).data;
};
