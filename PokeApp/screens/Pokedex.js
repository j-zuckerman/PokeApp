import React from 'react';
import { fetchPokemon } from '../actions';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import PokemonList from '../components/PokemonList';
import PokemonOverview from '../components/PokemonOverview';

class Pokedex extends React.Component {
  static navigationOptions = {
    title: 'Pokedex'
  };
  render() {
    return (
      <React.Fragment>
        <View style={styles.container}>
          <PokemonOverview />
          <PokemonList />
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  }
});

const mapStateToProps = state => {
  return { data: state.data };
};
export default connect(
  mapStateToProps,
  { fetchPokemon }
)(Pokedex);
