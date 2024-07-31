import { View, Text, Switch, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { toggleDarkMode } from "../redux/settingSlice";
import baseStyling from "../core/style";
import colors from "../core/colors";

type Props = {};

const SettingScreen = () => {
  const isDarkModeEnabled = useSelector(
    (state: RootState) => state.settingReducer.isDarkModeEnabled
  );
  const baseStyle = baseStyling(isDarkModeEnabled ? "dark" : "light");
  const styles = styling(isDarkModeEnabled ? "dark" : "light");
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

const styling = (theme: String) => {
  const color = theme === "dark" ? colors.dark : colors.light;
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
