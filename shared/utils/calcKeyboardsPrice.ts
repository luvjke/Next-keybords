import { Component, ProductItem } from '@prisma/client';
import { KeyboardSize, KeyboardType } from '../constans/keyboards';

export const calcKeyboardsPrice = (
  type: KeyboardType,
  size: KeyboardSize,
  items: ProductItem[],
  components: Component[],
  selectedComponents: Set<number>
) => {
  const keyboardPrice =
    items.find((item) => item.size === size && item.keyboardType === type)?.price || 0;

  const totalComponentsPrice = components
    .filter((component) => selectedComponents.has(component.id))
    .reduce((acc, component) => acc + component.price, 0);

  return keyboardPrice + totalComponentsPrice;
};
