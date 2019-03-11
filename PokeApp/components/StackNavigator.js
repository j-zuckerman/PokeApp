import React, { Component } from 'react';
import Pokedex from '../screens/Pokedex';
import PokemonDetails from '../screens/PokemonDetails';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    Pokedex: Pokedex,
    PokemonDetails: PokemonDetails
  },
  {
    initialRouteName: 'Pokedex'
  }
);

export default createAppContainer(AppNavigator);
