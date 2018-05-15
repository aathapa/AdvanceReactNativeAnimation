import React, { Component } from 'react';
import { 
  View,
  Text,
  Animated,
  TextInput,
  Dimensions,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

const { height, width } = Dimensions.get('window');
 
export default class EvolvingButton extends Component{
  constructor(props) {
    super(props);
    this.animation = new Animated.Value(0);
  }

  toggleAnimation() {
    const toValue = this.open ? 0 : 1
    Animated.timing(this.animation, {
      toValue,
      duration: 500
    }).start(() => {
      this.open ? this.input.blur() : this.input.focus();
      this.open = !this.open;
    })
  }

  render() {

    const widthInterpolate = this.animation.interpolate({
      inputRange: [0, .5],
      outputRange: [60, width - 40],
      extrapolate: 'clamp'
    })

    const textInputInterpolation = this.animation.interpolate({
      inputRange: [0.8, 1],
      outputRange: [50, 150],
      extrapolate: 'clamp'
    })

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.editor,{width: widthInterpolate}]}>
          <Animated.View style={styles.bar}>
            <Animated.View style={[styles.toolbar,{opacity: this.animation}]}>
              <Icons name='format-bold' size={18} color='#fff' />
              <Icons name='format-italic' size={18} color='#fff' />
              <Icons name='format-underlined' size={18} color='#fff' />
              <View style={styles.rightInnerBar}>
                <Icons name="link" color="#FFF" size={20} />
                <Icons name="image" color="#FFF" size={20} />
                <Icons name="keyboard-arrow-down" color="#FFF" size={20} />
              </View>
            </Animated.View>
            <Animated.View
              style={[StyleSheet.absoluteFill, styles.center]}
            >
              <TouchableWithoutFeedback
                onPress={() => this.toggleAnimation()}
              >
                <View>
                  <Text style={{color: '#fff'}}>Write</Text>
                </View>
              </TouchableWithoutFeedback>
              
            </Animated.View>
          </Animated.View>
          <Animated.View style={{height: textInputInterpolation,opacity: this.animation}}>
            <TextInput
              style={[StyleSheet.absoluteFill,styles.input]}
              placeholder="Start Writing"
              multiline
              ref={input => this.input = input}
            />
          </Animated.View>
        </Animated.View>  
        <Animated.View style={{opacity: this.animation}}> 
          <TouchableWithoutFeedback onPress={() => this.toggleAnimation()}>
            <View>
              <Text>Close</Text>
            </View>
          </TouchableWithoutFeedback>
        </Animated.View>
        
      </View>    
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bar: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#0984e3',

  },
  toolbar: {
    justifyContent: 'flex-start',
    flexDirection: 'row',

  },
  rightInnerBar: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  input: {
    borderWidth: 2,
    borderColor: '#ddd'
  },
  editor: {

  }
}