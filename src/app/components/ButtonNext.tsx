import { Button } from '@mui/material'
c
import { MouseEvent } from 'react'
import { FilmFormData } from './form/Form'
import { validateForm } from '../utils/validateForm'

interface ButtonSubmitProps {
  formData: FilmFormData
  setErrors: React.Dispatch<
    React.SetStateAction<Record<string, string | undefined>>
  >
  errors: Record<string, string | undefined>
  handlePageClick: (event: { selected: number }) => void
  isNextButtonEnabled: boolean
  currentPage: number
}

export function ButtonNext({
  formData,
  setErrors,
  errors,
  handlePageClick,
  currentPage,
  isNextButtonEnabled,
}: ButtonSubmitProps) {
  const handleNext = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    const validation = validateForm(formData)
    if (validation.isValid) {
      console.log('Форма успешно отправлена', formData)
      handlePageClick({ selected: currentPage })
    } else {
      setErrors(validation.errors)
      console.log('Ошибки в форме:', validation.errors)
    }
  }

  return (
    <Button
      onClick={handleNext}
      disabled={!isNextButtonEnabled}
      sx={{
        width: '248px',
        height: '48px',
        backgroundColor: '#EFEFEF',
        borderRadius: '41px',
        display: 'flex',
        justifyContent: 'center',
        textTransform: 'none',
        fontFamily: 'var(--font-HelveticaNeue)',
        paddingLeft: '40px',
      }}
      // endIcon={<ArrowForwardIcon sx={{ fontSize: 'large' }} />}
    >
      Следующий шаг
      <img
        src="/Vector.png"
        alt="arrow"
        style={{ width: '16px', height: '13px', paddingLeft: '30px' }}
      />
    </Button>
  )
}
