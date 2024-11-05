import { Button } from '@mui/material'
import { handleNext } from '../utils/handleNext'
import { MouseEvent } from 'react'
import { FilmFormData } from './form/Form'
import { validateForm } from '../utils/validateForm'

interface ButtonSubmitProps {
  formData: FilmFormData
  setErrors: React.Dispatch<
    React.SetStateAction<Record<string, string | undefined>>
  >
  errors: Record<string, string | undefined>
  isNextButtonEnabled: boolean
}

export function ButtonNext({
  formData,
  setErrors,
  errors,
  isNextButtonEnabled,
}: ButtonSubmitProps) {
  const handleNext = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const validation = validateForm(formData)
    if (validation.isValid) {
      console.log('Форма успешно отправлена', formData)
    } else {
      setErrors(validation.errors)
      console.log('Ошибки в форме:', validation.errors)
    }
  }
  return (
    <Button onClick={handleNext} disabled={!isNextButtonEnabled}>
      Далее
    </Button>
  )
}
