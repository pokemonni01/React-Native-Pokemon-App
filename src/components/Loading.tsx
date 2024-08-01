import { Chase } from "react-native-animated-spinkit";
import { Theme } from "../types/enums/Theme";
import baseStyling from "../core/style";
import colors from "../core/colors";

type LoadingProps = {
  theme: Theme;
};

export const Loading = (props: LoadingProps) => {
  const color = props.theme == Theme.Dark ? colors.dark : colors.light;
  return <Chase size={50} color={color.white} />;
};
