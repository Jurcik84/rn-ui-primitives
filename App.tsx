
import React from 'react';
import { View, Animated, Button, StyleSheet,Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { Easing } from 'react-native-reanimated';
// import Navigation from "./navigation";


interface LoadingInterface {
  loading: Boolean
}

class RNAnimations extends React.Component<{}, LoadingInterface>{
  state: LoadingInterface = {
    loading: true
  }
  componentDidMount(){
    this.animate();
    setTimeout(()=>this.setState(()=>({
      loading: false
    })), 5000)
  }
  animatedRotation = new Animated.Value(0);
  animate = () => {
    Animated.loop(
      Animated.timing(
        this.animatedRotation,
        {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear
        }
      )
    ).start()

  }
  public render() {
    const {loading} = this.state;
    const rotation = this.animatedRotation.interpolate({
      inputRange:[0,1],
      outputRange: ['0deg', '360deg']
    })
    return <View style={styles.container}>
     {
       true? <Animated.View style={{
         width: 50,
         height: 50,
         backgroundColor: 'red',
         transform: [{rotate: rotation}]
       }}></Animated.View>: <Text>Animation finished</Text>
     }
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingTop: 50
  },

})


const App = () => {
  return (
    <RNAnimations />

  );
};


export default App;
