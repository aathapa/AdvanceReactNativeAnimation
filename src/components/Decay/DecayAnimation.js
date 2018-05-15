import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  PanResponder
} from 'react-native';

export default class DecayAnimation extends Component {
  constructor(props) {
    super(props);
    this.animation = new Animated.ValueXY(0,0);
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (() => {
        this.animation.extractOffset();
      }),
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.animation.x,
          dy: this.animation.y
        }
      ]),
      onPanResponderRelease: ((e, { vx, vy }) => {
        Animated.decay(this.animation, {
          velocity: { x: vx, y: vy}
        }).start()
      })
      })
    }

  render() {
    const animationStyle = {
      transform: this.animation.getTranslateTransform()
    }
    return (
      <View style={{ flex: 1,justifyContent: 'center',alignItems: 'center'}}>
        <Animated.View
          {...this._panResponder.panHandlers}  
          style={[{ backgroundColor: '#673AB7', height: 50, width: 50 },animationStyle]}
          
        />
      </View>
    );
  }
}
