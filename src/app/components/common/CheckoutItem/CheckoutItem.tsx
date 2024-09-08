import React from 'react';
import { CartItemProps } from '../CartDrawerItem/CartDrawerItem.props';
import { DrawerItemInfo } from '../CartDrawerItem/DrawerItemInfo/DrawerItemInfo';
import { CountButtons } from '../CartDrawerItem/CountButtons';
import classNames from 'classnames';

import styles from './CheckoutItem.module.scss';
import { X } from 'lucide-react';
export const CheckoutItem: React.FC<CartItemProps> = ({
  name,
  price,
  imageUrl,
  quantity,
  details,
  disabled,
  onClickCountButton,
  onClickRemove,
}) => {
  return (
    <div className={classNames(styles.container, disabled && styles.disabled)}>
      <div className={styles.info_container}>
        <img className={styles.image} src={imageUrl} />
        <DrawerItemInfo name={name} details={details} />
      </div>
      <div className={styles.info_price}>
        <h2 className={styles.price}>{`${price}₽`}</h2>
      </div>
      <div className={styles.info_footer}>
        <CountButtons value={quantity} onClick={onClickCountButton} />
        <X onClick={onClickRemove} size={16} className={styles.trash} />
      </div>
    </div>
  );
};
