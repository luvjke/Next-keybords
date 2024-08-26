import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';
import { ArrowRight, ShoppingCart } from 'lucide-react';

export const Button = ({
  onClick,
  disabled,
  label,
  icon,
  version,
  lversion,
  tag = 'button',
  href,
  price,
  count,
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
  ) : tag === 'cart_button' ? (
    <button className={buttonClassNames} onClick={onClick} disabled={disabled}>
      <b>{price || 0} ₽</b>
      <span className={styles.cart_span} />
      <div className={styles.cart_div}>
        <ShoppingCart size={16} />
        <b className={styles.cart_b}>{count || 0}</b>
      </div>
      <ArrowRight size={20} className={styles.arrow} />
    </button>
  ) : (
    <Link href={href ?? ''} className={buttonClassNames}>
      {label}
    </Link>
  );
};
