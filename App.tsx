import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingScreen from "./src/screens/SettingScreen";
import { Provider as ReduxProvider } from "react-redux";
import { store, persistor } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { useSelector } from "react-redux";
import { RootState } from "./src/redux/store";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const AppContainer = () => {
    const isDarkModeEnabled = useSelector(
      (state: RootState) => state.settingReducer.isDarkModeEnabled
    );
    const theme = isDarkModeEnabled ? "dark" : "light";
    return (
      <NavigationContainer theme={theme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Home" }}
          />
          <Stack.Screen
            name="Setting"
            component={SettingScreen}
            options={{ title: "Setting" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <AppContainer />
      </PersistGate>
    </ReduxProvider>
  );
}
