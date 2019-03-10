import React, { Component } from 'react';
import { fetchPokemon, selectPokemon } from '../actions';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { connect } from 'react-redux';

class PokemonOverview extends Component {
  render() {
    if (this.props.pokemon.pokemonDetail !== null)
      return (
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Image
            style={{ width: 200, height: 200 }}
            source={{
              uri: this.props.pokemon.pokemonDetail.sprites.front_default
            }}
          />

          <Text>
            {this.props.pokemon.pokemonDetail.name.charAt(0).toUpperCase() +
              this.props.pokemon.pokemonDetail.name.slice(1)}
          </Text>
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
