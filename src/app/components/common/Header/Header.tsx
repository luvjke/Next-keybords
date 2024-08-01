import React from 'react';

import styles from './Header.module.scss';

import { Keyboard, ShoppingCart, User } from 'lucide-react';
import { Button } from '../../ui/Button';

interface Props {}

export const Header: React.FC<Props> = ({}) => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logo_box}>
          <Keyboard width={35} height={35} />
          <div>
            <h1 className={styles.under_image}>Next keyboard</h1>
          </div>
        </div>
        <div className={styles.autorize_box}>
          <Button version={'outline'} label={'Войти'} icon={<User width={16} height={18} />} />
          <div></div>
        </div>
      </div>
    </header>
  );
};
