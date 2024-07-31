import { StyleSheet } from "react-native";
import colors from "./colors";

const baseStyling = (theme: string) => {
    const color = theme === "dark" ? colors.dark : colors.light;
    return StyleSheet.create({
        textStyle: {
        color: color.white,
        },
    });
}
  

export default baseStyling;
