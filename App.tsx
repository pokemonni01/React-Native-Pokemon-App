import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingScreen from './src/screens/SettingScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Setting">
        <Stack.Screen
          name="Setting"
          component={SettingScreen}
          options={{title: 'Setting'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}