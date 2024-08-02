import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../core/colors";
import { Theme } from "../types/enums/Theme";
import { Button, Icon } from "react-native-paper";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";

type RetryButtonProps = {
  onPress: () => void;
  theme: Theme;
};

export const RetryButton = (props: RetryButtonProps) => {
  const color = props.theme == Theme.Dark ? colors.dark : colors.light;
  return (
    <Button
      mode="outlined"
      icon={({}) => <Icon source="reload" size={20} color={color.white} />}
      onPress={props.onPress}
    >
      <Text style={styling(props.theme).text}>Retry</Text>
    </Button>
  );
};

const styling = (theme: Theme) => {
  const color = theme == Theme.Dark ? colors.dark : colors.light;
  return StyleSheet.create({
    text: {
      color: color.white,
    },
  });
};
