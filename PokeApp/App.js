import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { store } from './store/index';
import { Provider } from 'react-redux';
import Nav from './components/StackNavigator';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Nav />
      </Provider>
    );
  }
}
