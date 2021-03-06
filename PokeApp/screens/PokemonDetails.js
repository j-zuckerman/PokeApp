import React from 'react';
import { fetchPokemon } from '../actions';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Card } from 'react-native-elements';

class PokemonDetails extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 0.95,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Image
          style={{ width: 300, height: 300 }}
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
            <Text style={styles.text}>
              #{this.props.data.id + ' '}
              {this.props.data.name.charAt(0).toUpperCase() +
                this.props.data.name.slice(1)}
            </Text>
          </View>
          <Text style={styles.text}>Height: {this.props.data.height}</Text>
          <Text style={styles.text}>Weight: {this.props.data.weight}</Text>
          <Text style={styles.text}>Abilities: </Text>
          <View style={{ flexDirection: 'row' }}>
            {this.props.data.abilities.map(ability => (
              <View
                style={{
                  backgroundColor: '#c3c3c3',
                  padding: 5,
                  borderRadius: 5,
                  alignSelf: 'flex-start',
                  margin: 10
                }}
              >
                <Text style={styles.text}>
                  {ability.ability.name.charAt(0).toUpperCase() +
                    ability.ability.name.slice(1) +
                    ' '}
                </Text>
              </View>
            ))}
          </View>
          <Text style={styles.text}>Types:</Text>
          <View style={{ flexDirection: 'row' }}>
            {this.props.data.types.map(type => (
              <View
                style={{
                  backgroundColor: '#c3c3c3',
                  padding: 5,
                  borderRadius: 5,
                  alignSelf: 'flex-start',
                  margin: 10
                }}
              >
                <Text style={styles.text}>
                  {type.type.name.charAt(0).toUpperCase() +
                    type.type.name.slice(1) +
                    ' '}
                </Text>
              </View>
            ))}
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: '#777'
  }
});

const mapStateToProps = state => {
  return { data: state.data.pokemonDetail };
};
export default connect(
  mapStateToProps,
  { fetchPokemon }
)(PokemonDetails);
