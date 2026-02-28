import { createContext } from 'react';

type TAuthContext = {
  isAuthorized: boolean;
  setIsAuthorized: (value: boolean) => void;
};

export const AuthContext = createContext<TAuthContext | null>(null);
