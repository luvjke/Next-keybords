import { z } from 'zod';

export const checkoutFormSchema = z.object({
  firstName: z.string().min(2, { message: 'Имя должно содержать не менее 2 символов' }),
  lastName: z.string().min(2, { message: 'Фамилия должна содержать не менее 2 символов' }),
  email: z.string().email({ message: 'Некорректная почта' }),
  phone: z.string().min(10, { message: 'Введите корретный номер телефона' }),
  address: z.string().min(5, { message: 'Введите корретный адрес' }),
  comment: z.string().optional(),
});

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;