import { Route, Routes } from 'react-router-dom';

import { Contacts } from '../pages/Contacts/Contacts';
import { Register } from '../pages/Register/Register';
import { Login } from '../pages/Login/Login';
import { Home } from '../pages/Home/Home';

import { SharedLayout } from './SharedLayout/SharedLayout';
import { NotFound } from 'pages/NotFound/NotFound';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Container, Paper } from '@mui/material';
import { Loader } from './Loader/Loader';

//App
function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: 8,
      }}
    >
      <Loader />
    </Container>
  ) : (
    <Container maxWidth="sm" sx={{ px: 4, py: 4, maxHeight: '100vh' }}>
      <Paper>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Register />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Paper>
    </Container>
  );
}

export default App;
