import { styled, InputLabel } from '@mui/material'

interface CustomInputLabelProps {
  inputLabel: string
}

export function CustomLabel({ inputLabel }: CustomInputLabelProps) {
  const CustomInputLabel = styled(InputLabel)({
    whiteSpace: 'normal',
    color: '#1D1D1D',
    fontSize: '16px',
    fontFamily: 'var(--font-HelveticaNeue)',
    wordWrap: 'break-word',
    opacity: '0.70',
    paddingBottom: '5px',
  })
  return <CustomInputLabel shrink>{inputLabel}</CustomInputLabel>
}
