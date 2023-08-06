import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Navigation = ({ children }) => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar
          sx={{
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography
              noWrap
              component={NavLink}
              to="/"
              exact
              sx={{
                mr: 2,
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Home
            </Typography>

            <Typography
              noWrap
              component={NavLink}
              to="/contacts"
              sx={{
                mr: 2,
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Contacts
            </Typography>
          </Box>
          {children}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
