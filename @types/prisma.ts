import { Component, Product, ProductItem } from '@prisma/client';

export type IProduct = Product & { items: ProductItem[]; components: Component[] };
