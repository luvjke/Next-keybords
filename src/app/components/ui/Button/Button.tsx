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
  tag = 'button',
  href,
}: ButtonProps) => {
  const buttonClassNames = classNames(
    //@ts-ignore
    styles.button,
    version && styles[version],
    icon && styles.icon_button
  );
  return tag === 'button' ? (
    <button className={buttonClassNames} onClick={onClick} disabled={disabled}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{label}</span>
    </button>
  ) : (
    <Link href={href ?? ''} className={buttonClassNames}>
      {label}
    </Link>
  );
};
