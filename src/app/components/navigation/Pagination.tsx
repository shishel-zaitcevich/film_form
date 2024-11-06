import React from 'react'

import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import PaginationItem from '@mui/material/PaginationItem'
import { Typography } from '@mui/material'

import { FilmFormData } from '../form/Form'
import { validateForm } from '@/app/utils/validateForm'

interface PaginationProps {
  totalPages: number
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void
  currentPage: number
  formData: FilmFormData
  handlePageClick: (event: { selected: number }) => void
  setErrors: React.Dispatch<
    React.SetStateAction<Record<string, string | undefined>>
  >
}

const PreviousArrow = () => (
  <img
    src="/arrow.svg"
    alt="Previous"
    width={20}
    height={20}
    style={{
      border: 'none',
      transform: 'rotate(180deg)',
    }}
  />
)

const NextArrow = () => (
  <img
    src="/arrow.svg"
    alt="Next"
    width={20}
    height={20}
    style={{
      border: 'none',
    }}
  />
)

const PaginationOutlined: React.FC<PaginationProps> = ({
  totalPages,
  onPageChange,
  currentPage,
  formData,
  handlePageClick,
  setErrors,
}) => {
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    const validation = validateForm(formData)
    if (validation.isValid) {
      console.log('Форма успешно отправлена', formData)
      handlePageClick({ selected: currentPage })
    } else {
      setErrors(validation.errors)
      console.log('Ошибки в форме:', validation.errors)
    }
    onPageChange(event, value)
  }

  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        size="large"
        sx={{
          '& .MuiPaginationItem-root': {
            border: 'none',
            backgroundColor: '#fff',
            color: 'rgba(0, 0, 0, 0.50)',
          },
          '& .MuiPaginationItem-root: hover': {
            border: '1px solid #EFEFEF',
            borderRadius: '50%',
          },
          '& .MuiPaginationItem-page.Mui-selected': {
            border: '1px solid #EFEFEF',
            borderRadius: '50%',
            backgroundColor: '#fff',
            color: '#000',
          },
        }}
        renderItem={(item) => {
          if (
            item.page === 3 &&
            totalPages > 3 &&
            currentPage < totalPages - 2
          ) {
            return (
              <Typography
                key="break"
                sx={{
                  pointerEvents: 'none',
                  color: 'grey',
                  fontWeight: 'bold',
                  fontSize: '1.2em',
                  marginX: '4px',
                }}
              >
                ...
              </Typography>
            )
          }
          if (
            (item.type === 'previous' && currentPage === 1) ||
            (item.type === 'next' && currentPage === totalPages)
          ) {
            return null
          }

          return (
            <PaginationItem
              {...item}
              components={{
                previous: PreviousArrow,
                next: NextArrow,
              }}
            />
          )
        }}
      />
    </Stack>
  )
}

export default PaginationOutlined
