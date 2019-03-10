import React, { Component } from 'react';
import { selectPokemon } from '../actions';
import { StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';

class Pokemon extends Component {
  render() {
    return (
      <View
        className="pokemon"
        onClick={() => this.props.selectPokemon(this.props.id)}
      >
        <Text>
          {this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}
        </Text>
      </View>
    );
  }
}

export default connect(
  null,
  { selectPokemon }
)(Pokemon);
