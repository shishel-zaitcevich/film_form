import { genreData, formatData, countryData } from '@/app/formData/formData'
import { SelectChangeEvent, Box, TextField } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { ChangeEvent } from 'react'
import { CustomLabel } from './CustomInputLabel'
import { DropDownField } from './DropDownField'
import { FilmFormData } from './Form'
import { NumericField } from './NumericField'
import { TextInput } from './TextField'

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

export function FormSecond({
  formData,
  handleChange,
  errors,
  setErrors,
}: FormProps) {
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
            inputLabel="Локация съёмок"
            placeholder="Локация"
            name="name"
            value={formData.name}
            handleChange={handleChange}
            error={errors.name}
          />
          <TextField
            name="synopsys"
            placeholder="Описание ландшафта"
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
