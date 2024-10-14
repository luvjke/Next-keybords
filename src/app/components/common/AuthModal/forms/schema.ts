import { z } from 'zod';

export const passwordSchema = z.string().min(5, { message: 'Минимальная длина пароля 5 символов' });

export const formLoginSchema = z.object({
  email: z.string().email({ message: 'Введите корректную почту' }),
  password: passwordSchema,
});

export const formRegisterSchema = formLoginSchema
  .merge(
    z.object({
      fullName: z
        .string()
        .min(3, { message: 'Введите имя пользвотеля' })
        .refine((val) => !/\s/.test(val), {
          message: 'Пробелы в имени пользователя запрещены',
        }),
      confirmPassword: passwordSchema,
    })
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  });

export type TformLoginValues = z.infer<typeof formLoginSchema>;
export type TformRegisterValues = z.infer<typeof formRegisterSchema>;
