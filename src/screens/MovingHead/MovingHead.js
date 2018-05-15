import React, { Component } from 'react';
import {
  View,
  Text,
  PanResponder,
  Animated,
  Image,
} from 'react-native';


export default class MovingHead extends Component {
  constructor(props) {
    super(props);
    this.animatedData = [
      {
        image: require('../../assets/images/photo.jpg'),
        animation: new Animated.ValueXY(0),
        text: 'Drag'
      },
      {
        image: require('../../assets/images/photo.jpg'),
        animation: new Animated.ValueXY(0)
      },
      {
        image: require('../../assets/images/photo.jpg'),
        animation: new Animated.ValueXY(0)
      }
    ]
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        this.animatedData.map(({ animation }, index) => {
          animation.extractOffset();
          animation.setValue({ x: 0, y: 0 });
        })
      },
      onPanResponderMove: (e, { dx, dy }) => {
        this.animatedData.map(({ animation }, index) => {
          return Animated.sequence([
            Animated.delay(index * 30),
            Animated.spring(animation, {
              toValue: { x: dx, y: dy },
            }),
          ]).start();
        });
      }
    })
  }

  render() {
    return (
      <View

        style={{  alignItems: 'center', justifyContent: 'center',marginTop: 60 }}>
        {
          this.animatedData.map((item, index) => {
            return (
              <Animated.Image
                {...this._panResponder.panHandlers}
                
                key={index}  
                source={item.image}
                style={{
                  transform: 
                    item.animation.getTranslateTransform()
                  ,
                  height: 50, width: 50, borderRadius: 25, position: 'absolute', alignItems: 'center', justifyContent: 'center'
                }}
              />
            )
          }).reverse()
        }
      </View>
    );
  }
}
