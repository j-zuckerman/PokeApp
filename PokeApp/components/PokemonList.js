import React, { Component } from 'react';
import { fetchPokemon, selectPokemon } from '../actions';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';

class PokemonList extends Component {
  componentDidMount() {
    this.props.fetchPokemon();
  }
  render() {
    if (this.props.pokemon.filteredPokemon !== null)
      return (
        <FlatList
          data={this.props.pokemon.filteredPokemon}
          renderItem={({ item }) => (
            <TouchableHighlight
              onPress={() => this.props.selectPokemon(item.id)}
            >
              <Text key={item.id}>
                {item.id + '-------'}
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Text>
            </TouchableHighlight>
          )}
        />
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
)(PokemonList);
