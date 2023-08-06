import { Box, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

import { filterContacts } from 'redux/slices/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => dispatch(filterContacts(e.target.value.trim()));

  return (
    <Box>
      <Typography>Find contacts by name</Typography>
      <TextField
        size="small"
        type="text"
        name="name"
        onChange={handleChange}
        autoComplete="off"
      />
    </Box>
  );
};
