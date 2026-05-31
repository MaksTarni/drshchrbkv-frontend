import { XL_MOBILE, XL_DESKTOP, XL_TABLET } from '../../indents';

import { useResolveByBreakpoint } from './use-resolve-by-breakpoint';

export const useXL = () => {
  const resolve = useResolveByBreakpoint();

  return resolve({
    default: XL_DESKTOP,
    desktop: XL_DESKTOP,
    tablet: XL_TABLET,
    mobile: XL_MOBILE,
  });
};
