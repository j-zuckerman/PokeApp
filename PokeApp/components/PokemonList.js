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
    if (this.props.data !== null)
      return (
        <FlatList
          data={this.props.data}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                margin: 10
              }}
            >
              <Text style={styles.pokemonNumber}>#{item.id} </Text>
              <Text style={styles.pokemonName}>
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Text>
              <View
                style={{
                  height: 80,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <View style={styles.line} />

                <TouchableHighlight
                  onPress={() => this.props.selectPokemon(item.id)}
                >
                  <Image
                    source={require('../assets/pokeOutline.png')}
                    resizeMode="stretch"
                    style={{ marginTop: -6, height: 50, width: 50 }}
                  />
                </TouchableHighlight>
              </View>
            </View>
          )}
        />
      );
    else return null;
  }
}

const styles = StyleSheet.create({
  pokeball: {
    backgroundColor: 'red',
    marginTop: 10,
    marginBottom: 10,
    padding: 10
  },
  pokemonNumber: {
    marginTop: 55,
    fontSize: 11,
    color: '#bbb8b6'
  },

  pokemonName: {
    marginTop: 55,
    color: '#555',
    fontWeight: '700',
    fontSize: 11
  },
  line: { height: 60, width: 2, backgroundColor: '#bababb' }
});

const mapStateToProps = state => {
  return { data: state.data.filteredPokemon };
};
export default connect(
  mapStateToProps,
  { fetchPokemon, selectPokemon }
)(PokemonList);
