'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { formRegisterSchema, TformRegisterValues } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormInput } from '@/app/components/ui/FormInput';
import { Button } from '@/app/components/ui/Button';
import { registerUser } from '@/app/actions';

import styles from '../AuthModal.module.scss';
import toast from 'react-hot-toast';
interface Props {
  onClose?: VoidFunction;
  onClickLogin?: VoidFunction;
}

export const RegisterForm: React.FC<Props> = ({ onClose, onClickLogin }) => {
  const form = useForm<TformRegisterValues>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      email: '',
      fullName: '',
      password: '',
      confirmPassword: '',
    },
  });
  const onSubmit = async (data: TformRegisterValues) => {
    try {
      await registerUser({
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      });
      toast.error('Регистрация успешна 📝. Подтвердите свою почту', {
        icon: '✅',
      });
      onClose?.();
    } catch (error) {
      return toast.error('Неверный E-Mail или пароль', {
        icon: '❌',
      });
    }
  };
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormInput name="email" label="E-mail" required />
        <FormInput name="fullName" label="Имя пользователя" required />

        <FormInput name="password" label="Пароль" type="password" required />
        <FormInput name="confirmPassword" label="Подтвердите пароль" type="password" required />

        <div className={styles.auth_regbutton}>
          <Button type="submit" label="Зарегистрироваться" version={'unfilled'} lversion={'bold'} />
        </div>
      </form>
    </FormProvider>
  );
};
