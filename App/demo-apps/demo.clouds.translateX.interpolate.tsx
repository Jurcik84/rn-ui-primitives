import React, {useState, useEffect, useRef} from 'react';
import {View, Text, Animated, StyleSheet,Image,Dimensions,Easing} from 'react-native';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {SafeAreaView , SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window')

const imageHeight = 100;
const imageWidth = 100;


const cloudHeight = 100;
const cloudWidth = 150;
const planeHeight = 60;
const planeWidth = 100;

const App = () => {

  const animatedValue = useRef(new Animated.Value(0));
  
  const left1 = animatedValue.current.interpolate({
    inputRange: [0, 1],
    outputRange: [SCREEN_WIDTH, -cloudWidth],
  });

  const left2 = animatedValue.current.interpolate({
    inputRange: [0, 1],
    outputRange: [2*SCREEN_WIDTH, -cloudWidth * 1.5],
  });

  const startAnimation = ()=>{
    animatedValue.current.setValue(0);
    Animated.timing(animatedValue.current, {
      toValue: 1,
      duration: 6000,
      easing: Easing.linear,
      useNativeDriver: true,

    }).start(()=>startAnimation())
  }

  useEffect(()=>{
    startAnimation();
  },[])

  return (
    <SafeAreaProvider>
    <SafeAreaView style={[styles.container]}>
     
    <Animated.Image
          style={[
            styles.cloud1,
            {
              transform: [{
                translateX: left1
              }]
            }
          ]}
          source={{uri: 'https://reactjs.org/logo-og.png'}}
        />
        <Image
          style={styles.plane}
          source={{uri: 'https://reactjs.org/logo-og.png'}}
        />
        <Animated.Image
          style={[
            styles.cloud2,
            {
              transform: [{
                translateX: left2
              }]
            }
          ]}
          source={{uri: 'https://reactjs.org/logo-og.png'}}
        />
       
    </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'cyan',
  },
  header: {
    height: 200,
    backgroundColor: '#ededed',
  },
  cloud1: {
    position: 'absolute',
    width: cloudWidth,
    height: cloudHeight,
    top: SCREEN_HEIGHT / 3 - cloudWidth / 2,
  },
  cloud2: {
    position: 'absolute',
    width: cloudWidth * 1.5,
    height: cloudHeight * 1.5,
    top: SCREEN_HEIGHT/1.5,
  },
  plane: {
    position: 'absolute',
    height: planeHeight,
    width: planeWidth,
    top: SCREEN_HEIGHT / 2 - planeHeight,
    left: SCREEN_WIDTH / 2 - planeWidth,
  }
});

export default App;
