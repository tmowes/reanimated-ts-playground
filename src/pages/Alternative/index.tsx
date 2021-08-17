import React, { useState } from 'react'

import { useDrawerProgress } from '@react-navigation/drawer'
import Animated, {
  interpolate,
  interpolateNode,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { useTiming } from 'react-native-redash'

import { useStaticData } from '../../contexts'
import AnimatedCard from './AnimatedCard'
import { styles } from './styles'
import { AlternativeProps } from './types'

export default function Alternative(props: AlternativeProps) {
  const { usersData, step } = useStaticData()
  const { drawerAnimatedStyle } = props

  const [currentIndex, setCurrentIndex] = useState(0)
  const animatedIndex = useTiming(currentIndex)

  // const progress = useDrawerProgress()

  // const animatedstyle = useAnimatedStyle(() => ({
  //   transform: [
  //     {
  //       scale: interpolateNode(
  //         // @ts-ignore
  //         progress,
  //         {
  //           inputRange: [0, 1],
  //           outputRange: [1, 0.8],
  //         },
  //       ),
  //     },
  //   ],
  //   borderRadius: interpolateNode(
  //     // @ts-ignore
  //     progress,
  //     {
  //       inputRange: [0, 1],
  //       outputRange: [0, 32],
  //     },
  //   ),
  // }))
  const animatedstyle = useAnimatedStyle(() => ({}))

  return (
    <Animated.View style={[styles.container, animatedstyle]}>
      {usersData.map(user => (
        <AnimatedCard
          key={user.id}
          onSwipe={() => setCurrentIndex(prev => prev + step)}
          animatedIndex={animatedIndex}
          step={step}
          {...user}
        />
      ))}
    </Animated.View>
  )
}
