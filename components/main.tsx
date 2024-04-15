/* eslint-disable prettier/prettier */
import { View,  Image } from 'react-native'
import React from 'react'

export default function Main() {
  return (
    <View style={{
        flex: 1,
        marginVertical: 100,
    }}>
      <Image
        style={{
            flex: 2,
            width: '150%',
            height: '150%',
            marginHorizontal: '-25%',
        }}
        resizeMode='contain'
        source = {require('../images/upload.png')}

        />
    <Image
        style={{
            flex: 1,
            marginHorizontal: '10%',
            
            width: '80%',
            height: '80%',
        }}
        resizeMode='contain'
        source = {require('../images/render.png')}        />

    </View>
  )
}