import { CartItemDTO } from '../../@types/prisma';

export const calcCartItemPrice = (item: CartItemDTO) => {
  const componentsPrice = item.components.reduce((acc, component) => acc + component.price, 0);
  return (componentsPrice + item.productItem.price) * item.quantity;
};
