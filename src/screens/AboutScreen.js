import { View, Text, StyleSheet } from 'react-native'

export const AboutScreen = ({}) => {
  return (
    <View style={styles.center}>
      <Text>About</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
