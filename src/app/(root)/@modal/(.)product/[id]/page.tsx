import React from 'react';

import { prisma } from '../../../../../../prisma/prisma_client';
import { notFound } from 'next/navigation';
import { ChooseProductModal } from '@/app/components/common/ChooseProductModal';

export default async function ProductModalPage({ params: { id } }: { params: { id: string } }) {
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      components: true,
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return <ChooseProductModal product={product} />;
}
