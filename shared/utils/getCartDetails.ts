import { CartDTO } from '../../@types/prisma';
import { calcCartItemPrice } from './calcCartItemPrice';

export type CartStateItem = {
  id: number;
  quantity: number;
  name: string;
  imageUrl: string;
  price: number;
  disabled?: boolean;
  keyboardSize?: number | null;
  keyboardType?: number | null;
  components: Array<{ name: string; price: number }>;
};

interface ReturnProps {
  items: CartStateItem[];
  totalAmount: number;
}
export const getCartDetails = (data: CartDTO): ReturnProps => {
  const items = data.items.map((item) => ({
    id: item.id,
    quantity: item.quantity,
    name: item.productItem.product.name,
    imageUrl: item.productItem.product.imageUrl,
    price: calcCartItemPrice(item),
    keyboardSize: item.productItem.size,
    keyboardType: item.productItem.keyboardType,
    disabled: false,
    components: item.components.map((component) => ({
      name: component.name,
      price: component.price,
    })) as CartStateItem[],
  }));
  return {
    items,
    totalAmount: data.totalAmount,
  };
};
