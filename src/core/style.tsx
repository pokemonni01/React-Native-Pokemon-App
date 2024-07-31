import { StyleSheet } from "react-native";
import colors from "./colors";
import { Theme } from "../types/enums/Theme";

const baseStyling = (theme: Theme) => {
    const color = theme == Theme.Dark ? colors.dark : colors.light;
    return StyleSheet.create({
        textStyle: {
        color: color.white,
        },
    });
}
  

export default baseStyling;
