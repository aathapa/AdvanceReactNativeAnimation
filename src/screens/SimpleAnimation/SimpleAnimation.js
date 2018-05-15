import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  SimpleOpacity,
  SimpleTranslate,
  SimpleScale
} from '../../components/';

export default class SimpleAnimation extends Component {
  render() {
    return (
      <View>
        <SimpleOpacity />
        <SimpleTranslate />
        <SimpleScale />
      </View>
    );
  }
}
