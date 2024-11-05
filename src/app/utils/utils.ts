import { z } from 'zod';

export const filmSchema = z.object({
  name: z.string().min(1, 'Заполните поле'),
  genre: z.string().min(1, 'Жанр обязателен'),
  format: z.string().min(1, 'Формат обязателен'),
  unpNumber: z
    .string()
    .optional()
    .refine(
      (value) => !value || /^\d{3}-\d{3}-\d{3}-\d{2}-\d{3}$/.test(value) || value === 'отсутствует',
      {
        message: 'Неверный формат УНФ',
      }
    ),
  country: z.string().min(1, 'Страна обязательна'),
  cost: z
    .number()
    .min(0, 'Сметная стоимость должна быть неотрицательным числом')
    .optional(),
});

export const formatInput = (input: string) => {
  const cleanedValue = input.replace(/\D/g, ''); 
  const limitedValue = cleanedValue.slice(0, 15);

  let formattedValue = '';
  for (let i = 0; i < limitedValue.length; i++) {
    formattedValue += limitedValue[i];

    if (i === 2 || i === 5 || i === 8 || i === 10) {
      formattedValue += '-';
    }
  }

  return formattedValue;
};
      
