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
    <>
      <p>Welcome, {user?.email || 'user@example.pl'}</p>
      <button type="button" onClick={handleLogout}>
        Log out
      </button>
    </>
  );
};
