import React from 'react';

import { notFound } from 'next/navigation';
import { prisma } from '../../../../prisma/prisma_client';
import styles from './page.module.scss';
export default async function ProductPage({ params: { id } }: { params: { id: string } }) {
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });

  if (!product) return notFound();
  return <div className={styles.container}>123123</div>;
}
