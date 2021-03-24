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
import styled from 'styled-components/native';

const base = 16;
const padding = base;

const SCREEN_PADDING = 24;
const Container = styled.View`
  padding: ${SCREEN_PADDING}px;
`;

const VStack = styled.View`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  height: 400px;
  justify-content: ${(props) => {
    const {horizontal} = props;
    if (horizontal === 'start') {
      return 'flex-start';
    } else if (horizontal === 'end') {
      return 'flex-end';
    } else if (horizontal === 'between') {
      return 'space-between';
    } else {
      // (horizontal === 'around')
      return 'space-around';
    }
  }};
`;

const HStack = styled.View`
  margin: 8px;
  display: flex;
  flex-direction: row;
  height: ${(props) => {
    return '100%';
  }};
  border: 1px solid red;
  flex-wrap: ${(props) => {
    return props.nowrap ? 'nowrap' : 'wrap';
  }};
  align-items: baseline;
  align-content: flex-start
  justify-content: ${(props) => {
    const {horizontal} = props;
    if (horizontal === 'start') {
      return 'flex-start';
    } else if (horizontal === 'end') {
      return 'flex-end';
    } else if (horizontal === 'between') {
      return 'space-between';
    } else {
      // (horizontal === 'around')
      return 'space-around';
    }
  }};
`;

const Divider = styled.View`
  height: 40px;
`;

const Title = styled.Text`
  text-align: left;
  font-size: 22px;
`;

const Jumbo = styled.View`
  height: 230px;
  border: 1px solid red;
  border-radius: 16px;
`;

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const Card = styled.View`
  width: 150px;
  height: 180px;
  border: 1px solid red;
  border-radius: 16px;
`;

function useRotationAnimation(timing = 1000) {
  const animted = useRef(new Animated.Value(0));

  const interpolateRotation = animted.current.interpolate({
    inputRange: [0,1],
    outputRange:["0deg","720deg"]
  });

  const animatedStyle = {
    transform: [{
      rotate: interpolateRotation
    }]
  };

  useEffect(()=>{
     Animated.timing(animted.current, {
        toValue: 1,
        duration: timing,
        useNativeDriver: true
     }).start();
  },[])
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
