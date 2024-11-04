import {
  Box,
  Container,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { DropDownField } from './DropDownField';
import { useState } from 'react';

const initialFormData = {
  name: '',
  genre: '',
  format: '',
  unpNumber: '',
  country: '',
  cost: '',
  synopsys: '',
};

export function FilmForm() {
  const [formData, setFormData] = useState(initialFormData);
  //   const [errors, setErrors] = useState({});
  //   const [IsNextButtonEnabled, setIsNextButtonEnabled] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Container>
        <Box>
          <Typography variant="h4">
            Производственные параметры фильма
          </Typography>
          <Grid size={8}>
            <InputLabel shrink>Название проекта</InputLabel>
            <TextField
              placeholder="Название"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="small"
              required
            />
            <DropDownField
              inputLabel={'Жанр'}
              label={'название'}
              value={formData.genre}
              options={['морковка', 'капуста', 'пирог', 'говно на палочке']}
              handleChange={(event) =>
                handleChange('genre', event.target.value)
              }
              name="genre"
            />
          </Grid>
        </Box>
      </Container>
    </>
  );
}
