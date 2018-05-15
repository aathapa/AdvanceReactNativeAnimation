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
    this.state = {
      animation: new Animated.Value(0)
    }
  }

  startAnimation() {
    Animated.timing(this.state.animation, {
      toValue: 300, // - for moving upward
      duration: 1000
    }).start(() => {
      this.state.animation.setValue(1)
    })
  }

  render() {
    const animationStyle = {
      transform: [
        {
          translateY: this.state.animation //translateX from X axis
        }
        
      ] 
    }
    return (
      <View style={{marginTop: 15}}>
        <Text
          style={{ fontSize: 20 }}
        > Translate </Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Animated.View style={[{ height: 70, width: 70, backgroundColor: '#2196F3', }, animationStyle]} />
          </View>

          <TouchableOpacity style={{ flex: 1 }} onPress={() => this.startAnimation()}>
            <Text>Start Now</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
