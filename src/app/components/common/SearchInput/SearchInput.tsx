'use client';
import React from 'react';
import Link from 'next/link';
import styles from './SearchInput.module.scss';

import { Search } from 'lucide-react';
import { Product } from '@prisma/client';
import { useClickAway, useDebounce } from 'react-use';

import { Input } from '../../ui/Input';
import { Api } from '../../../../../shared/services/api_client';

export const SearchInput = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [focused, setFocused] = React.useState(false);
  const [products, setProducts] = React.useState<Product[]>([]);

  const ref = React.useRef(null);

  useClickAway(ref, () => setFocused(false));

  useDebounce(
    async () => {
      try {
        const response = await Api.products.search(searchQuery);
        setProducts(response);
      } catch (error) {
        console.log(error);
      }
    },
    400,
    [searchQuery]
  );

  const onClickItem = () => {
    setFocused(false);
    setSearchQuery('');
    setProducts([]);
  };
  return (
    <>
      {focused && <div className={styles.focus} />}
      <div ref={ref} className={styles.container}>
        <Search color="#ADADAD" className={styles.icon} />
        <Input
          onChange={(element) => setSearchQuery(element.target.value)}
          version={'custom'}
          placeholder="Найти клавиатуру..."
          onFocus={() => setFocused(true)}
          value={searchQuery}
        />

        {focused ? (
          products.length > 0 && (
            <div className={styles.search_visible}>
              {products.map((product) => (
                <Link
                  onClick={onClickItem}
                  key={product.id}
                  href={`/product/${product.id}`}
                  className={styles.link}
                >
                  <img
                    src={product.imageUrl.split('PR')[0]}
                    alt={product.name}
                    width={32}
                    height={32}
                    className={styles.image}
                  />
                  <span className={styles.search_item}>{product.name}</span>
                </Link>
              ))}
            </div>
          )
        ) : (
          <div className={styles.search_hidden}></div>
        )}
      </div>
    </>
  );
};
