import { InputLabel, TextField } from '@mui/material'
import { CustomLabel } from './CustomInputLabel'

interface TextFieldProps {
  name: string
  value: string | number
  placeholder?: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  inputLabel: string
}

export function TextInput({
  name,
  value,
  placeholder,
  handleChange,
  error,
  inputLabel,
}: TextFieldProps) {
  return (
    <>
      <CustomLabel inputLabel={inputLabel} />
      <TextField
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        sx={{ maxWidth: '498px', width: '100%', marginBottom: '25px' }}
      />
    </>
  )
}
