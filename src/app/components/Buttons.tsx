import { Dispatch, SetStateAction } from 'react'
import { ButtonNext } from './ButtonNext'
import { FilmFormData } from './form/Form'

interface ButtonsProps {
  formData: FilmFormData
  setErrors: Dispatch<SetStateAction<Record<string, string | undefined>>>
  errors: Record<string, string | undefined>
}

export function Buttons({ formData, setErrors, errors }: ButtonsProps) {
  return (
    <ButtonNext
      formData={formData}
      setErrors={setErrors}
      errors={errors}
      isNextButtonEnabled={false}
    />
  )
}
