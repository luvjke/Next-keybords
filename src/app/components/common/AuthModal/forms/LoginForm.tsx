import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { formLoginSchema, TformLoginValues } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from '../AuthModal.module.scss';
import { FormInput } from '@/app/components/ui/FormInput';
import { Button } from '@/app/components/ui/Button';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import toast from 'react-hot-toast';

interface Props {
  onClose?: VoidFunction;
}

export const LoginForm: React.FC<Props> = ({ onClose }) => {
  const form = useForm<TformLoginValues>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: TformLoginValues) => {
    try {
      const resp = await signIn('credentials', {
        ...data,
        redirect: false,
      });

      if (!resp?.ok) {
        throw new Error();
      }
      toast.success('Вы успешно вошли в аккаунт', {
        icon: '✅',
      });

      onClose?.();
    } catch (error) {
      toast.error('Не удалось войти в аккаунт', {
        icon: '❌',
      });
    }
  };
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className={styles.login_container}>
          <div className={styles.login_header}>
            <h2 className={styles.login_title}>Вход в аккаунт</h2>
            <p>Введите свою почту, чтобы войти в свой аккаунт</p>
          </div>
          <Image src="/icons/phone-icon.png" alt="phone-icon" width={60} height={60} />
        </div>
        <div className={styles.login_form}>
          <FormInput name="email" label="E-mail" required />
          <FormInput name={'password'} label={'Пароль'} type={'password'} required />
        </div>

        <Button label={'Войти'} version={'unfilled'} lversion={'regular'} />
      </form>
    </FormProvider>
  );
};
