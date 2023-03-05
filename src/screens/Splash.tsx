import { View, StyleSheet, Dimensions } from 'react-native'
import LottieView from 'lottie-react-native'
import { CommonActions, useNavigation } from '@react-navigation/native'
import splash from '../../assets/splash.json'


const size = Dimensions.get('window').width * 0.5

export function SplashScreen() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <LottieView
        style={{ width: size, height: size }}
        source={splash}
        autoPlay
        loop={false}
        resizeMode='contain'
        onAnimationFinish={() => navigation.dispatch(CommonActions.reset({
          index: 0,
          routes: [{ name: 'home' }]
        }))}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})