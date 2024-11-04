import { z } from 'zod';

export const filmSchema = z.object({
  title: z.string().min(1, 'Заполните поле'),
  genre: z.string().min(1, 'Жанр обязателен'),
  format: z.string().min(1, 'Формат обязателен'),
  unpNumber: z
    .string()
    .regex(/^\d{3}-\d{3}-\d{3}-\d{2}-\d{3}$/, 'Неверный формат УНФ'),
  country: z.string().min(1, 'Страна обязательна'),
  cost: z
    .number()
    .positive('Сметная стоимость должна быть положительным числом')
    .optional(),
});
