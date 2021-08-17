import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'

import { AppProvider } from './contexts'
import DrawerRoutes from './routes'

export default function App() {
  return (
    <AppProvider>
      <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#212534' }}>
          <DrawerRoutes />
        </SafeAreaView>
      </NavigationContainer>
    </AppProvider>
  )
}
