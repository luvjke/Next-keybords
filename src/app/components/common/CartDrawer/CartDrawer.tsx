'use client';
import React from 'react';

import styles from './CartDrawer.module.scss';
import Link from 'next/link';
import { Button } from '../../ui/Button';
import classNames from 'classnames';
import { useClickAway } from 'react-use';
export const CartDrawer: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const [content, setContent] = React.useState(false);

  const ref = React.useRef(null);

  useClickAway(ref, () => setContent(false));
  return (
    <div ref={ref} className={styles.sheet}>
      <div className={styles.trigger} onClick={() => setContent(true)}>
        {children}
      </div>

      <div className={classNames(styles.sheet_content, content && styles.sheet_content_active)}>
        <div className={styles.sheet_header}>
          <h2>Title</h2>
        </div>

        <div className={styles.sheet_footer}>
          <div className={styles.footer_content}>
            <span>Итого</span>
            <span>500 р</span>
          </div>
          <Link href={`/cart`}>
            <Button version={'unfilled'} lversion={'bold'} label={'Оформить заказ'} />
          </Link>
        </div>
      </div>
    </div>
  );
};
