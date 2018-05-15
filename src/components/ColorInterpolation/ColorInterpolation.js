import React, { Component } from 'react';
import {  View, Text,Animated,TouchableOpacity } from 'react-native';

export default class ColorInterpolation extends Component {
  constructor(props) {
    super(props);
    this.animation = new Animated.Value(0)
  }

  startAnimation() {
    Animated.timing(this.animation, {
      toValue: 1, // - for inverting scale 
      duration: 1500
    }).start(() => {
      this.animation.setValue(0)
    })
  }

  render() {
    const bgColor = this.animation.interpolate({
      inputRange: [0,1],
      outputRange: ['#3F51B5', '#4CAF50']
    })
    const color = this.animation.interpolate({
      inputRange: [0,1],
      outputRange: ['#fff', '#000']
    })
    const animationStyle = {
      backgroundColor: bgColor
    }
    return (
      <View style={{ marginTop: 15 }}>
        <Text
          style={{ fontSize: 20 }}
        > Color/Bg </Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Animated.View style={[{ height: 70, width: 70, }, animationStyle]}>
              <Animated.Text style={{color}}>Press Start to change color</Animated.Text>  
            </Animated.View>  
          </View>

          <TouchableOpacity style={{ flex: 1 }} onPress={() => this.startAnimation()}>
            <Text>Start Now</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}