import { z } from 'zod';

export const passwordSchema = z.string().min(5, { message: 'Минимальная длина пароля 5 символов' });

export const formLoginSchema = z.object({
  email: z.string().email({ message: 'Введите корректную почту' }),
  password: passwordSchema,
});

export const formRegisterSchema = formLoginSchema
  .merge(
    z.object({
      fullName: z.string().min(2, { message: 'Введите пароль' }),
      confirmPassword: passwordSchema,
    })
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  });

export type TformLoginValues = z.infer<typeof formLoginSchema>;
export type TformRegisterValues = z.infer<typeof formRegisterSchema>;
