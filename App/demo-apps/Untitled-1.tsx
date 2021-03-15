
import React from 'react';
import { View, Animated, Button } from 'react-native'
// import Navigation from "./navigation";


class RNAnimations extends React.Component<{}, {}> {
  marginTop = new Animated.Value(20);
  animate = () => {
    Animated.timing(
      this.marginTop,
      {
        toValue: 200,
        duration: 500,

      }
    ).start()
  }
  render() {
    return <View style={{
      flex: 1,
      backgroundColor: 'green',
      flexDirection: 'column'

    }}>
      
      <Animated.View
  
      style={{
        width: 150,
        height: 150,
        backgroundColor: 'red',
        marginTop: this.marginTop
      }}>

      </Animated.View><View>
        <Button title="Animate" onPress={this.animate}
        />
      </View>
    </View>
  }
}


const App = () => {
  return (
    <RNAnimations />

  );
};


export default App;







import React from 'react';
import { View, Animated, Button, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
// import Navigation from "./navigation";


class RNAnimations extends React.Component<{}, {}>{
  animatedView = new Animated.Value(200);
  animate = (toValue:number)=> {
    Animated.timing(
      this.animatedView,
      {
        toValue: toValue,
        duration: 750
      }
    ).start()
  }
  public render() {
    return <View style={styles.container}>
      <Animated.View style={{
        width: this.animatedView
      }}>
        <TextInput style={[styles.input]} 
        onBlur={()=>this.animate(200)}
        onFocus={()=>this.animate(325)}
        ref={input => this.input = input}
        />
      </Animated.View>
      <Button title="Submit" onPress={()=> this.input.blur() } />
         
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 10,
    paddingTop: 50
  },
  input: {
    height: 50,
    marginHorizontal: 15,
    backgroundColor: '#ededed',
    marginTop: 10,
    paddingHorizontal: 9
  }
})


const App = () => {
  return (
    <RNAnimations />

  );
};


export default App;
