import { Product } from '@prisma/client';

export interface ModalProps {
  active?: boolean;
  setActive?: React.Dispatch<React.SetStateAction<boolean>>;
  product: Product;
}
