import React from 'react';
import classNames from 'classnames';

import { InputProps } from './Input.props';
import styles from './Input.module.scss';

export const Input = ({
  onChange,
  placeholder,
  version,
  isDisabled,
  onKeyDown,
  onFocus,
}: InputProps) => {
  const InputClassNames = classNames(styles.input, version && styles[version]);

  return (
    <input
      className={InputClassNames}
      placeholder={placeholder}
      onChange={onChange}
      disabled={isDisabled}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
    />
  );
};
