import React from 'react'

import { StaticDataProvider } from '../StaticDataProvider'
import { AppProviderProps } from './types'

export const AppProvider = (props: AppProviderProps) => {
  const { children } = props
  return <StaticDataProvider>{children}</StaticDataProvider>
}
