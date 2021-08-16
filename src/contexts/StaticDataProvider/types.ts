import { ReactNode } from 'react'

export type StaticDataContextData = {
  isLoading: boolean
  usersData: UsersDataProps[]
  step: number
}

export type UsersDataProps = {
  id: string
  name: string
  image: string
  bio: string
}

export type StaticDataProviderProps = {
  children: ReactNode
}
