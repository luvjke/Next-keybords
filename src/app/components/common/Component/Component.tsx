import React from 'react';
import { ComponentProps } from './Component.props';

import styles from './Component.module.scss';
import { CircleCheck } from 'lucide-react';
import classNames from 'classnames';

export const Component: React.FC<ComponentProps> = ({ active, price, name, imageUrl, onClick }) => {
  return (
    <div
      className={classNames(styles.container, active && styles.container_active)}
      onClick={onClick}
    >
      {active && <CircleCheck className={styles.icon} />}
      <img width={110} height={110} src={imageUrl} />
      <span className={styles.title}>{name}</span>
      <span className={styles.price}>{price} P</span>
    </div>
  );
};
