'use client';
import React from 'react';

import styles from './CartDrawer.module.scss';
import Link from 'next/link';
import { Button } from '../../ui/Button';
import classNames from 'classnames';
import { useClickAway } from 'react-use';
import { CartDrawerItem } from '../CartDrawerItem';
import { getCartItemDetails } from '../../../../../shared/utils/getCartItemDetails';
import { useCartStore } from '../../../../../shared/store/cart';
import { KeyboardSize, KeyboardType } from '../../../../../shared/constans/keyboards';
export const CartDrawer: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const [content, setContent] = React.useState(false);

  const ref = React.useRef(null);

  useClickAway(ref, () => setContent(false));

  const [totalAmount, fetchCartItems, items] = useCartStore((state) => [
    state.totalAmount,
    state.fetchCartItems,
    state.items,
  ]);

  React.useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <div ref={ref} className={styles.sheet}>
      <div className={styles.trigger} onClick={() => setContent(true)}>
        {children}
      </div>

      <div className={classNames(styles.sheet_content, content && styles.sheet_content_active)}>
        <div className={styles.sheet_header}>
          <h2>
            В корзине {items.length} {items.length > 1 ? 'товара' : 'товар'}
          </h2>
        </div>
        <ul className={styles.items}>
          {items.map(
            (item) => (
              console.log(item.keyboardSize),
              console.log(item.keyboardType),
              (
                <li className={styles.item} key={item.id}>
                  <CartDrawerItem
                    id={item.id}
                    imageUrl={item.imageUrl}
                    details={getCartItemDetails(
                      item.components,
                      item.keyboardType as KeyboardType,
                      item.keyboardSize as KeyboardSize
                    )}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                  />
                </li>
              )
            )
          )}
        </ul>
        <div className={styles.sheet_footer}>
          <div className={styles.footer_content}>
            <span>Итого</span>
            <span>{totalAmount} р</span>
          </div>
          <Link href={`/cart`}>
            <Button version={'unfilled'} lversion={'bold'} label={'Оформить заказ'} />
          </Link>
        </div>
      </div>
    </div>
  );
};
