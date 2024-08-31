import { KeyboardSize, KeyboardType, mapType } from '../constans/keyboards';
import { Component } from '@prisma/client';
import { CartStateItem } from './getCartDetails';

export const getCartItemDetails = (
  components: CartStateItem['components'],
  type?: KeyboardType,
  size?: KeyboardSize
): string => {
  const details = [];

  if (size && type) {
    const typeName = mapType[type];
    details.push(`${typeName} ${size} %`);
  }

  if (components) {
    details.push(...components.map((component) => component.name));
  }

  return details.join(', ');
};
