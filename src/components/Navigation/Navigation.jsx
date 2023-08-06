import styled from '@emotion/styled';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';

const styledNavLink = styled(NavLink)({
  '&.active': {
    textDecoration: 'underline',
  },
});

export const Navigation = ({ children }) => {
  const { isLoggedIn } = useAuth();

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
              component={styledNavLink}
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

            {isLoggedIn && (
              <Typography
                noWrap
                component={styledNavLink}
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
            )}
          </Box>
          {children}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
