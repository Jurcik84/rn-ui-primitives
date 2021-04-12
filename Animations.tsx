import React, {useEffect} from 'react';
import {Text, View, Animated} from 'react-native';

export default function App() {
  const animatedColor = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedColor, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(({finished}) => {
      console.log('finished', finished);
    });
  }, []);
 
  return (
    <Animated.View
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'red',
        opacity: animatedColor.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          })
      }}></Animated.View>
  );
}
