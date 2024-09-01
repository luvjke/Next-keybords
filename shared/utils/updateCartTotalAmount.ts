import { prisma } from '../../prisma/prisma_client';
import { calcCartItemPrice } from './calcCartItemPrice';

export const updateCartTotalAmount = async (token: string) => {
  const userCart = await prisma.cart.findFirst({
    where: {
      token,
    },
    include: {
      items: {
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          productItem: {
            include: {
              product: true,
            },
          },
          components: true,
        },
      },
    },
  });

  if (!userCart) {
    return 0;
  }

  const totalAmount = userCart.items.reduce((acc, item) => {
    return acc + calcCartItemPrice(item);
  }, 0);

  return await prisma.cart.update({
    where: {
      id: userCart.id,
    },
    data: {
      totalAmount,
    },
    include: {
      items: {
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          productItem: {
            include: {
              product: true,
            },
          },
          components: true,
        },
      },
    },
  });
};
