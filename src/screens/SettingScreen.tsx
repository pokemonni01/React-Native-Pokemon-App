import { View, Text, Switch, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { toggleDarkMode } from "../redux/settingSlice";
type Props = {};

const SettingScreen = () => {
  const isDarkModeEnabled = useSelector(
    (state: RootState) => state.settingReducer.isDarkModeEnabled
  );
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text>Dark Mode</Text>
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

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
  },
});

export default SettingScreen;
