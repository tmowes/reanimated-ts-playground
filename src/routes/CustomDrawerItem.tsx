import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'

export type CustomDrawerItemProps = {
  label: string
  icon: string
}

export default function CustomDrawerItem(props: CustomDrawerItemProps) {
  const { label, icon } = props
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 48,
        borderRadius: 8,
        marginBottom: 8,
        alignItems: 'center',
        paddingLeft: 8,
      }}
      onPress={() => console.log(label)}
    >
      <AntDesign name={icon} size={24} color="white" />
      <Text style={{ color: 'white', marginLeft: 12 }}>{label}</Text>
    </TouchableOpacity>
  )
}
