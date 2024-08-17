import Link from 'next/link';
import React from 'react';

import styles from './KeyboardCard.module.scss';
import { KeyboardCardProps } from './KeyboardCard.props';
import { Button } from '../../ui/Button';
import Image from 'next/image';
export const KeyboardCard = ({ id, name, price, imageUrl }: KeyboardCardProps) => {
  return (
    <div>
      <Link href={'/keyboard/1'} className={styles.link}>
        <div className={styles.container_image}>
          <img className={styles.image} src={imageUrl} alt={name} />
        </div>

        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>ЧСячсячсячсячфыsadasdas asdasdasdsasdaasddsasda a</p>
        <div className={styles.container_under}>
          <span className={styles.price}>
            от <b>{price} Р</b>
          </span>

          <Button version={'unfilled'} lversion={'bold'} label={'Добавить'} />
        </div>
      </Link>
    </div>
  );
};
