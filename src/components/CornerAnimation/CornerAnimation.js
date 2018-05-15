import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const { height,width } = Dimensions.get('window');

export default class CornerAnimation extends Component {
  constructor(props) {
    super(props);
    this.animation = new Animated.ValueXY(0);
  }

  startAnimation() {
    Animated.sequence([
      Animated.spring(this.animation.y, {
        toValue: height - 100 -60,
      }),
      Animated.spring(this.animation.x, {
        toValue: width - 100
        
      }),
      Animated.spring(this.animation.y, {
        toValue: 0
      }),
      Animated.spring(this.animation.x, {
        toValue: 0
      })
    ]).start()
  }

  render() {
    const animationStyle = {
      transform: this.animation.getTranslateTransform()
    }
    return (
      <View>
        <TouchableOpacity
          onPress={()=> this.startAnimation()}
        >
          <Animated.View
            style={[{height: 100,width: 100,position: 'absolute',top: 0,left: 0,backgroundColor: 'red',},animationStyle]}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
