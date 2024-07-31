import axios from "axios";
import Pokemon from "../types/Pokemon";
const baseUrl = "https://pokeapi.co/api/v2";

type PokemonListResponse = {
    results: Pokemon[];
    };

type PokemonApi = {
  fetchPokemons: () => Promise<PokemonListResponse>;
};

const pokemonApi: PokemonApi = {
  fetchPokemons: async () => {
    const url = `${baseUrl}/pokemon`;
    const response = await axios.get<PokemonListResponse>(url,);
    return response.data;
},
};

export default pokemonApi;
