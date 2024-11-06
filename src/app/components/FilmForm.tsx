import { Box, Container, SelectChangeEvent, Typography } from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react'
import { formatInput } from '../utils/utils'
import { FilmFormData, Form } from './form/Form'
import { validateForm } from '../utils/validateForm'
import isEqual from 'lodash/isEqual'
import { ButtonNext } from './ButtonNext'
import { FormSecond } from './form/FormSecond'
import { FormThird } from './form/FormThird'
import { FormFourth } from './form/FormForth'
import { FormFifth } from './form/FormFifth'
import PaginationOutlined from './Pagination'
import {
  loadDataFromLocalStorage,
  saveDataToLocalStorage,
} from '../utils/localStorage'

import { Header } from './Header'

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
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState<Record<string, string | undefined>>({})
  const [IsNextButtonEnabled, setIsNextButtonEnabled] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const validation = validateForm(formData)

    if (!isEqual(validation.errors, errors)) {
      setErrors(validation.errors)
    }

    if (validation.isValid !== IsNextButtonEnabled) {
      setIsNextButtonEnabled(validation.isValid)
      console.log('Кнопка состояния:', validation.isValid)
    }
  }, [formData, errors, IsNextButtonEnabled])

  useEffect(() => {
    const savedData = loadDataFromLocalStorage(FORM_STORAGE_KEY)
    if (savedData) {
      setFormData(savedData)
    }
  }, [])

  useEffect(() => {
    saveDataToLocalStorage(FORM_STORAGE_KEY, formData)
  }, [formData])

  const handleChange = (
    event:
      | SelectChangeEvent<string>
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target

    const validation = validateForm({ ...formData, [name]: value })
    setErrors(validation.errors)
    console.log('Ошибки в форме:', validation.errors)

    const formattedValue = name === 'unpNumber' ? formatInput(value) : value

    if (name === 'cost') {
      const numericValue = value.replace(/[^0-9.]/g, '')
      const finalValue = numericValue === '' ? 0 : parseFloat(numericValue)
      setFormData((prev) => ({ ...prev, [name]: finalValue }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: formattedValue }))
    }
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  let ContentComponent
  switch (currentPage) {
    case 1:
      ContentComponent = (
        <Form
          formData={formData}
          handleChange={handleChange}
          errors={errors}
          setErrors={setErrors}
        />
      )
      break
    case 2:
      ContentComponent = <FormSecond />
      break
    case 3:
      ContentComponent = <FormThird />
      break
    case 4:
      ContentComponent = <FormFourth />
      break
    case 5:
      ContentComponent = <FormFifth />
      break
    default:
      ContentComponent = <div>Страница не найдена</div>
      break
  }

  const handlePageClick = (event: { selected: number }) => {
    validateForm(formData)
    setCurrentPage(event.selected + 1)
  }

  return (
    <>
      <Container sx={{ padding: '20px' }}>
        <Header setFormData={setFormData} />
        {ContentComponent}
        <Box
          sx={{
            display: 'flex',

            width: '57%',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: 'auto',
            marginRight: '15px',
          }}
        >
          <PaginationOutlined
            totalPages={4}
            currentPage={currentPage}
            onPageChange={(event, value) => setCurrentPage(value)}
            formData={formData}
            handlePageClick={handlePageClick}
            setErrors={setErrors}
          />
          <ButtonNext
            formData={formData}
            setErrors={setErrors}
            errors={errors}
            isNextButtonEnabled={IsNextButtonEnabled}
            handlePageClick={handlePageClick}
            currentPage={currentPage}
          />
        </Box>
      </Container>
    </>
  )
}
