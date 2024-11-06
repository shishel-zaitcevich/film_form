import { Box, Typography } from '@mui/material'
import { Dispatch, SetStateAction, useState } from 'react'
import { handleReset } from '../utils/resetForm'
import ResetButton from './ResetButton'
import { FilmFormData } from './form/Form'

interface HeaderProps {
  setFormData: Dispatch<SetStateAction<FilmFormData>>
}

export function Header({ setFormData }: HeaderProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        maxWidth: '1119px',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 auto',
        marginBottom: '112px',
        paddingTop: '81px',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          maxWidth: '564px',
          color: '#1D1D1D',
          fontFamily: 'Inter Tight',
          fontSize: '48px',
          fontWeight: '600',
        }}
      >
        Производственные параметры фильма
      </Typography>
      <ResetButton onReset={() => handleReset(setFormData)} />
    </Box>
  )
}

export default Header
