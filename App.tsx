import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as ReduxProvider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import colors from "./src/core/colors";
import HomeScreen from "./src/features/HomeScreen";
import { persistor, RootState, store } from "./src/redux/store";
import SettingScreen from "./src/screens/SettingScreen";
import { Theme } from "./src/types/enums/Theme";
import { RootStackParamList } from "./src/types/RootStackParamList";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const AppContainer = () => {
    const isDarkModeEnabled = useSelector(
      (state: RootState) =>
        state.persistedReducer.settingReducer.isDarkModeEnabled
    );
    const theme = isDarkModeEnabled ? "dark" : "light";
    const color = theme == Theme.Dark ? colors.dark : colors.light;
    return (
      <NavigationContainer theme={theme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Home",
            }}
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
