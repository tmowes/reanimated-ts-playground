import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import data from '../../data/data'
import { StaticDataContextData, StaticDataProviderProps, UsersDataProps } from './types'

export const StaticDataContext = createContext({} as StaticDataContextData)

export const StaticDataProvider = (props: StaticDataProviderProps) => {
  const { children } = props
  const [isLoading, setIsLoading] = useState(true)
  const [usersData, setUsersData] = useState<UsersDataProps[]>([])

  const step = 1 / (usersData.length - 1)

  const loadStaticData = useCallback(() => {
    setUsersData(data.users)
  }, [])

  useEffect(() => {
    loadStaticData()
    setIsLoading(false)
  }, [loadStaticData])

  const providerValues = {
    isLoading,
    usersData,
    step,
  }

  return (
    <StaticDataContext.Provider value={providerValues}>
      {children}
    </StaticDataContext.Provider>
  )
}

export function useStaticData(): StaticDataContextData {
  const context = useContext(StaticDataContext)
  if (!context) {
    throw new Error('useStaticData must be used within a StaticDataProvider')
  }
  return context
}
