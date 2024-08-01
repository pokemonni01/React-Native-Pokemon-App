import axios from "axios";
import Pokemon from "../types/Pokemon";

const baseUrl = "https://pokeapi.co/api/v2";

type PokemonListResponse = {
  results: Pokemon[];
};

type FetchPokemonsParams = {
  offset: number;
  limit: number;
};

export const fetchPokemons = async ({
  offset,
  limit,
}: FetchPokemonsParams=  { offset: 0, limit: 20 }) => {
  const url = `${baseUrl}/pokemon` + `?offset=${offset}&limit=${limit}`;
  const response = await axios.get<PokemonListResponse>(url);
  return response.data;
};
