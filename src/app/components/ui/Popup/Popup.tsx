import React from 'react';

import styles from './Popup.module.scss';
import { PopupProps } from './Popup.props';
import { ArrowUpDown } from 'lucide-react';

export const Popup = ({ active, setActive }: PopupProps) => {
  return (
    <div className={styles.container}>
      <ArrowUpDown size={16} />
      <b>Сортировка:</b>
      <b className={styles.categories}>популярное</b>
    </div>
  );
};
