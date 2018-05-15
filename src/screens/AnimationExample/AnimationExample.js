import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import DecayAnimation from '../../components/Decay/DecayAnimation';

const basicAnimationExample = [
  { name: 'Decay Animation', route: 'DecayAnimation' },
  { name: 'Corner Animation', route: 'CornerAnimaton' },
  { name: 'Moving Heads', route: 'MovingHead' },
  { name: 'Draggable Cards', route: 'DragCards' },
  { name: 'Login Form', route: 'LoginForm' },
  { name: 'App Notification', route: 'AppNotification' },
  { name: 'Animated Questions', route: 'AnimatedQuestions' },
  
 
]
export default class AnimationExample extends Component {

  changeRoute(route) {
    this.props.navigation.navigate(route);
  }

  render() {
    return (
      <View >
        {
          basicAnimationExample.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => this.changeRoute(item.route)}
                style={{padding: 15,}}
              >
                <Text>{item.name}</Text>
              </TouchableOpacity>
            )
          })
        }

      </View>
    );
  }
}
