'use server';

import { OrderStatus } from '@prisma/client';
import { prisma } from '../../prisma/prisma_client';
import { CheckoutFormValues } from '../../shared/utils/checkoutFormSchema';
import { cookies } from 'next/headers';
import { sendEmail } from '../../shared/utils/EmailTemlates/sendEmail';
import { PayOrderTemplate } from '../../shared/utils/EmailTemlates/payOrder';
import { createPayment } from '../../shared/utils/createPayment';

export async function createOrder(data: CheckoutFormValues) {
  try {
    const cookieStore = cookies();
    const cartToken = cookieStore.get('cartToken')?.value;

    if (!cartToken) {
      throw new Error('No cart token found');
    }
    const userCart = await prisma.cart.findFirst({
      include: {
        user: true,
        items: {
          include: {
            components: true,
            productItem: {
              include: {
                product: true,
              },
            },
          },
        },
      },
      where: {
        token: cartToken,
      },
    });
    if (!userCart) {
      throw new Error('Cart not found');
    }
    if (userCart?.totalAmount === 0) {
      throw new Error('Cart is empty');
    }

    const order = await prisma.order.create({
      data: {
        token: cartToken,
        fullName: data.firstName + ' ' + data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        comment: data.comment,
        totalAmount: userCart.totalAmount,
        status: OrderStatus.PENDING,
        items: JSON.stringify(userCart.items),
      },
    });

    await prisma.cart.update({
      where: {
        id: userCart.id,
      },
      data: {
        totalAmount: 0,
      },
    });

    await prisma.cartItem.deleteMany({
      where: {
        cartId: userCart.id,
      },
    });

    const paymentData = await createPayment({
      amount: order.totalAmount,
      orderId: order.id,
      description: 'Оплата заказа #' + order.id,
    });

    if (!paymentData) {
      throw new Error('Payment data not found');
    }

    await prisma.order.update({
      where: {
        id: order.id,
      },
      data: {
        paymentId: paymentData.id,
      },
    });

    const paymentUrl = paymentData.confirmation.confirmation_url;

    await sendEmail(
      data.email,
      'Next Pizza / Оплатите заказ #' + order.id,
      PayOrderTemplate({
        orderId: order.id,
        totalAmount: order.totalAmount,
        paymentUrl,
      })
    );

    return paymentUrl;
  } catch (err) {
    console.log('[CreateOrder] Server error', err);
  }
}
