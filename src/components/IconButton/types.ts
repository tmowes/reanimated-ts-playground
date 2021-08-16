import { FC } from 'react'
import { GestureResponderEvent } from 'react-native'

import { BorderlessButtonProperties } from 'react-native-gesture-handler'
import { SvgProps } from 'react-native-svg'

export type IconButtonProps = BorderlessButtonProperties & {
  icon: FC<SvgProps>
  isActive?: boolean
  onLongPress?: (event: GestureResponderEvent) => void
  delayLongPress?: number
}
