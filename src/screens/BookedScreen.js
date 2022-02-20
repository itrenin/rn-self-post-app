import { View, Text, StyleSheet } from 'react-native'

export const BookedScreen = ({}) => {
  return (
    <View style={styles.center}>
      <Text>Booked</Text>
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
