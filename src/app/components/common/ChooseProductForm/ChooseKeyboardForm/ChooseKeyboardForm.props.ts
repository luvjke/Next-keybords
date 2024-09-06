import { Component, ProductItem } from '@prisma/client';
import { IProduct } from '../../../../../../@types/prisma';

export interface KeyboardFormProps {
  imageUrl: string;
  name: string;
  components: Component[];
  items: ProductItem[];
  onSumbit: (itemId: number, components: number[]) => void;
  loading?: boolean;
}
