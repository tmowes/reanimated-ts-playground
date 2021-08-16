import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

import Animated, {
  color,
  interpolate,
  interpolateColor,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated'
import { PanGestureHandler } from 'react-native-gesture-handler'
import { useSharedValue } from 'react-native-reanimated'
import { snapPoint } from 'react-native-redash'

import { MessengerIcon, VideoIcon } from '../../components/SvgIcons'
import { styles } from './styles'
import { GestureCtxProps } from './types'
import DummyIcon from '../../components/DummyIcon'

const snapPoints = [0, 140]

export default function SliderMode() {
  const [currentMode, setCurrentMode] = useState<'MessengerIcon' | 'VideoIcon'>(
    'VideoIcon',
  )

  const posX = useSharedValue(0)
  const isActive = useSharedValue(false)

  const animatedSlider = useAnimatedStyle(() => ({
    transform: [{ translateX: posX.value }],
    zIndex: isActive.value ? 100 : 0,
  }))

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx: GestureCtxProps) => {
      console.log('onStart')
      ctx.x = posX.value
    },
    onActive: ({ translationX }, ctx: GestureCtxProps) => {
      posX.value = ctx.x + translationX
      isActive.value = true
      console.log('onActive', posX.value)
    },
    onEnd: ({ velocityX }) => {
      const dest = snapPoint(posX.value, velocityX, snapPoints)
      if (dest >= 70) {
        posX.value = withSpring(140)
        isActive.value = false
        console.log('onEnd > 70')
        return
      }
      posX.value = withSpring(0)
      isActive.value = false
      console.log('onEnd < 70')
    },
  })

  const innerStyle = useAnimatedStyle(() => ({
    opacity: interpolate(posX.value, [0, 30, 110, 140], [0, 1, 1, 0]),
  }))

  const animatedLeft = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      posX.value,
      [0, 60, 140],
      ['orangered', 'black', 'black'],
    ),
  }))

  const animatedRight = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      posX.value,
      [0, 80, 140],
      ['black', 'black', 'orangered'],
    ),
  }))

  useEffect(() => {
    posX.value = currentMode === 'MessengerIcon' ? 140 : 0
  }, [currentMode, posX])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SliderMode</Text>
      <View style={styles.sliderContainer}>
        <Animated.View style={[styles.button, { left: -2 }, animatedLeft]}>
          <DummyIcon icon={MessengerIcon} />
        </Animated.View>

        <Animated.View style={[styles.button, { right: -2 }, animatedRight]}>
          <DummyIcon icon={VideoIcon} />
        </Animated.View>

        <PanGestureHandler onGestureEvent={onGestureEvent}>
          <Animated.View style={[{ position: 'absolute', left: 0 }, animatedSlider]}>
            <Animated.View
              style={[
                styles.draggable,
                { backgroundColor: isActive ? 'orangered' : 'transparent' },
                innerStyle,
              ]}
            />
          </Animated.View>
        </PanGestureHandler>
      </View>
    </View>
  )
}
