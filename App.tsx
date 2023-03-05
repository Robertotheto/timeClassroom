import { StyleSheet, View, StatusBar } from 'react-native';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter'
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
  })
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor='transparent'
        translucent
        barStyle="light-content" />
      {fontsLoaded ? <Routes /> : <Loading />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#023047',
  },
});
