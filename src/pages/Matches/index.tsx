import React from 'react'
import { View, Text, Image } from 'react-native'

import { useStaticData } from '../../contexts'
import { styles } from './styles'

export default function Matches() {
  const { usersData } = useStaticData()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Matches</Text>
      <View style={styles.users}>
        {usersData.map(({ id, image }) => (
          <View key={id} style={styles.user}>
            <Image source={{ uri: image }} resizeMode="cover" style={styles.avatar} />
          </View>
        ))}
      </View>
    </View>
  )
}
