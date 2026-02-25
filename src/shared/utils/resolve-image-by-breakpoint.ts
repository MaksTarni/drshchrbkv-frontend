type TBreakpoints = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

type TImage = {
  url: string;
  alt: string;
};

type TArgs = {
  defaultImage: TImage;
  mobileImage?: TImage;
  tabletImage?: TImage;
  breakpoints: TBreakpoints;
};

export const resolveImageByBreakpoint = ({
  defaultImage,
  mobileImage,
  tabletImage,
  breakpoints,
}: TArgs): TImage => {
  if (breakpoints.isMobile && mobileImage) {
    return mobileImage;
  }

  if (breakpoints.isTablet && tabletImage) {
    return tabletImage;
  }

  return defaultImage;
};
