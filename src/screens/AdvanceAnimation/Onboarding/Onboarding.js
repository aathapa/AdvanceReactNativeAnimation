import React, { Component } from 'react';
import { 
  View,
  Text,
  ScrollView,
  Animated,
  Dimensions,
  PixelRatio,
  TouchableOpacity
} from 'react-native';
import Image1 from './images1.png'
import Image2 from './images2.png'
import Image3 from './images3.png'

const { height, width } = Dimensions.get('window');

const animation1Func = (animation) => {
  const image2interpolate = animation.interpolate({
    inputRange: [0, width/1.5, width],
    outputRange: [0,-80 ,-100],
    extrapolate: 'clamp'
  });

  return {
    image2: {
      transform: [
        { translateX: image2interpolate }
      ]
    }
  }
}

const animation2Func = (animation) => {
  const inputRange= [0, width, width * 2]
  const image2interpolate = animation.interpolate({
    inputRange,
    outputRange: [100, 0, -100],
    extrapolate: 'clamp'
  });

  const opacity = animation.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
    extrapolate: 'clamp'
  })

  return {
    image2: {
      opacity,
      transform: [
        {translateY: image2interpolate}
      ]
    }
  }
}

const animation3Func = (animation) => {
  const inputRange = [width, width * 2, width * 3]
  const scale = animation.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
    extrapolate: 'clamp'
  })

  const rotate = animation.interpolate({
    inputRange,
    outputRange: ['-180deg', '0deg', '180deg'],
    extrapolate: 'clamp'
  })

  return {
    image1: {
      transform: [
        {
          scale
        }
      ]
    },
    image2: {
      transform: [
        { rotate }
      ]
    }
  }
}
 
export default class Onboarding extends Component {
  constructor(props) {
    super(props);
    this.animation = new Animated.Value(0)
  }

  static navigationOptions = {
    header: null
  }

  render() {
    const screenStyle1 = animation1Func(this.animation);
    const screenStyle2 = animation2Func(this.animation);
    const screenStyle3 = animation3Func(this.animation);
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          scrollEventThrottle={16}
          pagingEnabled
          horizontal
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: this.animation } } }]
          )}
        >
          <View style={styles.screen}>
            <View style={styles.screenHeader}>
              <Animated.Image
                source={Image1}
                style={[{
                  width: PixelRatio.getPixelSizeForLayoutSize(75),
                  height: PixelRatio.getPixelSizeForLayoutSize(63),
                }, ]}
              />
              <Animated.Image
                source={Image2}
                style={[{
                  width: PixelRatio.getPixelSizeForLayoutSize(50),
                  height: PixelRatio.getPixelSizeForLayoutSize(30),
                  position: 'absolute',
                  top: 200,
                  left: 100
                },screenStyle1.image2
                ]}
              />
              <Animated.Image
                source={Image3}
                style={{
                  width: PixelRatio.getPixelSizeForLayoutSize(25),
                  height: PixelRatio.getPixelSizeForLayoutSize(25),
                  position: 'absolute',
                  top: 130,
                  left: 55
                }}
              />
            </View>  
            <View style={{flex: 1}}>
              <Text>screen 1</Text>
            </View>
            
          </View>
          <View style={styles.screen}>
            <View style={styles.screenHeader}>
              <Animated.Image
                source={Image1}
                style={{
                  width: PixelRatio.getPixelSizeForLayoutSize(75),
                  height: PixelRatio.getPixelSizeForLayoutSize(63),

                }}
              />
              <Animated.Image
                source={Image2}
                style={[{
                  width: PixelRatio.getPixelSizeForLayoutSize(50),
                  height: PixelRatio.getPixelSizeForLayoutSize(30),
                  position: 'absolute',
                  top: 200,
                  left: 100
                }, screenStyle2.image2
                ]}
            />
              <Animated.Image
                source={Image3}
                style={{
                  width: PixelRatio.getPixelSizeForLayoutSize(25),
                  height: PixelRatio.getPixelSizeForLayoutSize(25),
                  position: 'absolute',
                  top: 130,
                  left: 55
                }}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text>screen 1</Text>
            </View>
          </View>
          <View style={styles.screen}>
            <View style={styles.screenHeader}>
              <Animated.Image
                source={Image1}
                style={[{
                  width: PixelRatio.getPixelSizeForLayoutSize(75),
                  height: PixelRatio.getPixelSizeForLayoutSize(63),

                }, screenStyle3.image1
                ]}
              />
              <Animated.Image
                source={Image2}
                style={[{
                  width: PixelRatio.getPixelSizeForLayoutSize(50),
                  height: PixelRatio.getPixelSizeForLayoutSize(30),
                  position: 'absolute',
                  top: 200,
                  left: 100
                }, screenStyle3.image2
                ]}
              />
              <Animated.Image
                source={Image3}
                style={{
                  width: PixelRatio.getPixelSizeForLayoutSize(25),
                  height: PixelRatio.getPixelSizeForLayoutSize(25),
                  position: 'absolute',
                  top: 130,
                  left: 55
                }}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text>screen 1</Text>
            </View>
          </View>
        </ScrollView>
        <View style={{ backgroundColor: '#fa8231',flexDirection: 'row',justifyContent: 'space-around',paddingBottom: 10}}>
          <TouchableOpacity
            style={styles.button}
          >
            <Text style={{color: '#fff'}}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
          >
            <Text style={{color: '#fff'}}>SignUp</Text>
          </TouchableOpacity>
       </View>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 3
  },
  screen: {
    width,
    height,
    backgroundColor: '#fa8231'
  },
  screenHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 20,
    backgroundColor: '#20bf6b',
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  }
}