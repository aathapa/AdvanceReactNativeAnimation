import React, { Component } from 'react';
import { 
  View,
  Text,
  Animated,
  TouchableWithoutFeedback
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
 
export default class FAB extends Component{
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(0)
    }
  }

  toggleAnimation() {
    const toValue = this.open ? 0 : 1;
    Animated.timing(this.state.animation, {
      toValue,
      duration: 200,
      useNativeDriver: true
    }).start()
    this.open = !this.open;
  }
  
  render() {
    const cartInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0,-70]
    })
    const reloadInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, - 140]
    })

    const reloadStyle = {
      transform: [
        {
        scale: this.state.animation,
        },
        {
        translateY: reloadInterpolate  
        }
      ]
    }

    const cartStyle = {
      transform: [
        { scale: this.state.animation },
        {translateY: cartInterpolate}
      ]
    }
    const labelPositionInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [-30, -90],
    });

    const opacityInterpolate = this.state.animation.interpolate({
      inputRange: [0, 0.8, 1],
      outputRange: [0, 0, 1],
    });

    const labelStyle = {
      opacity: opacityInterpolate,
      transform: [
        {
          translateX: labelPositionInterpolate,
        },
      ],
    };

    const bgInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 30]
      
    })

    const bgStyle = {
      transform: [
        {scale: bgInterpolate}
      ]
    }
 
    return (
      <View
        style={styles.container}
      >
        <Animated.View style={[styles.background,bgStyle]} />  
        <TouchableWithoutFeedback
          onPress={()=> alert('Reload')}
        >
          <Animated.View
            style={[styles.button,styles.other,reloadStyle]}
          >
            <Animated.Text style={[styles.label, labelStyle]}>Reload</Animated.Text>  
            <IonIcons name="md-refresh"  size={30} color='#000' />
          </Animated.View>

        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={()=> alert('Cart')}
        >
          <Animated.View
            style={[styles.button,styles.other,cartStyle]}
          >
            <Animated.Text style={[styles.label]}>Cart</Animated.Text>
            <IonIcons name="md-cart" size={30} color='#000' />
          </Animated.View>

        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={()=> this.toggleAnimation()}
        >
          <View
            style={[styles.button,styles.pay]}
          >
            <Animated.Text style={[styles.label,labelStyle]}> Pay </Animated.Text>
            <IonIcons name="md-home" size={30} color='#fff' />
          </View>

        </TouchableWithoutFeedback>
      </View>
    ) 
  }
}

const styles = {
  container: {
    flex: 1,
    
  },
  background: { 
    backgroundColor: '#a5b1c2',
 position: "absolute",
    width: 69,
    height: 60,
    bottom: 20,
    right: 20,
    borderRadius: 30,
  },
  label: {
    color: "#FFF",
    position: "absolute",
    fontSize: 18,
    backgroundColor: "transparent",

  },
  button: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#333",
    shadowOpacity: 0.7,
    shadowOffset: { x: 5, y: 0 },
    shadowRadius: 2,
    borderRadius: 30,
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  payText: {
    color: "#FFF",
  },
  pay: {
    backgroundColor: "#00B15E",
  },
  other: {
    backgroundColor: '#fff'
  },
}