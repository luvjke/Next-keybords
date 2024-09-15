import { prisma } from '../../../../prisma/prisma_client';
import { PaymentCallbackData } from './../../../../@types/yookassa';
import { NextRequest, NextResponse } from 'next/server';
import { OrderStatus } from '@prisma/client';
import { CartItemDTO } from '../../../../@types/prisma';
import { sendEmail } from '../../../../shared/utils/EmailTemlates/sendEmail';
import { successOrder } from '../../../../shared/utils/EmailTemlates/successOrder';

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as PaymentCallbackData;

    const order = await prisma.order.findFirst({
      where: {
        id: Number(body.object.metadata.order_id),
      },
    });

    if (!order) {
      return NextResponse.json({ error: 'Order not found' });
    }

    const isSuccessed = body.object.status === 'succeeded';

    await prisma.order.update({
      where: {
        id: order.id,
      },
      data: {
        status: isSuccessed ? OrderStatus.SUCCEEDED : OrderStatus.CANCELLED,
      },
    });

    const items = JSON.parse(order.items as string) as CartItemDTO[];

    if (isSuccessed) {
      await sendEmail(
        order.email,
        'Next keyboards / Ваш заказ успешно оформлен',
        successOrder({ orderId: order.id, items })
      );
    } else {
      ///
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process payment' });
  }
}
