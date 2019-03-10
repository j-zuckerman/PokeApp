const initialState = {
  pokemon: null,
  filteredPokemon: null,
  pokemonDetail: null
};

var pokemonData,
  gen1,
  gen2,
  gen3,
  gen4,
  gen5,
  gen6,
  gen7 = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'POKEMON_FETCHED':
      var count = 1;
      action.payload.forEach(pokemon => {
        pokemon.id = count;
        count = count + 1;
      });
      return {
        ...state,
        pokemon: action.payload,
        filteredPokemon: action.payload
      };
    case 'GENERATION_SELECTED':
      switch (action.payload) {
        case '0':
          return { ...state, filteredPokemon: state.pokemon };
        case '1':
          gen1 = state.pokemon.filter((pokemon, index) => index < 151);
          return { ...state, filteredPokemon: gen1 };
        case '2':
          gen2 = state.pokemon.filter(
            (pokemon, index) => index > 150 && index < 251
          );
          return { ...state, filteredPokemon: gen2 };
        case '3':
          gen3 = state.pokemon.filter(
            (pokemon, index) => index > 250 && index < 386
          );
          return { ...state, filteredPokemon: gen3 };
        case '4':
          gen4 = state.pokemon.filter(
            (pokemon, index) => index > 385 && index < 493
          );
          return { ...state, filteredPokemon: gen4 };
        case '5':
          gen5 = state.pokemon.filter(
            (pokemon, index) => index > 492 && index < 649
          );
          return { ...state, filteredPokemon: gen5 };
        case '6':
          gen6 = state.pokemon.filter(
            (pokemon, index) => index > 648 && index < 721
          );
          return { ...state, filteredPokemon: gen6 };
        case '7':
          gen7 = state.pokemon.filter(
            (pokemon, index) => index > 720 && index < 802
          );
          return { ...state, filteredPokemon: gen7 };
        default:
          return state;
      }
    case 'POKEMON_SELECTED':
      console.log(action.payload);
      return { ...state, pokemonDetail: action.payload };
    case 'POKEMON_SEARCHED':
      const searchedPokemon = state.pokemon.filter(
        pokemon => action.payload.toUpperCase() === pokemon.name.toUpperCase()
      );
      return { ...state, filteredPokemon: searchedPokemon };
    default:
      return state;
  }
};
