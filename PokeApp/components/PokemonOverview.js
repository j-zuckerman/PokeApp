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
            resizeMode="stretch"
          />
          <View
            style={{
              backgroundColor: '#c3c3c3',
              padding: 5,
              borderRadius: 5,
              alignSelf: 'flex-start',
              margin: 10
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: '600', color: 'white' }}>
              {this.props.data.name.charAt(0).toUpperCase() +
                this.props.data.name.slice(1)}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#9E2A2B',
              padding: 5,
              borderRadius: 5,
              alignSelf: 'flex-start',
              margin: 10,
              color: '#fff'
            }}
          >
            <Button
              title="View Details"
              color="white"
              onPress={() => this.props.navigation.navigate('PokemonDetails')}
            />
          </View>
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
