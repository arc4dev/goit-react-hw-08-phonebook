import { Box } from '@mui/material';
import { NavBar } from 'components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <NavBar />
      <Box
        sx={{
          py: 4,
          px: 2,
        }}
      >
        <Outlet />
      </Box>
    </div>
  );
};
