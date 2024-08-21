'use client';
import React from 'react';

import styles from './ToggleButtons.module.scss';
import { GroupToggleProps } from './ToggleButtons.props';
import classNames from 'classnames';

export const ToggleButtons: React.FC<GroupToggleProps> = ({ items, onClick, selectedValue }) => {
  return (
    <div className={styles.container}>
      {items.map((item) => (
        <button
          key={item.name}
          className={classNames(styles.button, {
            [styles.active]: item.value === selectedValue,
            [styles.disabled]: item.disabled,
          })}
          onClick={() => onClick?.(item.value)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};
