import { createSlice } from "@reduxjs/toolkit";
import Pokemon from "../types/Pokemon";

export enum HomeScreenState {
    INITIAL,
    LOADING,
    SUCCESS,
    ERROR,
}

const initialState = {
    pokemons: [] as Pokemon[],
    homeScreenState: HomeScreenState.INITIAL,
};

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
        },
        setHomeScreenState: (state, action) => {
            state.homeScreenState = action.payload;
        }
    },
});

export const { setPokemons, setHomeScreenState } = homeSlice.actions;
export const homeReducer = homeSlice.reducer;
