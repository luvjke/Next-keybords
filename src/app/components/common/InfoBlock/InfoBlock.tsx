import React from 'react';
import { InfoBlockProps } from './InfoBlock.props';

import styles from './InfoBlock.module.scss';
import Link from 'next/link';
import { Button } from '../../ui/Button';
export const InfoBlock: React.FC<InfoBlockProps> = ({ title, text, imageUrl }) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.info}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.text}>{text}</p>
        </div>
        <div className={styles.buttons}>
          <Link href={'/'}>
            <Button version={'unfilled'} lversion={'bold'} label={'На главную'} />
          </Link>
          <a href="">
            <Button version={'unfilled'} lversion={'bold'} label={'Обновить'} />
          </a>
        </div>
      </div>
      <img src={imageUrl} alt={title} width={300} />
    </div>
  );
};
