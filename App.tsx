import React, { useEffect } from 'react'
import Routes from './src/navigation/Routes'
import { Platform, StatusBar } from 'react-native'
import { Colors } from './src/constants'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      changeNavigationBarColor(Colors.BLACK, true) // true = light icons
    }
  }, [])
  return (
    <>
      <StatusBar backgroundColor={Colors.BLACK} barStyle="light-content" />
      <Routes />
    </>
  )
}

export default App