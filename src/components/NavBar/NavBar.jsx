import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';

export const NavBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Navigation> {isLoggedIn ? <UserMenu /> : <AuthNav />}</Navigation>
    </header>
  );
};
