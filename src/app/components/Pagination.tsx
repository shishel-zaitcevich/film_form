import React from 'react'

import '../styles/PaginationStyles.scss'

import Pagination from '@mui/material/Pagination'

import Stack from '@mui/material/Stack'

interface PaginationProps {
  totalPages: number
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void
  currentPage: number
}

const PaginationOutlined: React.FC<PaginationProps> = ({
  totalPages,
  onPageChange,
  currentPage,
}) => {
  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={onPageChange}
        variant="outlined"
        shape="rounded"
      />
    </Stack>
  )
}

export default PaginationOutlined
