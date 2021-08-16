import React, { useState } from 'react'
import { View, Text } from 'react-native'

import IconButton from '../../components/IconButton'
import { MessengerIcon, VideoIcon } from '../../components/SvgIcons'
import { styles } from './styles'

export default function ToggleModeDelay() {
  const [currentMode, setCurrentMode] = useState('MessengerIcon')

  const handleChangeMode = (mode: 'MessengerIcon' | 'VideoIcon') => {
    setCurrentMode(mode)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToggleModeDelay</Text>
      <View style={styles.sliderContainer}>
        <IconButton
          icon={MessengerIcon}
          rippleColor="orangered"
          isActive={currentMode === 'MessengerIcon'}
          onLongPress={() => handleChangeMode('MessengerIcon')}
          delayLongPress={1000}
        />
        <IconButton
          icon={VideoIcon}
          rippleColor="orangered"
          isActive={currentMode === 'VideoIcon'}
          onLongPress={() => handleChangeMode('VideoIcon')}
          delayLongPress={1000}
        />
      </View>
    </View>
  )
}
