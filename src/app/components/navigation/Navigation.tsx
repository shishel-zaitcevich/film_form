import { Box } from '@mui/material'
import PaginationOutlined from './Pagination'
import { ButtonNext } from '../buttons/ButtonNext'
import { FilmFormData } from '../form/Form'

interface FormNavigationProps {
  totalPages: number
  currentPage: number
  onPageChange: (event: any, value: number) => void
  formData: FilmFormData
  setErrors: React.Dispatch<
    React.SetStateAction<Record<string, string | undefined>>
  >
  handlePageClick: (event: { selected: number }) => void
  isNextButtonEnabled: boolean
}

const FormNavigation: React.FC<FormNavigationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  formData,
  setErrors,
  handlePageClick,
  isNextButtonEnabled,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '57%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: '15px',
        '@media (max-width: 768px)': {
          flexDirection: 'column',
          minHeight: '100px',
          margin: '0 auto',
          gap: '20px',
        },
      }}
    >
      <PaginationOutlined
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
        formData={formData}
        handlePageClick={handlePageClick}
        setErrors={setErrors}
      />
      <ButtonNext
        formData={formData}
        setErrors={setErrors}
        errors={{}}
        isNextButtonEnabled={isNextButtonEnabled}
        handlePageClick={handlePageClick}
        currentPage={currentPage}
      />
    </Box>
  )
}

export default FormNavigation
