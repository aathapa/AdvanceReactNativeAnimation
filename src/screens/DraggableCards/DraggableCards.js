import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  PanResponder,
  TouchableWithoutFeedback,
  Dimensions,
  TouchableOpacity,
  Image
} from "react-native";
import { Card } from 'react-native-elements';

import Cat1 from "../../assets/images/cat1.jpeg";
import Cat2 from "../../assets/images/cat2.jpeg";
import Cat3 from "../../assets/images/cat3.jpeg";
import Cat4 from "../../assets/images/cat4.jpeg";

const SWIPE_THRESHOLD = 120;
const SCREEN_WIDTH = Dimensions.get("window").width

const items = [
  {
    image: Cat1,
    id: 1,
    text: "Sweet Cat",
  },
  {
    image: Cat2,
    id: 2,
    text: "Sweeter Cat",
  },
  {
    image: Cat3,
    id: 3,
    text: "Sweetest Cat",
  },
  {
    image: Cat4,
    id: 4,
    text: "Aww",
  },
]

export default class DraggableCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
    this.animation = new Animated.ValueXY()
  }


  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (e, { dx, dy }) => {
        this.animation.setValue({ x: dx, y: dy });
      },
      onPanResponderRelease: (e, { dx, vx, vy }) => {
        if (dx < -SWIPE_THRESHOLD) {
          this.forceSwipe('left');
        }
        else if (dx > SWIPE_THRESHOLD) {
          this.forceSwipe('right')
        }
        else {
          this.resetPosition()
        }
      },
    });
  }
  resetPosition() {
    Animated.spring(this.animation, {
      toValue: { x: 0, y: 0 },
      friction: 4
    }).start();
  }

  forceSwipe(direction) {
    const x = direction === 'left' ? -SCREEN_WIDTH : SCREEN_WIDTH;
    Animated.timing(this.animation, {
      toValue: { x, y: 0 },
      duration: 250
    }).start(() => this.onSwipeComplete(direction))
  }

  onSwipeComplete(direction) {
    this.animation.setValue({ x: 0, y: 0 });
    this.setState({ index: this.state.index + 1 })
  }
  getCardStyle() {
    const rotate = this.animation.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['-60deg', '0deg', '60deg']
    });

    return {
      transform: [{ rotate }, ...this.animation.getTranslateTransform(),]
    };
  }

  render() {
    if (this.state.index >= items.length) {
      return (
        <Text>No More Cards</Text>
      )
    }
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {
            items.slice(0, 2).reverse().map((item, index, i) => {
              const isFirstItem = index === i.length - 1;
              const isSecondItem = index === i.length - 2;
              return (
                <Animated.View
                  style={styles.cardStyle}  
                  key={index}
                  onPress={() => alert(isFirstItem)}
                >
                  <Animated.Image
                    source={item.image}  
                    style={styles.imageStyle}
                  />
                  <View style={{flex: 1,backgroundColor: '#fff'}}>
                    <Text>{item.text}</Text>
                  </View>
                  

                </Animated.View>
              )

            })
          }
        </View>
      </View>
    )
  }
}

const styles = {
  cardStyle: {
    width: 300,
    height: 300,
    position: "absolute",
    borderRadius: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { x: 0, y: 0 },
    shadowRadius: 5,
    borderWidth: 1,
    borderColor: "#FFF",

  },
  imageStyle: {
    width: null,
    height: null,
    flex: 3
  }
}