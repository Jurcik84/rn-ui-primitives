import React from 'react';
import { Animated, View, TouchableHighlight, Text, StyleSheet, Easing } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 12
    },
    subTitle: {
        width: '100%',
        textAlign: 'center',
        fontSize: 18,
        opacity: 0.8
    },
    button: {
        marginBottom: 25,
        backgroundColor: '#ddd',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    }
})

export default class RNMultipleAnimations extends React.Component<{}, {}> {
    animatedTitle = new Animated.Value(-200);
    animatedSubtitle = new Animated.Value(600);
    animatedButton = new Animated.Value(800);

    componentDidMount() {
        this.animate();
    }
    animate = () => {
        Animated.parallel([
            Animated.timing(this.animatedTitle, {
                toValue: 200,
                duration: 800,
            }),
            Animated.timing(this.animatedSubtitle, {
                toValue: 0,
                duration: 1400,
                delay: 800
            }),
            Animated.timing(this.animatedButton, {
                toValue: 0,
                duration: 1000,
                delay: 2200
            }),
        ]).start();
    }

    public render() {

        return <View style={[style.container]}>
            <Animated.Text style={[
                style.title,{
                marginTop: this.animatedTitle
            }]}>
              Hello I am Juraj
            </Animated.Text>
            <Animated.Text  style={[
                style.subTitle,
                {
                marginLeft: this.animatedSubtitle
            }]}>
              React Native Dev
            </Animated.Text>
            <Animated.View  style={[
                style.button,
                {
                marginTop: this.animatedButton
            }]}>
              <TouchableHighlight onPress={this.animate}  >
                <Text>Loving Javascript</Text>
              </TouchableHighlight>
            </Animated.View>
        </View>
    }
}
