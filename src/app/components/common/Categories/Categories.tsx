'use client';
import React from 'react';

import styles from './Categories.module.scss';
import classNames from 'classnames';
import { Button } from '../../ui/Button';
import { useCategoryStore } from '../../../../../store/category';

const categories = [
  { id: 1, name: 'Механическая' },
  { id: 2, name: 'Мембранная' },
  { id: 3, name: 'Ножничная' },
  { id: 4, name: 'Плунжерная' },
  { id: 5, name: 'Оптомеханическая' },
  { id: 6, name: 'Оптическая' },
];

export const Categories = () => {
  const activeCategoryId = useCategoryStore((state) => state.activeId);
  return (
    <div className={styles.container}>
      {categories.map(({ name, id }) => (
        <a
          key={id}
          href={`/#${name}`}
          className={classNames(styles.link, activeCategoryId === id && styles.active_link)}
        >
          <Button version={'categories'} label={name} lversion={'bold'} />
        </a>
      ))}
    </div>
  );
};
