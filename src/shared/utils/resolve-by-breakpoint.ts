type TBreakpoints = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

type TArgs<T> = {
  default: T;
  mobile?: T;
  tablet?: T;
  desktop?: T;
  breakpoints: TBreakpoints;
};

export const resolveByBreakpoint = <T>({
  default: defaultValue,
  mobile,
  tablet,
  desktop,
  breakpoints,
}: TArgs<T>): T => {
  if (breakpoints.isMobile && mobile !== undefined) {
    return mobile;
  }

  if (breakpoints.isTablet && tablet !== undefined) {
    return tablet;
  }

  if (breakpoints.isDesktop && desktop !== undefined) {
    return desktop;
  }

  return defaultValue;
};
