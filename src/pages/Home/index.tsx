import React, { useEffect, useState } from 'react'
import { View, Text, Dimensions } from 'react-native'

import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
  useDerivedValue,
  interpolate,
  runOnJS,
} from 'react-native-reanimated'

import Card from '../../components/Card'
import { useStaticData } from '../../contexts'
import { styles } from './styles'
import { GestureCtxProps } from './types'

const ROTATION = 60
const { width: wWidth } = Dimensions.get('window')

export default function Home() {
  const { usersData } = useStaticData()

  const posX = useSharedValue(wWidth * 0.3)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(currentIndex + 1)

  const rotate = useDerivedValue(() =>
    interpolate(posX.value, [0, wWidth * 3], [0, ROTATION]),
  )

  const animatedCard = useAnimatedStyle(() => ({
    transform: [{ translateX: posX.value }, { rotate: `${rotate.value}deg` }],
  }))

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx: GestureCtxProps) => {
      ctx.startX = posX.value
    },
    onActive: ({ translationX }, ctx: GestureCtxProps) => {
      posX.value = ctx.startX + translationX
    },
    onEnd: ({ velocityX }) => {
      if (Math.abs(velocityX) < 1000) {
        posX.value = withSpring(0)
        return
      }
      posX.value = withSpring(velocityX < 0 ? wWidth * -3 : wWidth * 3, {}, () =>
        runOnJS(setCurrentIndex)(currentIndex + 1),
      )
    },
  })

  useEffect(() => {
    posX.value = 0
    setNextIndex(currentIndex + 1)
  }, [currentIndex, posX])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tinder Clone</Text>
      {usersData[nextIndex] && (
        <View style={styles.behindCardContainer}>
          <Card {...usersData[nextIndex]} />
        </View>
      )}
      {usersData[currentIndex] && (
        <PanGestureHandler onGestureEvent={onGestureEvent}>
          <Animated.View style={[styles.cardContainer, animatedCard]}>
            <Card {...usersData[currentIndex]} />
          </Animated.View>
        </PanGestureHandler>
      )}
    </View>
  )
}
