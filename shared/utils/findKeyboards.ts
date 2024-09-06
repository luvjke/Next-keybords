import { prisma } from '../../prisma/prisma_client';

export interface GetSearchParams {
  query?: string;
  sortBy?: string;
  keyboardType?: string;
  sizes?: string;
  components?: string;
  priceFrom?: string;
  priceTo?: string;
}

const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 10000;

export const findKeyboards = async (params: GetSearchParams) => {
  const sizes = params.sizes?.split(',').map(Number);
  const keyboardTypes = params.keyboardType?.split(',').map(Number);
  const componentsIdArr = params.components?.split(',').map(Number);

  const minPrice = Number(params.priceFrom) || DEFAULT_MIN_PRICE;
  const maxPrice = Number(params.priceTo) || DEFAULT_MAX_PRICE;

  const categories = await prisma.category.findMany({
    include: {
      products: {
        orderBy: {
          id: 'desc',
        },
        where: {
          components: componentsIdArr ? { some: { id: { in: componentsIdArr } } } : undefined,
          items: {
            some: {
              size: { in: sizes },
              keyboardType: { in: keyboardTypes },
              price: { gte: minPrice, lte: maxPrice },
            },
          },
        },
        include: {
          items: {
            where: {
              price: {
                gte: minPrice,
                lte: maxPrice,
              },
            },
            orderBy: {
              price: 'asc',
            },
          },
          components: true,
        },
      },
    },
  });

  return categories;
};
