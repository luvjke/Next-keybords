'use client';
import { WhiteBlock } from '@/app/components/common/WhiteBlock';
import styles from './page.module.scss';
import { CheckoutDetails } from '@/app/components/common/CheckoutDetails';
import { Button } from '@/app/components/ui/Button';
import { CheckoutItem } from '@/app/components/common/CheckoutItem';
import { useCart } from '../../../../shared/hooks';
import { getCartItemDetails } from '../../../../shared/utils/getCartItemDetails';
import { KeyboardSize, KeyboardType } from '../../../../shared/constans/keyboards';
import { FormInput } from '@/app/components/ui/FormInput/FormInput';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  checkoutFormSchema,
  CheckoutFormValues,
} from '../../../../shared/utils/checkoutFormSchema';
import { AdressInput } from '@/app/components/ui/AdressInput';
import { Skeleton } from '@/app/components/common/Skeleton';
const VAT = 15;
const DELEVERY_PRICE = 250;

export default function CheckoutPage() {
  const { totalAmount, updateItemQuantity, items, removeCartItem, loading } = useCart();

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      comment: '',
    },
  });

  const onSubmit = (data: CheckoutFormValues) => {
    console.log(data);
  };
  const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  const vatPrice = totalAmount * (VAT / 100);
  const totalPrice = totalAmount + vatPrice + DELEVERY_PRICE;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Оформление заказа</h1>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <WhiteBlock title="1.Корзина">
                <ul className={styles.ul_list}>
                  {items.map((item) => (
                    <li key={item.id}>
                      <CheckoutItem
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
                        onClickCountButton={(type) =>
                          onClickCountButton(item.id, item.quantity, type)
                        }
                        onClickRemove={() => removeCartItem(item.id)}
                      />
                    </li>
                  ))}
                </ul>
              </WhiteBlock>
              <WhiteBlock title="2.Персональные данные">
                <div className={styles.personal_data}>
                  <FormInput name="firstName" placeholder="Имя" />
                  <FormInput name="lastName" placeholder="Фамилия" />
                  <FormInput name="email" placeholder="E-mail" />
                  <FormInput name="phone" placeholder="Телефон" />
                </div>
              </WhiteBlock>
              <WhiteBlock title="3.Адрес доставки">
                <Controller
                  control={form.control}
                  name="address"
                  render={({ field, fieldState }) => (
                    <>
                      <AdressInput onChange={field.onChange} />
                      {fieldState.error?.message && (
                        <p className={styles.error}>{fieldState.error.message}</p>
                      )}
                    </>
                  )}
                />
                <FormInput name={'comment'} placeholder={'Комментарии'} textArea={true} />
              </WhiteBlock>
            </div>
            <div className={styles.sidebar}>
              <WhiteBlock addClassName={true}>
                <div className={styles.total}>
                  <span>Итого:</span>
                  {loading ? <Skeleton /> : <span>{totalPrice} P</span>}
                </div>
                <CheckoutDetails title={'Стоимость корзины:'} price={totalAmount} />
                <CheckoutDetails title={'Налоги:'} price={vatPrice} />
                <CheckoutDetails title={'Доставка:'} price={DELEVERY_PRICE} />
                <Button version={'unfilled'} lversion={'bold'} label={'Перейти к оплате'} />
              </WhiteBlock>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
