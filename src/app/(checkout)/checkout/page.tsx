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
import { createOrder } from '@/app/actions';
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

  const onSubmit = async (data: CheckoutFormValues) => {
    try {
      const url = await createOrder(data);

      if (url) {
        location.href = url;
      }
    } catch (error) {
      console.log(error);
    }
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
                  {loading
                    ? [...Array(3)].map((_, index) => (
                        <Skeleton key={index} version={'product_cart'} />
                      ))
                    : items.map((item) => (
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
              <WhiteBlock title="2.Персональные данные" disabled={loading}>
                <div className={styles.personal_data}>
                  <FormInput name="firstName" placeholder="Имя" />
                  <FormInput name="lastName" placeholder="Фамилия" />
                  <FormInput name="email" placeholder="E-mail" />
                  <FormInput name="phone" placeholder="Телефон" />
                </div>
              </WhiteBlock>
              <WhiteBlock title="3.Адрес доставки" disabled={loading}>
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
                  {loading ? <Skeleton version="price" /> : <span>{totalPrice} ₽</span>}
                </div>
                <CheckoutDetails
                  title={'Стоимость корзины:'}
                  price={loading ? <Skeleton version="price_item" /> : totalAmount}
                />
                <CheckoutDetails
                  title={'Налоги:'}
                  price={loading ? <Skeleton version="price_item" /> : vatPrice}
                />
                <CheckoutDetails
                  title={'Доставка:'}
                  price={loading ? <Skeleton version="price_item" /> : DELEVERY_PRICE}
                />
                <Button version={'unfilled'} lversion={'bold'} label={'Оформить заказ'} />
              </WhiteBlock>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
