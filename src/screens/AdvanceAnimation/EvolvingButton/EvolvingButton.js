import React, { Component } from 'react';
import { 
  View,
  Text,
  Animated
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
 
export default class EvolvingButton extends Component{
  constructor(props) {
    super(props);
    this.animation = new Animated.Value(0);
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={styles.bar}>
          <Icons name='format-bold' size={20} color='#fff' />
          <Icons name='format-italic' size={20} color='#fff' />
          <Icons name='format-underlined' size={20} color='#fff' />
        </Animated.View>
      </View>    
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bar: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#0984e3',

  }
}