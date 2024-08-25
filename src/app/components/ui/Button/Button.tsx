import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';

export const Button = ({
  onClick,
  disabled,
  label,
  icon,
  version,
  lversion,
  tag = 'button',
  href,
}: ButtonProps) => {
  const buttonClassNames = classNames(
    styles.button,
    version && styles[version],
    disabled && styles.disabled
  );
  const labelClassNames = classNames(styles.label, lversion && styles[lversion]);
  return tag === 'button' ? (
    <button className={buttonClassNames} onClick={onClick} disabled={disabled}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={labelClassNames}>{label}</span>
    </button>
  ) : (
    <Link href={href ?? ''} className={buttonClassNames}>
      {label}
    </Link>
  );
};
