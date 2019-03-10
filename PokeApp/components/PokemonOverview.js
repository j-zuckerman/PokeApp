import React, { Component } from 'react';
import { fetchPokemon, selectPokemon } from '../actions';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { connect } from 'react-redux';

class PokemonOverview extends Component {
  render() {
    console.log('poop');
    if (this.props.pokemon.pokemonDetail !== null)
      return (
        <View>
          <Image
            style={{ width: 200, height: 200 }}
            source={{
              uri: this.props.pokemon.pokemonDetail.sprites.front_default
            }}
          />
        </View>
      );
    else return null;
  }
}

const mapStateToProps = state => {
  return { pokemon: state.pokemon };
};
export default connect(
  mapStateToProps,
  { fetchPokemon, selectPokemon }
)(PokemonOverview);
