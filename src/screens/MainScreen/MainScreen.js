import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Animated
} from 'react-native';

const animationScreenTypes = [
    { name: 'Simple Animation', route: 'SimpleAnimation' },
    { name: 'Interpolation', route: 'Interpolation' },
    { name: 'Basic Example', route: 'BasicAnimationExample' },
    { name: "Advance Example", route: 'AdvanceExample' },
    
]

export default class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.animation = new Animated.Value(0);
    }

    render() {
        const bgColor = this.animation.interpolate({
            inputRange: [0,1000],
            outputRange: ['#9C27B0', '#3F51B5'],
        })
        const { navigate } = this.props.navigation;
        return (
            <View>
                <ScrollView
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.animation } } }]
                    )}
                >
                    <Animated.View style={{height: 1000,backgroundColor: bgColor}}>
                        {
                            animationScreenTypes.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index}
                                        style={{ padding: 20 }}
                                        onPress={() => navigate(item.route)}
                                    >
                                        <Text style={{color: 'white'}}>{item.name}</Text>
                                    </TouchableOpacity>

                                )

                            })
                        }
                    </Animated.View>
                    
                </ScrollView>
            </View>
        )
    }
}