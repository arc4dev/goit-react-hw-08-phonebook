import { NavBar } from 'components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const container = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 40,
  color: '#010101',
  flexDirection: 'column',
};

export const SharedLayout = () => {
  return (
    <div>
      <NavBar />
      <div style={container}>
        <Outlet />
      </div>
    </div>
  );
};
