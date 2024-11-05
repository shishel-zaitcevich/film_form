import { InputAdornment, styled, TextField } from '@mui/material'
import { CustomLabel } from './CustomInputLabel'

interface NumericFieldProps {
  name: string
  value: string | number
  placeholder?: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  inputLabel: string
}

const ErrorText = styled('span')({
  position: 'absolute',
  color: 'red',
  fontSize: '0.75em',
  right: '10px',
  top: '50%',
  transform: 'translateY(-50%)',
})

export function NumericField({
  name,
  value,
  placeholder,
  handleChange,
  error,
  inputLabel,
}: NumericFieldProps) {
  // const handleNumericInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const inputValue = e.target.value

  //   const numericValue = inputValue.replace(/[^0-9.]/g, '')

  //   handleChange({
  //     ...e,
  //     target: {
  //       ...e.target,
  //       value: numericValue,
  //     },
  //   })
  // }
  return (
    <>
      <CustomLabel inputLabel={inputLabel} />
      <TextField
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        error={!!error}
        fullWidth
        variant="outlined"
        sx={{
          marginBottom: '25px',
          '& .MuiInputBase-input::placeholder': {
            fontSize: '15px',
            color: 'gray',
          },
        }}
        InputProps={{
          endAdornment: error ? (
            <InputAdornment
              position="end"
              style={{ color: 'red', fontSize: '0.75em' }}
            >
              {error} {/* */}
            </InputAdornment>
          ) : null,
        }}
      />
    </>
  )
}
