import React from 'react';

import styles from './DrawerItemInfo.module.scss';
import { ItemInfoProps } from './DrawerItemInfo.props';

export const DrawerItemInfo: React.FC<ItemInfoProps> = ({ name, details }) => {
  return (
    <div className={styles.container}>
      <div className={styles.info_box}>
        <h2 className={styles.title}>{name}</h2>
      </div>
      {details && <p className={styles.details}>{details}</p>}
    </div>
  );
};
