import React from 'react';

import { notFound } from 'next/navigation';
import { prisma } from '../../../../../prisma/prisma_client';
import styles from './page.module.scss';
import { ProductImage } from '@/app/components/common/ProductImage';
import { ToggleButtons } from '@/app/components/ui/ToggleButtons';

export default async function ProductPage({ params: { id } }: { params: { id: string } }) {
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });

  if (!product) return notFound();

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <ProductImage imageUrl={product.imageUrl} size={100} />

        <div className={styles.keyboard_info}>
          <h3 className={styles.title}>{product.name}</h3>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <ToggleButtons
            selectedValue={'2'}
            items={[
              {
                name: 'Маленькая',
                value: '1',
              },
              {
                name: 'Средняя',
                value: '2',
              },
              {
                name: 'Большая',
                value: '3',
                disabled: true,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
