
import React, { Component } from 'react';
import AppNavigator from './src/AppNavigator';
import { YellowBox } from 'react-native';


export default class App extends Component {
  constructor() {
    super();
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);
  }
  render() {
    return (
      <AppNavigator />
    );
  }
}
