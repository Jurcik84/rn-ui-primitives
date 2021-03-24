import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Button,
  Platform,
  Text,
  ScrollView,
  Dimensions,
  Animated,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

function useRotationAnimation(timing = 1000) {
  const animted1 = useRef(new Animated.Value(0));
  const animted2  = useRef(new Animated.Value(1));
  const rotate = useRef(new Animated.Value(0));

 const rotateStyle = rotate.current.interpolate({
    inputRange: [0,1],
    outputRange:["0deg","360deg"]
  });

  useEffect(()=>{
    Animated.parallel([
      Animated.timing(rotate.current, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }),
      Animated.timing(animted1.current, {
        toValue: 200,
        duration: 300,
        useNativeDriver: true
      }),
      Animated.spring(animted2.current, {
        toValue: 2,
        useNativeDriver: true
      }),
      // Animated.timing(animted2.current, {
      //   toValue: 2,
      //   duration: 10000,
      //   useNativeDriver: true
      // }),
    ]).start();
  },[]);

  const animatedStyle = {
    //------ With transform
       transform:[
         {
           translateY: animted1.current
         },
         {
          scale: animted2.current
        },
        {
          rotate: rotateStyle
        }
       ]   

  };

  return  {
    animatedStyle,
    timing
  }
}

const App = () => {

  const {animatedStyle,timing} = useRotationAnimation();
  return (

    <View
  style={{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }}
  >
   <TouchableOpacity>
   <Animated.View
    style={[{
      width: 100,
      height: 100,
      backgroundColor: '#000',
      justifyContent: 'center',
      ...animatedStyle
    }, ]} 
    >
      <Text style={{
        color: 'white',
        textAlign: 'center',

      }}>Spinner</Text>
    </Animated.View>
   </TouchableOpacity>
  </View>

  );
};

export default App; 
