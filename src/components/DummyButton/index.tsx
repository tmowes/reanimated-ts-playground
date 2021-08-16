import React from 'react'
import { View } from 'react-native'

import { DummyButtonProps } from './types'
import { styles } from './styles'

export default function DummyButton(props: DummyButtonProps) {
  const { isActive } = props
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isActive ? 'orangered' : 'transparent' },
      ]}
    />
  )
}
