import { View, Text, Switch, StyleSheet } from "react-native";

type Props = {};

const SettingScreen = () => (
  <View style={styles.container}>
    <View style={styles.item}>
      <Text>Dark mode</Text>
      <Switch />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
  },
  item: { flexDirection: "row", justifyContent: "space-between", padding: 10, alignItems: "center" },
});

export default SettingScreen;
