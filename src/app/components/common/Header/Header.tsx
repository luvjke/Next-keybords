import React from 'react';

import styles from './Header.module.scss';

import { Keyboard, ShoppingCart, User } from 'lucide-react';
import { Button } from '../../ui/Button';
import Link from 'next/link';
import { SearchInput } from '../SearchInput';

interface Props {}

export const Header: React.FC<Props> = ({}) => {
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

        <div className={styles.search_input}>
          <SearchInput />
        </div>
        <div className={styles.autorize_box}>
          <Button
            version={'outline'}
            label={'Войти'}
            icon={<User width={16} height={18} />}
            lversion={'regular'}
          />
          <div>
            <b>520 </b>
          </div>
        </div>
      </div>
    </header>
  );
};
