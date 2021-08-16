import React, { useState } from 'react'
import { View } from 'react-native'

import { useTiming } from 'react-native-redash'

import { useStaticData } from '../../contexts'
import AnimatedCard from './AnimatedCard'
import { styles } from './styles'

export default function Alternative() {
  const { usersData, step } = useStaticData()

  const [currentIndex, setCurrentIndex] = useState(0)
  const animatedIndex = useTiming(currentIndex)

  return (
    <View style={styles.container}>
      {usersData.map(user => (
        <AnimatedCard
          key={user.id}
          onSwipe={() => setCurrentIndex(prev => prev + step)}
          animatedIndex={animatedIndex}
          step={step}
          {...user}
        />
      ))}
    </View>
  )
}
