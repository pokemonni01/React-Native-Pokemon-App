import { StyleSheet, View } from "react-native";
import colors from "../core/colors";
import { Theme } from "../types/enums/Theme";
import { Loading } from "./Loading";
import { StyleProp, ViewStyle } from "react-native";

type LoadingScreenProps = {
    theme: Theme;
};

export const LoadingScreen = (props: LoadingScreenProps) => {
    const styles = styleing(props.theme);
    return (
        <View style={styles.container}>
            <Loading theme={props.theme} />
        </View>
    );
}

const styleing = (theme: Theme) => {
    const color = theme == Theme.Dark ? colors.dark : colors.light;
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: color.background+"aa",
            position: 'absolute',
            width: '100%',
            height: '100%',
        },
    });
}

