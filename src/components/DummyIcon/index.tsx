import React from 'react'
import { View } from 'react-native'

import { DummyIconProps } from './types'
import { styles } from './styles'

export default function DummyIcon(props: DummyIconProps) {
  const { icon: Icon } = props
  return (
    <View style={styles.container}>
      {Icon && <Icon fill="white" style={{ transform: [{ scale: 0.7 }] }} />}
    </View>
  )
}
