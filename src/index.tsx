import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

import { AppProvider } from './contexts'
import Alternative from './pages/Alternative'
import Matches from './pages/Matches'
import SliderMode from './pages/SliderMode'
import ToggleModeAnimated from './pages/ToggleModeAnimated'
import ToggleModeDelay from './pages/ToggleModeDelay'
import ToggleModeSlider from './pages/ToggleModeSlider'

export default function App() {
  return (
    <AppProvider>
      <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />
      <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
        <SliderMode />
      </SafeAreaView>
    </AppProvider>
  )
}
