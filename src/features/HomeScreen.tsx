import { View, Text } from "react-native";
import { Loading } from "../components/Loading";
import { Theme } from "../types/enums/Theme";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { StyleSheet } from "react-native";
import colors from "../core/colors";
import { HomeScreenState } from "./homeSlice";
import { useEffect } from "react";
import pokemonApi from "../services/pokemonApi";
import { setHomeScreenState } from "./homeSlice";
import { AxiosError } from "axios";

const HomeScreen = () => {
  const isDarkModeEnabled = useSelector(
    (state: RootState) => state.persistedReducer.settingReducer.isDarkModeEnabled
  );
  const theme = isDarkModeEnabled ? Theme.Dark : Theme.Light;
  const styles = styling(theme);

  const state = useSelector((state: RootState) => state.homeReducer.homeScreenState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (state === HomeScreenState.INITIAL) {
      fetchData();
    }
  });

  const fetchData = async () => {
    dispatch(setHomeScreenState(HomeScreenState.LOADING));
    try {
      const data = await pokemonApi.fetchPokemons();
      console.log(data.results);
      dispatch(setHomeScreenState(HomeScreenState.SUCCESS));
    } catch(error: any) {
      dispatch(setHomeScreenState(HomeScreenState.ERROR));
    }
  }

  const LoadingState = () => {
    return (
      <View style={styles.loading}>
        <Loading theme={theme} />
      </View>
    );
  };

  const handleState = (state: HomeScreenState) => {
    switch (state) {
      case HomeScreenState.LOADING:
        return <LoadingState />;
      case HomeScreenState.SUCCESS:
        return <Text>Loaded</Text>;
      case HomeScreenState.ERROR:
        return <Text>Error</Text>;
    }
  }

  return (
    <View style={styles.container}>
      {handleState(state)}
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
    loading: { flex: 1, justifyContent: "center", alignItems: "center" },
  });
};

export default HomeScreen;
