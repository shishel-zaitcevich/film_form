import { Form } from './Form'
import { FormSecond } from './FormSecond'
import { FormThird } from './FormThird'
import { FilmFormData } from './Form'
import { FormFourth } from './FormFourth'

interface FormContentProps {
  currentPage: number
  formData: FilmFormData
  handleChange: (event: any) => void
  errors: Record<string, string | undefined>
  setErrors: React.Dispatch<
    React.SetStateAction<Record<string, string | undefined>>
  >
}

const FormContent: React.FC<FormContentProps> = ({
  currentPage,
  formData,
  handleChange,
  errors,
  setErrors,
}) => {
  switch (currentPage) {
    case 1:
      return (
        <Form
          formData={formData}
          handleChange={handleChange}
          errors={errors}
          setErrors={setErrors}
        />
      )
    case 2:
      return <FormSecond />
    case 3:
      return <FormThird />
    case 4:
      return <FormFourth />
    default:
      return <div>Страница не найдена</div>
  }
}

export default FormContent
