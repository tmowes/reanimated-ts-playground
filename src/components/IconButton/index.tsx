import React from 'react'
import { View } from 'react-native'

import {
  BorderlessButton,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler'

import { IconButtonProps } from './types'
import { styles } from './styles'

export default function IconButton(props: IconButtonProps) {
  const { icon: Icon, isActive, onLongPress, delayLongPress, ...attrs } = props
  return (
    <TouchableWithoutFeedback onLongPress={onLongPress} delayLongPress={delayLongPress}>
      <BorderlessButton style={styles.bordeless} {...attrs}>
        <View
          style={[
            styles.container,
            { backgroundColor: isActive ? 'orangered' : 'transparent' },
          ]}
        >
          <Icon fill="white" style={{ transform: [{ scale: 0.7 }] }} />
        </View>
      </BorderlessButton>
    </TouchableWithoutFeedback>
  )
}
