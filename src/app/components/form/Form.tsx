import { Box, SelectChangeEvent, TextField } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { CustomLabel } from './CustomInputLabel'
import { DropDownField } from './DropDownField'
import { NumericField } from './NumericField'
import { TextInput } from './TextField'
import { ChangeEvent } from 'react'
import { countryData, formatData, genreData } from '@/app/formData/formData'

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
  }
  setErrors: React.Dispatch<
    React.SetStateAction<Record<string, string | undefined>>
  >
}

export function Form({ formData, handleChange, errors, setErrors }: FormProps) {
  return (
    <form>
      <Box
        sx={{
          maxWidth: '1159px',
          display: 'flex',
          justifyContent: 'center',
          gap: '123px',
          marginBottom: '94px',
          '@media (max-width: 768px)': {
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0px',
            marginBottom: '30px',
          },
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
            error={errors.name}
          />

          <DropDownField
            name="genre"
            inputLabel={'Жанр'}
            placeholder={'Жанр'}
            value={formData.genre}
            options={genreData}
            handleChange={handleChange}
            error={errors.genre}
          />
          <DropDownField
            name="format"
            inputLabel={
              'Формат (для онлайн-платформ, большого экрана, интернета, другое)'
            }
            placeholder={'Формат'}
            value={formData.format}
            error={errors.format}
            options={formatData}
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
            options={countryData}
            handleChange={handleChange}
            error={errors.country}
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
            className="large"
            sx={{
              maxWidth: '498px',
              width: '100%',
              height: '157px',
              '& .MuiInputBase-input::placeholder': {
                fontSize: '15px',
              },
            }}
          />
        </Grid>
      </Box>
    </form>
  )
}
