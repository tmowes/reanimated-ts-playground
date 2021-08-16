import React from 'react'
import { View, Dimensions, ImageBackground, Image, Text } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
  useDerivedValue,
  interpolate,
  runOnJS,
  Extrapolate,
} from 'react-native-reanimated'
import { mix, snapPoint } from 'react-native-redash'

import likeImg from '../../../assets/images/like.png'
import nopeImg from '../../../assets/images/nope.png'
import { styles } from './styles'
import { AnimatedCardProps, GestureCtxProps } from './types'

const ROTATION = 30
const { width: wWidth } = Dimensions.get('window')
const snapPoints = [-wWidth * 1.5, 0, wWidth * 1.5]

export default function AnimatedCard(props: AnimatedCardProps) {
  const { onSwipe, animatedIndex, step, image, name, bio, id } = props

  const posX = useSharedValue(0)

  const position = useDerivedValue(() => Number(id) * step - animatedIndex.value)
  const posY = useSharedValue(mix(position.value, 0, 10))

  const rotate = useDerivedValue(() =>
    interpolate(posX.value, [0, wWidth * 2], [0, ROTATION]),
  )

  const animatedCard = useAnimatedStyle(() => ({
    transform: [
      { translateX: posX.value },
      { translateY: posY.value },
      { rotate: `${rotate.value}deg` },
    ],
  }))

  const animatedLike = useAnimatedStyle(() => ({
    opacity: interpolate(posX.value, [50, wWidth / 3], [0, 1]),
  }))

  const animatedNope = useAnimatedStyle(() => ({
    opacity: interpolate(posX.value, [-50, -wWidth / 3], [0, 1]),
  }))

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx: GestureCtxProps) => {
      ctx.x = posX.value
      ctx.y = posY.value
    },
    onActive: ({ translationX }, ctx: GestureCtxProps) => {
      posX.value = ctx.x + translationX
    },
    onEnd: ({ velocityX, velocityY }) => {
      const dest = snapPoint(posX.value, velocityX, snapPoints)

      posY.value = withSpring(mix(position.value, 0, 10), {
        velocity: velocityY,
        overshootClamping: true,
      })

      posX.value = withSpring(
        dest,
        {
          overshootClamping: dest !== 0,
          restSpeedThreshold: dest === 0 ? 0.01 : 100,
          restDisplacementThreshold: dest === 0 ? 0.01 : 100,
        },
        () => dest !== 0 && runOnJS(onSwipe),
      )
    },
  })

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={[styles.cardContainer, animatedCard]}>
          <ImageBackground
            source={{ uri: image }}
            style={[styles.image]}
            resizeMode="cover"
          >
            <Animated.Image
              source={likeImg}
              style={[styles.statusImage, { left: 8 }, animatedLike]}
              resizeMode="contain"
            />
            <Animated.Image
              source={nopeImg}
              style={[styles.statusImage, { right: 8 }, animatedNope]}
              resizeMode="contain"
            />
            <LinearGradient colors={['#00000000', '#000000cc']} style={styles.overlay}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.description} textBreakStrategy="simple">
                {bio}
              </Text>
            </LinearGradient>
          </ImageBackground>
        </Animated.View>
      </PanGestureHandler>
    </View>
  )
}
