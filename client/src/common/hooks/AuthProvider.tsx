import { FC } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export const AuthProvider: FC = () => {
  const user = localStorage.getItem('user');

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export const UserProvider: FC = () => {
  const user = localStorage.getItem('user');

  if (user) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};
