import { NavLink } from 'react-router-dom';

export const Navigation = ({ children }) => {
  return (
    <nav
      style={{
        display: 'flex',
      }}
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      {children}
    </nav>
  );
};
