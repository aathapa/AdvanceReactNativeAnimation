import React, { Component } from 'react';
import { 
  View,
  ScrollView,
  TouchableOpacity,
  Text
} from 'react-native';
 
const advanceAnimationExample = [
  { name: "FAB", route: 'FAB' },
  { name: "Onboarding", route: 'Onboarding' },
  {name: 'Evolving Button',route: "EvolvingButton"}
]

class AdvanceAnimation extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        {advanceAnimationExample.map(({ name, route },index) => {
          return (
            <TouchableOpacity
              onPress={()=> this.props.navigation.navigate(route)}  
              key={index}  
              style={{ padding: 15 }}
            >
              <Text>{name}</Text>
            </TouchableOpacity>
          )
          
        })}
      </View>
    )
  }
}

export default AdvanceAnimation;