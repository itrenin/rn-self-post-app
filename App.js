import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Alert, StyleSheet, Text, View } from 'react-native'
import AppLoading from 'expo-app-loading'
import { bootstrap } from './src/bootstrap'


export default function App() {
  const [isReady, setReady] = useState(false)

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setReady(true)}
        onError={(err) => console.log(err)}
      />
    )
  }

  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}
