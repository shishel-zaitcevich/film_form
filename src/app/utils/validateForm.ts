import { ZodError } from "zod";

import { filmSchema } from "./utils";
import { FilmFormData } from "../components/form/Form";

export const validateForm = (formData: FilmFormData) => {
  console.log("Validating form data:", formData); // Логируем передаваемые данные
  try {
    filmSchema.parse(formData);
    return { isValid: true, errors: {} };
  } catch (error) {
    if (error instanceof ZodError) {
      console.log("Validation errors:", error.errors); // Логируем ошибки валидации
      const fieldErrors = error.errors.reduce((acc, err) => {
        acc[err.path[0]] = err.message;
        return acc;
      }, {} as Record<string, string>);
      return { isValid: false, errors: fieldErrors };
    }
  }
  return { isValid: false, errors: {} };
};