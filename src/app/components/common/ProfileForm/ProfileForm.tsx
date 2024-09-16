'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { formRegisterSchema, TformRegisterValues } from '../AuthModal/forms/schema';
import { ProfileFormProps } from './ProfileForm.props';
import { signOut } from 'next-auth/react';

import styles from './ProfileForm.module.scss';
import { FormInput } from '../../ui/FormInput';
import { Button } from '../../ui/Button';
import { updateUserInfo } from '@/app/actions';
export const ProfileForm: React.FC<ProfileFormProps> = ({ data }) => {
  const form = useForm({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      fullName: data.fullName,
      email: data.email,
      password: '',
      confirmPassword: '',
    },
  });
  const onSubmit = async (data: TformRegisterValues) => {
    try {
      await updateUserInfo({
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const onClickSignOut = () => {
    signOut({ callbackUrl: '/' });
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{`Личные данные | #${data.id}`}</h1>
      <FormProvider {...form}>
        <form className={styles.form} onSubmit={form.handleSubmit(onSubmit)}>
          <FormInput name="email" label="E-mail" required />
          <FormInput name="fullName" label="Полное имя" required />

          <FormInput type="password" name="password" label="Новый пароль" required />
          <FormInput type="password" name="confirmPassword" label="Повторите пароль" required />

          <Button type="submit" label="Сохранить" version={'custom'} lversion={'bold'} />

          <Button
            type="button"
            label="Выйти"
            version={'custom'}
            lversion={'bold'}
            onClick={onClickSignOut}
          />
        </form>
      </FormProvider>
    </div>
  );
};
