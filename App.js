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
import Easy from './src/screens/Easy';
import About from './src/screens/About';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Medium from "./src/screens/Medium";
import Hard from "./src/screens/Hard";




const App = createStackNavigator({
  Home: {
    screen: ChooseDifficulty
  },
  Game: {
    screen: Easy
  },
  Medium: {
    screen: Medium
  },
  Hard: {
    screen: Hard
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
