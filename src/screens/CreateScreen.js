import { View, Text, StyleSheet } from 'react-native'

export const CreatedScreen = ({}) => {
  return (
    <View style={styles.center}>
      <Text>Create</Text>
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
