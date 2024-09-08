'use client';
import React from 'react';

import styles from './Header.module.scss';

import { Keyboard, User } from 'lucide-react';
import { Button } from '../../ui/Button';
import Link from 'next/link';
import { SearchInput } from '../SearchInput';
import { CartDrawer } from '../CartDrawer';
import { useCartStore } from '../../../../../shared/store/cart';

interface Props {
  hasSearch?: boolean;
}

export const Header: React.FC<Props> = ({ hasSearch = true }) => {
  const [totalAmount, items, loading] = useCartStore((state) => [
    state.totalAmount,
    state.items,
    state.loading,
  ]);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={styles.link} href={'/'}>
          <div className={styles.logo_box}>
            <Keyboard width={35} height={35} />
            <div>
              <h1 className={styles.under_image}>Next keyboard</h1>
            </div>
          </div>
        </Link>

        {hasSearch && (
          <div className={styles.search_input}>
            <SearchInput />
          </div>
        )}
        <div className={styles.autorize_box}>
          <Button
            version={'outline'}
            label={'Войти'}
            icon={<User width={16} height={18} className={styles.user_icon} />}
            lversion={'regular'}
          />
          <div>
            <CartDrawer>
              <Button
                version={'cart'}
                lversion={'regular'}
                label={''}
                tag="cart_button"
                price={totalAmount}
                count={items.length}
              />
            </CartDrawer>
          </div>
        </div>
      </div>
    </header>
  );
};
