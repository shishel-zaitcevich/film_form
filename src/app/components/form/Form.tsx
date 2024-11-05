import { Box, SelectChangeEvent, TextField } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { CustomLabel } from './CustomInputLabel'
import { DropDownField } from './DropDownField'
import { NumericField } from './NumericField'
import { TextInput } from './TextField'
import { useState, ChangeEvent, SetStateAction, useEffect } from 'react'
import { Buttons } from '../Buttons'
import { validateForm } from '@/app/utils/validateForm'
import { isEqual } from 'lodash'

export interface FilmFormData {
  name: string
  genre: string
  format: string
  unpNumber: string
  country: string
  cost: number
  synopsys?: string
}

interface FormProps {
  formData: FilmFormData
  handleChange: (
    event:
      | SelectChangeEvent<string>
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
  errors: {
    name?: string
    genre?: string
    format?: string
    unpNumber?: string
    country?: string
    cost?: string
    synopsys?: string
  }
  setErrors: React.Dispatch<
    React.SetStateAction<Record<string, string | undefined>>
  >
}

export function Form({ formData, handleChange, errors, setErrors }: FormProps) {
  const [IsNextButtonEnabled, setIsNextButtonEnabled] = useState(false)
  useEffect(() => {
    const validation = validateForm(formData)

    if (!isEqual(validation.errors, errors)) {
      setErrors(validation.errors)
    }

    if (validation.isValid !== IsNextButtonEnabled) {
      setIsNextButtonEnabled(validation.isValid)
      console.log(validation.isValid)
    }
  }, [formData, errors, IsNextButtonEnabled])

  return (
    <form>
      <Box
        sx={{
          maxWidth: '1159px',
          display: 'flex',
          gap: '123px',
        }}
      >
        <Grid
          sx={{
            maxWidth: '498px',
            width: '100%',
          }}
        >
          <TextInput
            inputLabel="Название проекта"
            placeholder="Название"
            name="name"
            value={formData.name}
            handleChange={handleChange}
          />
          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
          <DropDownField
            name="genre"
            inputLabel={'Жанр'}
            placeholder={'Жанр'}
            value={formData.genre}
            options={['морковка', 'капуста', 'пирог', 'говно на палочке']}
            // handleChange={(e) =>
            //   handleInputChange(e, formData, setFormData, setErrors)
            // }
            handleChange={handleChange}
          />
          <DropDownField
            name="format"
            inputLabel={
              'Формат (для онлайн-платформ, большого экрана, интернета, другое)'
            }
            placeholder={'Формат'}
            value={formData.format}
            options={[
              'онлайн-платформ',
              'большого экрана',
              'интернета',
              'другое',
            ]}
            handleChange={handleChange}
          />
          <NumericField
            inputLabel="№ УНФ или отсутствует"
            placeholder="890-000-000-00-000"
            name="unpNumber"
            value={formData.unpNumber}
            handleChange={handleChange}
            error={errors.unpNumber}
          />
        </Grid>
        <Grid sx={{ maxWidth: '498px', width: '100%' }}>
          <DropDownField
            name="country"
            inputLabel={'Страна-производитель (копродукция)'}
            placeholder={'Страна'}
            value={formData.country}
            options={['Россия', 'Китай', 'Япония', 'Казахстан']}
            handleChange={handleChange}
          />
          <NumericField
            name="cost"
            inputLabel={
              'Сведения о сметной стоимости производства фильма на территории Нижегородской области, если есть'
            }
            placeholder="Сметная стоимость"
            value={formData.cost || ''}
            handleChange={handleChange}
            error={errors.cost}
          />

          <CustomLabel inputLabel="Синопс" />
          <TextField
            name="synopsys"
            placeholder="Напишите краткое изложение"
            value={formData.synopsys}
            onChange={handleChange}
            multiline
            rows={6}
            required
            className="large"
            sx={{ maxWidth: '498px', width: '100%', height: '157px' }}
          />
        </Grid>
      </Box>
      <Buttons formData={formData} setErrors={setErrors} errors={errors} />
    </form>
  )
}
