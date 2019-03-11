import React from 'react';
import { fetchPokemon } from '../actions';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Card } from 'react-native-elements';

class PokemonDetails extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../assets/pokebg.png')}
        style={{ width: '100%', height: '100%' }}
      >
        <View
          style={{
            flex: 0.95,
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}
        >
          <Image
            style={{ width: 300, height: 300, position: 'absolute', top: 20 }}
            source={{
              uri: this.props.data.sprites.front_default
            }}
            resizeMode="stretch"
          />

          <Card>
            <View
              style={{
                flexDirection: 'row'
              }}
            >
              <Text style={{ fontSize: 14, color: '#a6a6a6' }}>
                #{this.props.data.id}
              </Text>
              <Text style={{ fontWeight: '600', color: '#777' }}>
                {this.props.data.name.charAt(0).toUpperCase() +
                  this.props.data.name.slice(1)}
              </Text>
            </View>
            <Text>Height: {this.props.data.height}</Text>
            <Text>Weight: {this.props.data.weight}</Text>
            <Text>Abilities: </Text>
            <View style={{ flexDirection: 'row' }}>
              {this.props.data.abilities.map(ability => (
                <Text>
                  {ability.ability.name.charAt(0).toUpperCase() +
                    ability.ability.name.slice(1) +
                    ' '}
                </Text>
              ))}
            </View>
            <Text>Types:</Text>
            <View style={{ flexDirection: 'row' }}>
              {this.props.data.types.map(type => (
                <Text>
                  {type.type.name.charAt(0).toUpperCase() +
                    type.type.name.slice(1) +
                    ' '}
                </Text>
              ))}
            </View>
          </Card>
        </View>
      </ImageBackground>
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
  return { data: state.data.pokemonDetail };
};
export default connect(
  mapStateToProps,
  { fetchPokemon }
)(PokemonDetails);
