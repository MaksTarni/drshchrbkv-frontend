import { useDimensions } from '.';

type TArgs<T> = {
  default: T;
  mobile?: T;
  tablet?: T;
  desktop?: T;
};

export const useResolveByBreakpoint = () => {
  const { isMobile, isTablet, isDesktop } = useDimensions();

  return <T>({ default: defaultValue, mobile, tablet, desktop }: TArgs<T>): T => {
    if (isMobile && mobile !== undefined) {
      return mobile;
    }

    if (isTablet && tablet !== undefined) {
      return tablet;
    }

    if (isDesktop && desktop !== undefined) {
      return desktop;
    }

    return defaultValue;
  };
};
