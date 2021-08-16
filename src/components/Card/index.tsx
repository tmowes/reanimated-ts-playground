import React from 'react'
import { View, Text, ImageBackground } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'

import { styles } from './styles'
import { CardProps } from './types'

export default function Card(props: CardProps) {
  const { image, name, bio } = props
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: image }} style={styles.image} resizeMode="cover">
        <LinearGradient colors={['#00000000', '#000000cc']} style={styles.overlay}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description} textBreakStrategy="simple">
            {bio}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  )
}
