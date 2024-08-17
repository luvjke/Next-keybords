import { prisma } from '../../../../../prisma/prisma_client';
import { products } from './../../../../../prisma/constans';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('query') || '';

  // search products
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: query,
        mode: 'insensitive',
      },
    },
    take: 5,
  });
  return NextResponse.json(products);
}
