import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Box>
      <Typography
        noWrap
        component={NavLink}
        to="/register"
        exact
        sx={{
          mr: 2,
          fontWeight: 700,
          letterSpacing: '.1rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        Register
      </Typography>
      <Typography
        noWrap
        component={NavLink}
        to="/login"
        exact
        sx={{
          mr: 2,
          fontWeight: 700,
          letterSpacing: '.1rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        Login
      </Typography>
    </Box>
  );
};
