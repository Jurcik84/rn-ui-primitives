import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Animated,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';



function useSomeAnim(){
    const animValue = useRef(new Animated.Value(0));
    const rotateValue = useRef(new Animated.Value(0));

    const rotateStyle = rotateValue.current.interpolate({
        inputRange: [0,1],
        outputRange:["0deg","360deg"]
      });

      useEffect(()=>{
          // for ROTAT
        Animated.timing(rotateValue.current, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        })
    },[])

    useEffect(()=>{
        Animated.timing(animValue.current, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        })
    },[])

    useEffect(()=>{
        Animated.spring(animValue.current, {
            toValue: 1,
            useNativeDriver: true
        })
    },[])
}


function useRotationAnimation(timing = 1000) {
  const animted1 = useRef(new Animated.Value(0));
  const animted2  = useRef(new Animated.Value(1));
  const rotate = useRef(new Animated.Value(0));

 const rotateStyle = rotate.current.interpolate({
    inputRange: [0,1],
    outputRange:["0deg","360deg"]
  });

  useEffect(()=>{
   
  },[]);

  const animatedStyle = {
    //------ With transform
       transform:[
       
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
