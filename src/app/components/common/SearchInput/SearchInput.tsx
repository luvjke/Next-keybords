'use client';
import React from 'react';
import { Input } from '../../ui/Input';

import styles from './SearchInput.module.scss';
import { Search } from 'lucide-react';
import { useClickAway } from 'react-use';
import Link from 'next/link';

export const SearchInput = () => {
  const [focused, setFocused] = React.useState(false);
  const ref = React.useRef(null);

  useClickAway(ref, () => setFocused(false));
  return (
    <>
      {focused && <div className={styles.focus} />}
      <div ref={ref} className={styles.container}>
        <Search color="#ADADAD" className={styles.icon} />
        <Input
          onChange={() => {}}
          version={'custom'}
          placeholder="Найти клавиатуру..."
          onFocus={() => setFocused(true)}
        />
        {focused ? (
          <div className={styles.search_visible}>
            <Link href={`/product/1`} className={styles.link}>
              <div className={styles.search_item}>asdasd</div>
            </Link>
          </div>
        ) : (
          <div className={styles.search_hidden}></div>
        )}
      </div>
    </>
  );
};
