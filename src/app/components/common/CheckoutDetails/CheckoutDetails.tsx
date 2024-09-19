'use client';

import React from 'react';

import styles from './CheckoutDetails.module.scss';
import { CheckoutDetailsProps } from './CheckoutDetails.props';
export const CheckoutDetails: React.FC<CheckoutDetailsProps> = ({ title, price }) => {
  return (
    <div className={styles.price_details}>
      <span className={styles.price_title}>
        {title}
        <div className={styles.shtrix} />
      </span>

      <span className={styles.price}>{price} ₽</span>
    </div>
  );
};
