/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ChooseDifficulty from './src/screens/ChooseDifficulty';
import Game from './src/screens/Game';
import About from './src/screens/About';
import { createStackNavigator, createAppContainer } from "react-navigation";




const App = createStackNavigator({
  Home: {
    screen: ChooseDifficulty
  },
  Game: {
    screen: Game
  },
  Abouts: {
    screen: About
  }
},
    {
      headerMode: 'none',
      defaultNavigationOptions: {
        gesturesEnabled: false
      }
    });

export default createAppContainer(App)
