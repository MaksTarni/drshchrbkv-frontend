import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context';

export type Props = { children: ReactNode };

export const ProtectedRoute = ({ children }: Props) => {
  const { isAuthorized } = useAuth();
  const location = useLocation();

  if (!isAuthorized) {
    return (
      <Navigate
        to='/auth'
        state={{ from: location }}
        replace
      />
    );
  }
  return children;
};
