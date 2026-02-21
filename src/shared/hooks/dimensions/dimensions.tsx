import { createContext, useEffect, useState, type ReactNode } from 'react';

import { breakpoints } from './breakpoints';

const getState = () => ({
  isMobile:
    typeof window !== 'undefined'
      ? window.innerWidth > breakpoints.mobile &&
        window.innerWidth < breakpoints.tablet
      : false,

  isTablet:
    typeof window !== 'undefined'
      ? window.innerWidth >= breakpoints.tablet &&
        window.innerWidth < breakpoints.desktop
      : false,
  isDesktop:
    typeof window !== 'undefined'
      ? window.innerWidth >= breakpoints.desktop
      : false,

  innerWidth: typeof window !== 'undefined' ? window.innerWidth : 1024,
});

type Props = {
  children: ReactNode;
};

// eslint-disable-next-line react-refresh/only-export-components
export const DimensionsContext = createContext(getState());

export const DimensionsProvider = ({ children }: Props) => {
  const [state, setState] = useState(getState());

  useEffect(() => {
    const updateState = () => setState(getState());
    window.addEventListener('resize', updateState);
    return () => window.removeEventListener('resize', updateState);
  }, []);

  return (
    <DimensionsContext.Provider value={state}>
      {children}
    </DimensionsContext.Provider>
  );
};
