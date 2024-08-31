import { axiosInstance } from '../instance';
import { CartDTO } from '../../../@types/prisma';

export const fetchCart = async (): Promise<CartDTO> => {
  const { data } = await axiosInstance.get<CartDTO>(`/cart`);

  return data;
};
