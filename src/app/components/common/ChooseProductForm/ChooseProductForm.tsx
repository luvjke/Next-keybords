import React from 'react';
import { ProductFormProps } from './ChooseProductForm.props';

import styles from './ChooseProductForm.module.scss';
import { ProductImage } from '../ProductImage';
import { Button } from '../../ui/Button';
export const ChooseProductForm: React.FC<ProductFormProps> = ({
  name,
  price,
  imageUrl,
  onSubmit,
}) => {
  return (
    <div className={styles.form}>
      <ProductImage imageUrl={imageUrl} size={60} />

      <div className={styles.information_container}>
        <h2 className={styles.title}>{name}</h2>

        <Button
          onClick={() => onSubmit?.()}
          version={'unfilled'}
          lversion={'bold'}
          label={`Добавить в корзину за ${price}`}
        />
      </div>
    </div>
  );
};
