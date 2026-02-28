import { useState, type ReactNode } from 'react';
import { AuthContext } from './context';

type Props = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthorized, setIsAuthorized }}>
      {children}
    </AuthContext.Provider>
  );
};
