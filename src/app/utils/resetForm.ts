import { Dispatch, SetStateAction } from "react";
import { initialFormData } from "../components/FilmForm";
import { FilmFormData } from "../components/form/Form";

export const handleReset = (setFormData: Dispatch<SetStateAction<FilmFormData>>) => {
    setFormData(initialFormData);  

  localStorage.clear();
};