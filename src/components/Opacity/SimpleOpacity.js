import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  TouchableOpacity
} from 'react-native';

export default class SimepleOpacity extends Component {
  constructor(props) {
    super(props);
    this.animation= new Animated.Value(1)
  }

  startAnimation() {
    Animated.timing(this.animation, {
      toValue: 0,
      duration: 1000
    }).start(() => {
      this.animation.setValue(1)
    })
  }
  
  render() {
    const animationStyle = {
      opacity: this.animation
    }
    return (
      <View>
        <Text
          style={{fontSize: 20}}
        > Opacity </Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
            <Animated.View style={[{ height: 70, width: 70, backgroundColor: 'blue', }, animationStyle]} />
          </View>  
          
          <TouchableOpacity style={{flex: 1}} onPress={() => this.startAnimation()}>
            <Text>Start Now</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    );
  }
}
