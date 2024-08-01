import { Card } from "react-native-paper";
import { Text, View, Image, StyleSheet } from "react-native";
import Pokemon, { getImageUrl } from "../types/Pokemon";
import { Theme } from "../types/enums/Theme";
import colors from "../core/colors";

type PokemonItemProps = {
  pokemon: Pokemon;
  theme: Theme;
};

const upperCaseFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const PokemonItem = (props: PokemonItemProps) => (
  <View style={styling(props.theme).container}>
    <Card style={styling(props.theme).card}>
      <Card.Content>
        <View style={{ alignItems: "center", flexDirection: "row" }}>
          <Image
            style={styling(props.theme).image}
            source={{ uri: getImageUrl(props.pokemon.url) }}
          />
          <Text style={styling(props.theme).text}>
            {upperCaseFirstLetter(props.pokemon.name)}
          </Text>
        </View>
      </Card.Content>
    </Card>
  </View>
);

const styling = (theme: Theme) => {
  const color = theme == Theme.Dark ? colors.dark : colors.light;
  return StyleSheet.create({
    container: {
      marginHorizontal: 16,
      marginVertical: 8,
    },
    card: {
      width: "100%",
      backgroundColor: color.card,
      flex: 1,
    },
    image: {
      width: 50,
      height: 50,
      marginEnd: 16,
    },
    text: {
      color: color.white,
    },
  });
};
