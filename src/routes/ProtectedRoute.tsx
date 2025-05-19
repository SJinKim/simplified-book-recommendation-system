import { Navigate } from 'react-router-dom';
import { ReactElement } from 'react';

interface ProtectedRouteProps {
  children: ReactElement;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuthenticated = !!localStorage.getItem('auth');
  return isAuthenticated ? children : <Navigate to='/' replace />;
};
