import { Button } from '@mui/material'

export interface ResetButtonProps {
  onReset: () => void
}

export function ResetButton({ onReset }: ResetButtonProps) {
  return (
    <Button
      variant="contained"
      onClick={onReset}
      sx={{
        textTransform: 'none',
        backgroundColor: '#fff',
        color: '#1D1D1D',
        width: '248px',
        height: '48px',
        border: '1px rgba(18, 19, 19, 0.16) solid',
        borderRadius: '41px',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'var(--font-HelveticaNeue)',
        fontSize: '16px',

        '&:hover': {
          backgroundColor: '#ff4569',
        },
      }}
    >
      Отменить заполнение
    </Button>
  )
}

export default ResetButton
