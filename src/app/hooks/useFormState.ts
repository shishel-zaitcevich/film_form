import { useState, useEffect } from "react";
import { FilmFormData } from "../components/form/Form";
import { loadDataFromLocalStorage, saveDataToLocalStorage } from "../utils/localStorage";
import { formatInput } from "../utils/utils";
import { validateForm } from "../utils/validateForm";

const FORM_STORAGE_KEY = 'filmFormData';

export const initialFormData: FilmFormData = {
  name: '',
  genre: '',
  format: '',
  unpNumber: '',
  country: '',
  cost: 0,
  synopsys: '',
};

export function useFormState() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState(false);

  useEffect(() => {
    const savedData = loadDataFromLocalStorage(FORM_STORAGE_KEY);
    if (savedData) setFormData(savedData);
  }, []);

  useEffect(() => {
    saveDataToLocalStorage(FORM_STORAGE_KEY, formData);
  }, [formData]);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    const formattedValue = name === 'unpNumber' ? formatInput(value) : value;

    if (name === 'cost') {
      const numericValue = value.replace(/[^0-9.]/g, '');
      const finalValue = numericValue === '' ? 0 : parseFloat(numericValue);
      setFormData((prev) => ({ ...prev, [name]: finalValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: formattedValue }));
    }

    const validation = validateForm({ ...formData, [name]: formattedValue });
    setErrors(validation.errors);
    setIsNextButtonEnabled(validation.isValid);
  };

  return { formData, setFormData, errors, setErrors, isNextButtonEnabled, handleChange };
}