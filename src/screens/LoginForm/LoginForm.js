import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TextInput,
  Animated,
  TouchableOpacity
} from 'react-native';

const AnimatedTextInput = new Animated.createAnimatedComponent(TextInput);

const { height, width } = Dimensions.get('window');

const createAnimation =(animation)=> {
  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-5, 0]
  })

  return {
    transform: [
      {
        translateY
      }
    ]
  }
}

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: new Animated.Value(0),
      password: new Animated.Value(0),
      button: new Animated.Value(0)
    }
  }


  componentDidMount = () => {
    const { email, password, button } = this.state;
    Animated.stagger(100, [
      Animated.timing(email, {
        toValue: 1,
        duration: 200
      }),
      Animated.timing(password, {
        toValue: 1,
        duration: 200
      }),
      Animated.timing(button, {
        toValue: 1,
        duration: 200
      })
    ]).start();
  };

  

  render() {
    const { email, password, button } = this.state;
    const emailAnimation = createAnimation(email);
    const passwordAnimation = createAnimation(password);
    const buttonAnimation = createAnimation(button);
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('../../assets/images/background.jpg')}
          style={{ height, width }}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontSize: 20 }}>Login</Text>
          </View>
          <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,.50)",
            paddingVertical: 10,
          }}>
            <AnimatedTextInput
              placeholder="Email"
              style={[styles.formInput, emailAnimation]}
            />
            <AnimatedTextInput
              placeholder='Password'
              style={[styles.formInput, passwordAnimation]}
            />
            <TouchableOpacity>
              <Animated.View style={[styles.button,buttonAnimation]}>
                <Text style={styles.buttonText}>Login</Text>
              </Animated.View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }} />
        </ImageBackground>

      </View>
    );
  }
}

const styles = {
  formInput: {
    width: 250,
    height: 35,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#FFF",
    color: "#333",
    backgroundColor: "#FFF",
  },
  button: {
    backgroundColor: 'tomato',
    height: 35,
    width: 250,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff'
  }
}
