import { Box, Container, SelectChangeEvent, Typography } from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react'
import { formatInput } from '../utils/utils'
import { FilmFormData, Form } from './form/Form'
import { validateForm } from '../utils/validateForm'
// import isEqual from 'lodash/isEqual'
// import { ButtonNext } from './ButtonNext'
// import { FormSecond } from './form/FormSecond'
// import { FormThird } from './form/FormThird'
// import { FormFourth } from './form/FormFourth'
// import { FormFifth } from './form/FormFifth'
// import PaginationOutlined from './Pagination'
import {
  loadDataFromLocalStorage,
  saveDataToLocalStorage,
} from '../utils/localStorage'

import { Header } from './Header'
import FormNavigation from './navigation/Navigation'
import FormContent from './form/FormContent'
import { useFormState } from '../hooks/useFormState'

export const initialFormData: FilmFormData = {
  name: '',
  genre: '',
  format: '',
  unpNumber: '',
  country: '',
  cost: 0,
  synopsys: '',
}

const FORM_STORAGE_KEY = 'filmFormData'

export function FilmForm() {
  const {
    formData,
    setFormData,
    errors,
    setErrors,
    isNextButtonEnabled,
    handleChange,
  } = useFormState()
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageClick = (event: { selected: number }) => {
    validateForm(formData)
    setCurrentPage(event.selected + 1)
  }

  return (
    <Container sx={{ padding: '20px' }}>
      <Header setFormData={setFormData} />
      <FormContent
        currentPage={currentPage}
        formData={formData}
        handleChange={handleChange}
        errors={errors}
        setErrors={setErrors}
      />
      <FormNavigation
        totalPages={4}
        currentPage={currentPage}
        onPageChange={(event, value) => setCurrentPage(value)}
        formData={formData}
        setErrors={setErrors}
        handlePageClick={handlePageClick}
        isNextButtonEnabled={isNextButtonEnabled}
      />
    </Container>
  )
}
