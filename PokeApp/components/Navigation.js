import React, { Component } from 'react';
import { fetchPokemon, selectPokemon } from '../actions';
import { StyleSheet, Text, View, Picker } from 'react-native';
import { connect } from 'react-redux';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generation: 'all'
    };
  }

  updateGeneration = gen => {
    this.setState({ generation: gen });
  };
  render() {
    return (
      <View
        style={{
          height: 50,
          flexDirection: 'row',
          margin: 10,
          alignItems: 'center',
          marginBottom: 0,
          backgroundColor: '#e9e9e9',
          borderBottomWidth: 2,
          borderColor: '#d3d2d3',
          justifyContent: 'space-around',
          borderRadius: 5
        }}
      >
        <Picker
          style={{ height: 50, width: 100 }}
          selectedValue={this.state.generation}
          onValueChange={itemValue => this.setState({ generation: itemValue })}
        >
          <Picker.Item label="1" value="1" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <Text style={{ color: '#b3b6b3', fontWeight: '600', fontSize: 12 }}>
          {this.state.generation}
        </Text>
        <Text style={{ color: '#b3b6b3', fontWeight: '600', fontSize: 12 }}>
          REGION
        </Text>
        <Text style={{ color: '#b3b6b3', fontWeight: '600', fontSize: 12 }}>
          TYPE
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => {
  return { pokemon: state.pokemon };
};
export default connect(
  mapStateToProps,
  { fetchPokemon, selectPokemon }
)(Navigation);
