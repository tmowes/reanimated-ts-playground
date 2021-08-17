import React from 'react'

import { createDrawerNavigator, useDrawerProgress } from '@react-navigation/drawer'
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'

import SliderMode from '../pages/SliderMode'
import Alternative from '../pages/Alternative'
import Matches from '../pages/Matches'
import ToggleModeAnimated from '../pages/ToggleModeAnimated'
import ToggleModeDelay from '../pages/ToggleModeDelay'
import ToggleModeSlider from '../pages/ToggleModeSlider'
import CustomDrawer from './CustomDrawer'

const { Navigator, Screen } = createDrawerNavigator()

export default function DrawerRoutes() {
  // const progress = useDrawerProgress() as Readonly<Animated.SharedValue<number>>

  // const animatedstyle = useAnimatedStyle(() => ({
  //   transform: [{ scale: interpolate(progress.value, [0, 1], [1, 0.8]) }],
  //   borderRadius: interpolate(progress.value, [0, 1], [0, 32]),
  // }))

  return (
    <Navigator
      // useLegacyImplementation={false}
      // drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        drawerStyle: {
          flex: 1,
          width: '65%',
          paddingRight: 20,
          backgroundColor: 'transparent',
        },
        sceneContainerStyle: {
          backgroundColor: 'transparent',
        },
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'gray',
      }}
    >
      {/* <Screen name="Alternative">{props => <Alternative {...props} />}</Screen> */}
      <Screen name="Alternative" component={Alternative} />
      <Screen name="SliderMode" component={SliderMode} />
      <Screen name="Matches" component={Matches} />
      <Screen name="ToggleModeAnimated" component={ToggleModeAnimated} />
      <Screen name="ToggleModeDelay" component={ToggleModeDelay} />
      <Screen name="ToggleModeSlider" component={ToggleModeSlider} />
    </Navigator>
  )
}
