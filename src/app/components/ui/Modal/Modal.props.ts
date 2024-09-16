import { Product } from '@prisma/client';

export interface ModalProps {
  active?: boolean;
  setActive?: React.Dispatch<React.SetStateAction<boolean>>;
  product?: Product;
  version?: 'modal_product' | 'modal_auth';
  version_content?: 'modal_content_product' | 'modal_content_auth';
}
