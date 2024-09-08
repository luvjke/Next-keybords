'use client';
import { WhiteBlock } from '@/app/components/common/WhiteBlock';
import styles from './page.module.scss';
import { Input } from '@/app/components/ui/Input';
import { CheckoutDetails } from '@/app/components/common/CheckoutDetails';
import { Button } from '@/app/components/ui/Button';
import { CheckoutItem } from '@/app/components/common/CheckoutItem';
import { useCart } from '../../../../shared/hooks';
import { getCartItemDetails } from '../../../../shared/utils/getCartItemDetails';
import { KeyboardSize, KeyboardType } from '../../../../shared/constans/keyboards';

const VAT = 15;
const DELEVERY_PRICE = 250;

export default function CheckoutPage() {
  const { totalAmount, updateItemQuantity, items, removeCartItem } = useCart();

  const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  const vatPrice = totalAmount * (VAT / 100);
  const totalPrice = totalAmount + vatPrice + DELEVERY_PRICE;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Оформление заказа</h1>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <WhiteBlock title="1.Корзина">
            <div>
              {items.map((item) => (
                <CheckoutItem
                  key={item.id}
                  id={item.id}
                  imageUrl={item.imageUrl}
                  details={getCartItemDetails(
                    item.components,
                    item.keyboardType as KeyboardType,
                    item.keyboardSize as KeyboardSize
                  )}
                  disabled={item.disabled}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  onClickCountButton={(type) => onClickCountButton(item.id, item.quantity, type)}
                  onClickRemove={() => removeCartItem(item.id)}
                />
              ))}
            </div>
          </WhiteBlock>
          <WhiteBlock title="2.Персональные данные">
            <div className={styles.personalData}>
              <Input
                placeholder="Имя"
                onChange={() => {
                  console.log(123);
                }}
                version="filled"
              />
              <Input
                placeholder="Фамилия"
                onChange={() => {
                  console.log(123);
                }}
                version="filled"
              />
              <Input
                placeholder="E-mail"
                onChange={() => {
                  console.log(123);
                }}
                version="filled"
              />
              <Input
                placeholder="Телефон"
                onChange={() => {
                  console.log(123);
                }}
                version="filled"
              />
            </div>
          </WhiteBlock>
          <WhiteBlock title="3.Адрес доставки">
            <div className={styles.address}></div>
          </WhiteBlock>
        </div>
        <div className={styles.sidebar}>
          <WhiteBlock addClassName={true}>
            <div className={styles.total}>
              <span>Итого:</span>
              <span>{totalPrice} P</span>
            </div>
            <CheckoutDetails title={'Стоимость товаров:'} price={totalAmount} />
            <CheckoutDetails title={'Налоги:'} price={vatPrice} />
            <CheckoutDetails title={'Доставка:'} price={DELEVERY_PRICE} />
            <Button version={'unfilled'} lversion={'bold'} label={'Перейти к оплате'} />
          </WhiteBlock>
        </div>
      </div>
    </div>
  );
}
