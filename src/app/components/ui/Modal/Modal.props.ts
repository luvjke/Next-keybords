import { Product } from '@prisma/client';
import { ReactChild } from 'react';

export interface ModalProps {
  active?: boolean;
  setActive?: React.Dispatch<React.SetStateAction<boolean>>;
  product: Product;
}
