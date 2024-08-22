import React from 'react';
import { KeyboardFormProps } from './ChooseKeyboardForm.props';

import styles from './ChooseKeyboardForm.module.scss';
import { ProductImage } from '../ProductImage';
import { Button } from '../../ui/Button';
export const ChooseKeyboardForm: React.FC<KeyboardFormProps> = ({
  name,
  items,
  imageUrl,
  onClickAdd,
  components,
}) => {
  const textDetails = '60%,игровая';
  const totalPrice = 3000;
  return (
    <div className={styles.form}>
      <ProductImage imageUrl={imageUrl} size={60} />

      <div className={styles.information_container}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.details}>{textDetails}</p>
        <Button
          version={'unfilled'}
          lversion={'bold'}
          label={`Добавить в корзину за ${totalPrice}`}
        />
      </div>
    </div>
  );
};
