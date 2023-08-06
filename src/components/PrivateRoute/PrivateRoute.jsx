import { useAuth } from 'hooks/useAuth';
import { Component } from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ redirectTo = '/', component: Component }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
