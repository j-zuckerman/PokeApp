import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { store } from './store/index';
import { Provider } from 'react-redux';
import Pokedex from './screens/Pokedex';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Pokedex />
      </Provider>
    );
  }
}
