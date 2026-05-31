import { XXL_MOBILE, XXL_DESKTOP, XXL_TABLET } from '../../indents';

import { useResolveByBreakpoint } from './use-resolve-by-breakpoint';

export const useXXL = () => {
  const resolve = useResolveByBreakpoint();

  return resolve({
    default: XXL_DESKTOP,
    desktop: XXL_DESKTOP,
    tablet: XXL_TABLET,
    mobile: XXL_MOBILE,
  });
};
