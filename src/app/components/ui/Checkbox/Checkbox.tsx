import React from 'react';
import { CheckboxProps } from './Checkbox.props';

import styles from './Checkbox.module.scss';

export const Checkbox = ({ text, value, checked, onChackedChange }: CheckboxProps) => {
  return (
    <div className={styles.container}>
      <input type="checkbox" id={value} />
      <label htmlFor={value}>{text}</label>
    </div>
  );
};
