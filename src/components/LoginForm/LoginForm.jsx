import { Box, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      loginUser({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          px: 12,
          gap: 2,
        }}
      >
        <TextField label="Email" variant="outlined" type="email" name="email" />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          name="password"
        />
        <Button type="submit" variant="contained">
          Log in
        </Button>
      </Box>
    </form>
  );
};
