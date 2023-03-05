import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from "../screens/Home";
import { SplashScreen } from '../screens/Splash';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#023047' } }}
    >
      <Screen
        name="splash"
        component={SplashScreen}
      />
      <Screen
        name="home"
        component={HomeScreen}
        options={{ gestureEnabled: true }}
      />
    </Navigator>
  );
}