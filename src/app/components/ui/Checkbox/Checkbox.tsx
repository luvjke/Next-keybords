import React from 'react';
import { CheckboxProps } from './Checkbox.props';

import styles from './Checkbox.module.scss';

export const Checkbox = ({ text, value, checked, onChackedChange, name }: CheckboxProps) => {
  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        id={`checkbox-${String(value)}-${String(name)}`}
        checked={checked}
        onChange={(event) => onChackedChange?.(event.target.checked)}
      />
      <label htmlFor={`checkbox-${String(value)}-${String(name)}`}>{text}</label>
    </div>
  );
};
