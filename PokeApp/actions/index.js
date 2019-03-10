import pokeApi from '../apis/pokeApi';

//Action creators
export const fetchPokemon = () => async dispatch => {
  const response = await pokeApi.get('pokemon/?limit=802');

  dispatch({ type: 'POKEMON_FETCHED', payload: response.data.results });
};

export const selectGeneration = generation => {
  return {
    type: 'GENERATION_SELECTED',
    payload: generation
  };
};

export const selectPokemon = pokemonId => async dispatch => {
  const response = await pokeApi.get('pokemon/' + pokemonId);

  dispatch({ type: 'POKEMON_SELECTED', payload: response.data });
};

export const searchPokemon = pokemon => {
  return {
    type: 'POKEMON_SEARCHED',
    payload: pokemon
  };
};
