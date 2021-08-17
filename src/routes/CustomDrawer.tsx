import React, { useState } from 'react'
import { TouchableOpacity, Image, View, Text } from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer'

import CustomDrawerItem from './CustomDrawerItem'
import { menuData } from './menuData'

export default function CustomDrawer(props: DrawerContentComponentProps) {
  const { navigation } = props
  return (
    <DrawerContentScrollView
      scrollEnabled
      contentContainerStyle={{ flex: 1 }}
      {...props}
    >
      <View style={{ flex: 1, paddingHorizontal: 12 }}>
        {/* Close */}
        <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.closeDrawer()}
          >
            <Feather name="x" size={32} color="white" />
          </TouchableOpacity>
        </View>
        {/* Profile */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => console.log('PROFILE')}
        >
          <Image
            source={{ uri: 'https://github.com/tmowes.png' }}
            resizeMode="cover"
            style={{ width: 56, height: 56, borderRadius: 12 }}
          />
          <View style={{ marginLeft: 16 }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Julius Mowius</Text>
            <Text style={{ color: 'gray' }}>Desenvolvedor mobile</Text>
          </View>
        </TouchableOpacity>

        {/* Menu */}
        <View style={{ flex: 1, marginTop: 32 }}>
          {menuData.map(item => (
            <CustomDrawerItem key={item.label} {...item} />
          ))}
        </View>
      </View>
    </DrawerContentScrollView>
  )
}
