import React from 'react'

import { DimensionsContext } from './dimensions'

export { breakpoints } from './breakpoints'
export { DimensionsProvider } from './dimensions'

export const useDimensions = () => {
  const dimensions = React.useContext(DimensionsContext)
  return dimensions
}
