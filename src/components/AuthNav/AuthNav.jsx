import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const styledNavLink = styled(NavLink)({
  '&.active': {
    textDecoration: 'underline',
  },
});

export const AuthNav = () => {
  return (
    <Box>
      <Typography
        noWrap
        component={styledNavLink}
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
        component={styledNavLink}
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
