import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma_client';
import { findOrCreateCart } from '../../../../shared/utils/findOrCreateCart';
import { CreateCartItemValues } from '../../../../@types/prisma';
import { updateCartTotalAmount } from '../../../../shared/utils/updateCartTotalAmount';

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('cartToken')?.value;

    if (!token) {
      return NextResponse.json({ totalAmount: 0, items: [] });
    }

    const userCart = await prisma.cart.findFirst({
      where: {
        OR: [{ token }],
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
    return NextResponse.json(userCart);
  } catch (error) {
    console.log('[CART_GET] SERVER ERROR', error);
    return NextResponse.json({ error: 'Не удалось получить корзину' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    let token = req.cookies.get('cartToken')?.value;

    if (!token) {
      token = crypto.randomUUID();
    }
    const userCart = await findOrCreateCart(token);

    const data = (await req.json()) as CreateCartItemValues;

    const findCartItem = await prisma.cartItem.findFirst({
      where: {
        cartId: userCart.id,
        productItemId: data.productItemId,
        components: {
          every: {
            id: { in: data.components },
          },
        },
      },
    });

    if (findCartItem) {
      await prisma.cartItem.update({
        where: { id: findCartItem.id },
        data: { quantity: findCartItem.quantity + 1 },
      });
    }

    await prisma.cartItem.create({
      data: {
        cartId: userCart.id,
        productItemId: data.productItemId,
        quantity: 1,
        components: {
          connect: data.components?.map((id) => ({ id })),
        },
      },
    });
    const updateUserCart = await updateCartTotalAmount(token);
    const resp = NextResponse.json(updateUserCart);
    resp.cookies.set('cartToken', token);
    return resp;
  } catch (error) {
    console.log(error);
    console.log('[CART_POST] SERVER ERROR', error);
    return NextResponse.json({ error: 'Не удалось создать корзину' }, { status: 500 });
  }
}
