import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Animated
} from 'react-native';
 
export default class AppNotification extends Component{
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      notificationText: '',
      opacity: new Animated.Value(0),
    }
  }

  handlePress() {
    this.setState({
      notificationText: this.state.text,
      text: ''
    }, () => {
      if (!this.state.notificationText)
        return alert('Operation cannot procced');
      Animated.sequence([
        Animated.timing(this.state.opacity, {
          toValue: 1,
          duration: 300
        }),
        Animated.delay(800),
        Animated.timing(this.state.opacity, {
          toValue: 0,
          duration: 300
        })
      ]).start()
      
    })  
  }

  render() {
    const animatedNotification = this.state.opacity;
    return (
      <View
        style={styles.container}
      >
        <Animated.View
          ref={notification => (this._notification = notification)}
          style={[styles.notification, { opacity: animatedNotification }]}
        >
          <Text style={{color: '#fff'}}>{this.state.notificationText}</Text>  
        </Animated.View>  
        <View>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
          <TouchableOpacity
            onPress={()=> this.handlePress()}  
            style={styles.button}
          > 
            <Text style={{color: '#fff'}}>Show Notification </Text>
          </TouchableOpacity>
        </View> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  input: {
    height: 40,
    width: 300,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C2185B',
    padding: 15,
    marginTop: 10,
  },
  notification: {
    position: 'absolute',
    bottom: 20,
    right: 10,
    left: 10,
    height: 50,
    backgroundColor: '#66BB6A',

  }
})