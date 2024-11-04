import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

interface DropDownFieldProps {
  label: string;
  value: string;
  options: string[];
  handleChange: (event: SelectChangeEvent<string>) => void;
  error?: string;
  inputLabel: string;
  name: string;
}

export function DropDownField({
  inputLabel,
  label,
  value,
  options,
  handleChange,
  error,
  name,
}: DropDownFieldProps) {
  return (
    <>
      <InputLabel shrink className="input_label">
        {inputLabel}
      </InputLabel>
      <Select
        label={label}
        variant="outlined"
        fullWidth
        name={name}
        value={value}
        error={Boolean(error)}
        onChange={handleChange}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </>
  );
}
