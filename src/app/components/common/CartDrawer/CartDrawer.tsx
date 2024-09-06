'use client';
import React from 'react';

import Image from 'next/image';
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
  const [totalAmount, items, fetchCartItems, updateItemQuantity, removeCartItem] = useCartStore(
    (state) => [
      state.totalAmount,
      state.items,
      state.fetchCartItems,
      state.updateItemQuantity,
      state.removeCartItem,
    ]
  );

  const [content, setContent] = React.useState(false);

  const ref = React.useRef(null);

  useClickAway(ref, () => setContent(false));

  const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  React.useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <div ref={ref} className={styles.sheet}>
      <div className={styles.trigger} onClick={() => setContent(true)}>
        {children}
      </div>

      <div className={classNames(styles.sheet_content, content && styles.sheet_content_active)}>
        {totalAmount > 0 && (
          <div className={styles.sheet_header}>
            <h2>
              В корзине {items.length} {items.length > 1 ? 'товара' : 'товар'}
            </h2>
          </div>
        )}
        <div className={classNames(styles.sheet_body, !totalAmount && styles.sheet_body_empty)}>
          {!totalAmount && (
            <div className={styles.empty}>
              <Image src="/images/empty-box.png" alt="empty-cart" width={120} height={120} />
              <h1 className={styles.title}>Корзина пустая</h1>
              <p className={styles.description}>
                Добавьте хотя бы один товар, чтобы совершить заказ
              </p>
            </div>
          )}
          {totalAmount > 0 && (
            <>
              <ul className={styles.items}>
                {items.map((item) => (
                  <li className={styles.item} key={item.id}>
                    <CartDrawerItem
                      id={item.id}
                      imageUrl={item.imageUrl}
                      details={getCartItemDetails(
                        item.components,
                        item.keyboardType as KeyboardType,
                        item.keyboardSize as KeyboardSize
                      )}
                      disabled={item.disabled}
                      name={item.name}
                      price={item.price}
                      quantity={item.quantity}
                      onClickCountButton={(type) =>
                        onClickCountButton(item.id, item.quantity, type)
                      }
                      onClickRemove={() => removeCartItem(item.id)}
                    />
                  </li>
                ))}
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};
