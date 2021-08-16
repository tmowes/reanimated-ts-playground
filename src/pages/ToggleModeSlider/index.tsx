import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import { useSharedValue } from 'react-native-reanimated'
import { mix } from 'react-native-redash'

import DummyButton from '../../components/DummyButton'
import IconButton from '../../components/IconButton'
import { MessengerIcon, VideoIcon } from '../../components/SvgIcons'
import { styles } from './styles'

export default function ToggleModeSlider() {
  const [currentMode, setCurrentMode] = useState<'MessengerIcon' | 'VideoIcon'>(
    'MessengerIcon',
  )

  const posX = useSharedValue(0)

  const transition = useDerivedValue(() => withTiming(posX.value, { duration: 500 }))

  const handleChangeMode = (mode: 'MessengerIcon' | 'VideoIcon') => {
    setCurrentMode(mode)
    if (mode === 'MessengerIcon') {
      posX.value = withSpring(0)
      return
    }
    posX.value = withSpring(1)
  }

  const animatedSlider = useAnimatedStyle(() => ({
    transform: [
      { translateX: mix(transition.value, 0, 140) },
      {
        scaleY: interpolate(
          transition.value,
          [0, 0.2, 0.8, 1],
          [1, 0.5, 0.5, 1],
          Extrapolate.CLAMP,
        ),
      },
    ],
    opacity: interpolate(
      transition.value,
      [0, 0.2, 0.8, 1],
      [1, 0.5, 0.5, 1],
      Extrapolate.CLAMP,
    ),
  }))

  useEffect(() => {
    posX.value = currentMode === 'MessengerIcon' ? 0 : 1
  }, [currentMode, posX])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToggleModeSlider</Text>
      <View style={styles.sliderContainer}>
        <Animated.View style={[{ position: 'absolute', left: 0 }, animatedSlider]}>
          <DummyButton isActive />
        </Animated.View>
        <View style={{ position: 'absolute', left: 0 }}>
          <IconButton
            icon={MessengerIcon}
            onLongPress={() => handleChangeMode('MessengerIcon')}
            delayLongPress={1000}
            enabled={currentMode === 'VideoIcon'}
            rippleColor="orangered"
            activeOpacity={1}
          />
        </View>
        <View style={{ position: 'absolute', right: 0 }}>
          <IconButton
            icon={VideoIcon}
            onLongPress={() => handleChangeMode('VideoIcon')}
            delayLongPress={1000}
            enabled={currentMode === 'MessengerIcon'}
            rippleColor="orangered"
          />
        </View>
      </View>
    </View>
  )
}
