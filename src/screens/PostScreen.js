import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  Alert,
} from 'react-native'
import { DATA } from '../data'
import { THEME } from '../theme'

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam('postId')
  const post = DATA.find((p) => p.id === postId)

  const removeHandler = () => {
    Alert.alert('Удаление поста', 'Серьезно?', [
      {
        text: 'Отмена',
        // onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Удалить',
        style: 'destructive',
        onPress: () => console.log('DLETING ALL DATA'),
      },
    ])
  }
  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={styles.image} />
      <View>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button
        title="Удалить"
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      ></Button>
    </ScrollView>
  )
}
PostScreen.navigationOptions = ({ navigation }) => {
  const date = navigation.getParam('date')
  return {
    headerTitle: `Пост от ${new Date(date).toLocaleDateString()}`,
  }
}
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  textWrap: {
    padding: 10,
  },
  title: {
    fontFamily: 'open-regular',
  },
})
