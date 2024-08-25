import { Component, ProductItem } from '@prisma/client';
import { IProduct } from '../../../../../../@types/prisma';

export interface KeyboardFormProps {
  imageUrl: string;
  name: string;
  components: Component[];
  items: ProductItem[];
  onClickAdd?: VoidFunction;
}
