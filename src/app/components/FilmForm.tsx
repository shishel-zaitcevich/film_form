import { Box, Container, SelectChangeEvent, Typography } from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react'
import { formatInput } from '../utils/utils'
import { FilmFormData, Form } from './form/Form'
import { Buttons } from './Buttons'
import { validateForm } from '../utils/validateForm'
import isEqual from 'lodash/isEqual'

const initialFormData: FilmFormData = {
  name: '',
  genre: '',
  format: '',
  unpNumber: '',
  country: '',
  cost: 0,
  synopsys: '',
}

export function FilmForm() {
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState<Record<string, string | undefined>>({})

  const handleChange = (
    event:
      | SelectChangeEvent<string>
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target

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

  return (
    <>
      <Container sx={{ padding: '20px' }}>
        <Box sx={{ display: 'flex' }}>
          <Typography variant="h4">
            Производственные параметры фильма
          </Typography>
        </Box>
        <Form
          formData={formData}
          handleChange={handleChange}
          errors={errors}
          setErrors={setErrors}
        />
        {/* <Buttons formData={formData} setErrors={setErrors} errors={errors} /> */}
      </Container>
    </>
  )
}
