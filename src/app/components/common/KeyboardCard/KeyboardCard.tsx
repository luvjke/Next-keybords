import Link from 'next/link';
import React from 'react';

import styles from './KeyboardCard.module.scss';
import { KeyboardCardProps } from './KeyboardCard.props';
import { Button } from '../../ui/Button';

export const KeyboardCard = ({ id, name, price, imageUrl, components }: KeyboardCardProps) => {
  return (
    <div>
      <Link href={`/product/${id}`} className={styles.link}>
        <div className={styles.container_image}>
          <img className={styles.image} src={imageUrl} alt={name} />
        </div>

        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>
          {components.map((component) => component.name).join(', ')}
        </p>
        <div className={styles.container_under}>
          <span className={styles.price}>
            от <b>{price} ₽</b>
          </span>
          <Button version={'unfilled'} lversion={'bold'} label={'Добавить'} />
        </div>
      </Link>
    </div>
  );
};
