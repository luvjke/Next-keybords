import React from 'react';
import { CartItemDTO } from '../../../@types/prisma';
interface EmailTemplateProps {
  orderId: number;

  items: CartItemDTO[];
}

export const successOrder: React.FC<EmailTemplateProps> = ({ orderId, items }) => (
  <div>
    <h1>Спасибо за оплату! Заказа #{orderId} </h1>
    <p>Ваш заказ оплачен. Список товаров:</p>

    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.productItem.product.name} | {item.productItem.price} ₽ x {item.quantity} шт. =
          {item.productItem.price * item.quantity} ₽
        </li>
      ))}
    </ul>
  </div>
);
