/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import {  ImageBackground, StatusBar, View } from 'react-native'
import React from 'react'
import SystemNavigationBar from 'react-native-system-navigation-bar'
import Main from './components/main';
// import Main
//  from './components/main'
SystemNavigationBar.navigationHide();

export default function App() {
  
  return (<>
  <StatusBar
    backgroundColor="transparent"
    translucent
  />
    <ImageBackground
        style={{
            flex: 1,
            backgroundColor: 'black',
            position: 'absolute',
            width: '100%',
            height: '100%',

        }}
        // source={"../images/bg.png"}
        source = {require('./images/bg.png')}
        resizeMode='stretch'
        />
        <View style={{
            flex: 1,
            padding: 50,
            marginTop: 10,

            backgroundColor: 'transparent',


        }}>
        <Main />
        </View>
        </>
  )
}
