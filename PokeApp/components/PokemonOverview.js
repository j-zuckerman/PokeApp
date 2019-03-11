import React, { Component } from 'react';
import { fetchPokemon, selectPokemon } from '../actions';
import { StyleSheet, Text, View, Image, FlatList, Button } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

class PokemonOverview extends Component {
  render() {
    if (this.props.data !== null)
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
              uri: this.props.data.sprites.front_default
            }}
          />

          <Text>
            {this.props.data.name.charAt(0).toUpperCase() +
              this.props.data.name.slice(1)}
          </Text>
          <Button
            title="View Details"
            onPress={() => this.props.navigation.navigate('PokemonDetails')}
          />
        </View>
      );
    else return null;
  }
}

const mapStateToProps = state => {
  return { data: state.data.pokemonDetail };
};
const Overview = connect(
  mapStateToProps,
  { fetchPokemon, selectPokemon }
)(PokemonOverview);
export default withNavigation(Overview);
