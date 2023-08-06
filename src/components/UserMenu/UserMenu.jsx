import { Box, Button } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <p>Welcome, {user?.email || 'user@example.pl'}</p>
      <Button variant="contained" onClick={handleLogout}>
        Log out
      </Button>
    </Box>
  );
};
