import React from 'react';
import classNames from 'classnames';

import { InputProps } from './Input.props';
import styles from './Input.module.scss';

export const Input = ({
  onChange,
  placeholder,
  icon,
  version,
  isDisabled,
  onKeyDown,
}: InputProps) => {
  const InputClassNames = classNames(
    styles.input,
    version && styles[version],
    icon && styles.icon_button
  );
  return (
    <input
      className={InputClassNames}
      placeholder={placeholder}
      onChange={onChange}
      disabled={isDisabled}
      onKeyDown={onKeyDown}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
    </input>
  );
};
