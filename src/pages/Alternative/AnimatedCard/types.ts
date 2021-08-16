import Animated from 'react-native-reanimated'

import { UsersDataProps } from '../../../contexts/StaticDataProvider/types'

export type GestureCtxProps = {
  x: number
  y: number
}

export type AnimatedCardProps = UsersDataProps & {
  onSwipe: () => void
  animatedIndex: Readonly<Animated.SharedValue<number>>
  step: number
}
