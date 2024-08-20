'use client';
import React from 'react';

import styles from './Categories.module.scss';
import classNames from 'classnames';
import { Button } from '../../ui/Button';
import { useCategoryStore } from '../../../../../store/category';
import { CategoriesProps } from './Categories.props';

export const Categories: React.FC<CategoriesProps> = ({ items }) => {
  const activeCategoryId = useCategoryStore((state) => state.activeId);
  return (
    <ul className={styles.container}>
      {items.map(({ name, id }) => (
        <li className={styles.li} key={id}>
          <a
            href={`/#${name}`}
            className={classNames(styles.link, activeCategoryId === id && styles.active_link)}
          >
            <Button version={'categories'} label={name} lversion={'bold'} />
          </a>
        </li>
      ))}
    </ul>
  );
};
