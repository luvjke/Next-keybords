import React from 'react';

import { notFound } from 'next/navigation';
import { prisma } from '../../../../../prisma/prisma_client';
import styles from './page.module.scss';
import { ProductImage } from '@/app/components/common/ProductImage';
import { ToggleButtons } from '@/app/components/ui/ToggleButtons';
import { ChooseKeyboardForm } from '@/app/components/common/ChooseProductForm/ChooseKeyboardForm/ChooseKeyboardForm';
import { ChooseProductForm } from '@/app/components/common/ChooseProductForm';
import { useCartStore } from '../../../../../shared/store/cart';
import { ProductForm } from '@/app/components/common/ProductForm';

export default async function ProductPage({ params: { id } }: { params: { id: string } }) {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      components: true,
      category: {
        include: {
          products: {
            include: { items: true },
          },
        },
      },
      items: true,
    },
  });

  if (!product) return notFound();

  return (
    <div className={styles.container}>
      <ProductForm product={product} />
    </div>
  );
}
