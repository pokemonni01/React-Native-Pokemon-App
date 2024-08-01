import { View, Text, Switch, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { toggleDarkMode } from "../redux/settingSlice";
import baseStyling from "../core/style";
import colors from "../core/colors";
import { Theme } from "../types/enums/Theme";

type Props = {};

const SettingScreen = () => {
  const isDarkModeEnabled = useSelector(
    (state: RootState) => state.persistedReducer.settingReducer.isDarkModeEnabled
  );
  const baseStyle = baseStyling(isDarkModeEnabled ? Theme.Dark : Theme.Light);
  const styles = styling(isDarkModeEnabled ? Theme.Dark : Theme.Light);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={baseStyle.textStyle}>Dark Mode</Text>
        <Switch
          value={isDarkModeEnabled}
          onValueChange={() => {
            dispatch(toggleDarkMode());
          }}
        />
      </View>
    </View>
  );
};

const styling = (theme: Theme) => {
  const color = theme == Theme.Dark ? colors.dark : colors.light;
  return StyleSheet.create({
    container: {
      width: "100%",
      padding: 16,
      backgroundColor: color.background,
      flex: 1,
    },
    item: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 10,
      alignItems: "center",
    },
  });
};

export default SettingScreen;
