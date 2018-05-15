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
    this.animation =new Animated.Value(1)
  }

  startSpringAnimation() {
    Animated.spring(this.animation, {
      toValue: 2,
      friction: 3,
      tension: 200
    }).start(() => {
      this.animation.setValue(1)
    })
  }

  startAnimation() {
    Animated.timing(this.animation, {
      toValue: 2, // - for inverting scale 
      duration: 1000
    }).start(() => {
      this.animation.setValue(1)
    })
  }

  render() {
    const animationStyle = {
      transform: [
        {
          scale: this.animation //scale Y for Y axis; scaleX  for X axis
        }

      ]
    }
    return (
      <View style={{ marginTop: 15 }}>
        <Text
          style={{ fontSize: 20 }}
        > Scale </Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Animated.View style={[{ height: 70, width: 70, backgroundColor: '#3F51B5', }, animationStyle]} />
          </View>

          <TouchableOpacity style={{ flex: 1 }} onPress={() => this.startAnimation()}>
            <Text>Start Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1 }} onPress={() => this.startSpringAnimation()}>
            <Text>Spring Animation</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
