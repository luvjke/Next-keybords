import React from 'react';

import styles from './CartDrawerItem.module.scss';
import { CartItemProps } from './CartDrawerItem.props';
import { DrawerItemInfo } from './DrawerItemInfo/DrawerItemInfo';
import { CountButtons } from './CountButtons';
import { Trash2Icon } from 'lucide-react';

export const CartDrawerItem: React.FC<CartItemProps> = ({
  imageUrl,
  name,
  price,
  quantity,
  details,
  disabled,
  onClickCountButton,
  onClickRemove,
}) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={imageUrl} />
      <div className={styles.info_container}>
        <DrawerItemInfo name={name} details={details} />
        <hr className={styles.hr} />
        <div className={styles.info_footer}>
          <CountButtons value={quantity} onClick={onClickCountButton} />

          <div className={styles.info_price}>
            <h2 className={styles.price}>{price} ₽</h2>
            <Trash2Icon onClick={onClickRemove} size={16} className={styles.trash} />
          </div>
        </div>
      </div>
    </div>
  );
};
