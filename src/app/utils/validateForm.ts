import { ZodError } from "zod";

import { filmSchema } from "./utils";
import { FilmFormData } from "../components/form/Form";

export const validateForm = (formData: FilmFormData) => {
  console.log("Validating form data:", formData); 
  try {
    filmSchema.parse(formData);
    return { isValid: true, errors: {} };
  } catch (error) {
    if (error instanceof ZodError) {
      console.log("Validation errors:", error.errors); 
      const fieldErrors = error.errors.reduce((acc, err) => {
        acc[err.path[0]] = err.message;
        return acc;
      }, {} as Record<string, string>);
      return { isValid: false, errors: fieldErrors };
    }
  }
  return { isValid: false, errors: {} };
};

// export const validateForm = (formData: FilmFormData) => {
//   try {
//     filmSchema.parse(formData);
//     return { isValid: true, errors: {} };
//   } catch (error) {
//     if (error instanceof ZodError) {
//       const fieldErrors = error.errors.reduce((acc, err) => {
//         const field = err.path[0] as keyof FilmFormData;
//         acc[field] = err.message; // Привязываем ошибку к конкретному полю
//         return acc;
//       }, {} as Record<string, string>);
//       return { isValid: false, errors: fieldErrors };
//     }
//   }
//   return { isValid: false, errors: {} };
// };