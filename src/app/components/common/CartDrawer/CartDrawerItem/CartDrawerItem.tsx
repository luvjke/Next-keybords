import React from 'react';
import { CartItemProps } from './CartDrawerItem.props';
import { mapType } from '../../../../../../shared/constans/keyboards';

import styles from './CartDrawerItem.module.scss';

export const CartDrawerItem: React.FC<CartItemProps> = ({ name, type, size, components }) => {
  const details = [];

  if (size && type) {
    const typeName = mapType[type];
    details.push(`${typeName} ${size} %`);
  }

  if (components) {
    details.push(...components.map((component) => component.name));
  }

  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.title}>{name}</h2>
      </div>
      {details.length > 0 && <p className={styles.details}>{details.join(', ')}</p>}
    </div>
  );
};
