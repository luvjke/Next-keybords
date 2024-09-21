import React from 'react';
import { ProductFormProps } from './ChooseProductForm.props';

import styles from './ChooseProductForm.module.scss';
import { ProductImage } from '../ProductImage';
import { Button } from '../../ui/Button';
import classNames from 'classnames';
export const ChooseProductForm: React.FC<ProductFormProps> = ({
  name,
  price,
  imageUrl,
  onSubmit,
  loading,
}) => {
  return (
    <div className={classNames(styles.form, loading && styles.loading)}>
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
