import Link from 'next/link';
import React from 'react';

import styles from './KeyboardCard.module.scss';
import { KeyboardCardProps } from './KeyboardCard.props';
import { Button } from '../../ui/Button';
import { SliderImage } from '../SliderImage';

export const KeyboardCard = ({ id, name, price, imageUrl, components }: KeyboardCardProps) => {
  return (
    <li className={styles.container}>
      <Link href={`/product/${id}`} className={styles.link}>
        {/* <div className={styles.container_image}>
          <img className={styles.image} src={imageUrl} alt={name} />
        </div> */}

        <SliderImage imageUrl={imageUrl} name={name} />

        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>
          {components.map((component) => component.name).join(', ')}
        </p>
        <div className={styles.container_under}>
          <div>
            <span className={styles.price}>
              от <b>{price} ₽</b>
            </span>
          </div>
          <Button version={'default'} lversion={'bold'} label={'Добавить'} />
        </div>
      </Link>
    </li>
  );
};
