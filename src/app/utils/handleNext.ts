
import { FilmFormData } from "../components/form/Form";
import { validateForm } from "./validateForm";
import { MouseEvent } from 'react';

export const handleNext = (
    formData: FilmFormData,
    setErrors: React.Dispatch<React.SetStateAction<Record<string, string | undefined>>>
  ) => (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const validation = validateForm(formData); 
    if (validation.isValid) {
      console.log("Форма успешно отправлена", formData);
    } else {
      setErrors(validation.errors); 
      console.log("Ошибки в форме:", validation.errors);
    }

  };