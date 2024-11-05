import {
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
} from '@mui/material'
import { CustomLabel } from './CustomInputLabel'

interface DropDownFieldProps {
  placeholder: string
  value: string
  options: string[]
  handleChange: (event: SelectChangeEvent<string>) => void
  error?: string
  inputLabel: string
  name: string
}

const Placeholder = styled('span')({
  color: 'rgba(0, 0, 0, 0.38)',
  fontSize: '1rem',
})

export function DropDownField({
  inputLabel,
  placeholder,
  value,
  options,
  handleChange,
  error,
  name,
}: DropDownFieldProps) {
  return (
    <>
      <CustomLabel inputLabel={inputLabel} />
      <Select
        fullWidth
        name={name}
        value={value}
        error={Boolean(error)}
        displayEmpty
        onChange={handleChange}
        sx={{
          '& .MuiSelect-icon': {
            display: 'none',
          },
          marginBottom: '25px',
        }}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <Placeholder>{placeholder}</Placeholder>
          }
          return selected
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </>
  )
}
