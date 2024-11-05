import { ZodError } from "zod";

import { filmSchema } from "./utils";
import { FilmFormData } from "../components/form/Form";

export const validateForm = (formData: FilmFormData) => {
    try {
      filmSchema.parse(formData); 
      return { isValid: true, errors: {} }; 
    } catch (error) {
      if (error instanceof ZodError) {
        const fieldErrors = error.errors.reduce((acc, err) => {
          acc[err.path[0]] = err.message; 
          return acc;
        }, {} as Record<string, string>);
        return { isValid: false, errors: fieldErrors };
      }
    }
    return { isValid: false, errors: {} }; 
  };