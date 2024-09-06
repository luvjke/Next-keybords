import { IProduct } from '../../../../../@types/prisma';

export interface ProductFormProps {
  product: IProduct;
  onSubmit?: VoidFunction;
}
