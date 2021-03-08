
import React from 'react';
import { View, Animated, Button, StyleSheet,Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { Easing } from 'react-native-reanimated';
// import Navigation from "./navigation";
// import RNAlert from './App/demo-apps/demo.alert'
import RNGeolocation from './App/demo-apps/demo.geolocation-api'

const App = () => {
  return (
    <RNGeolocation />
  );
};


export default App;
