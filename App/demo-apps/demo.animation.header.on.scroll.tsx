import React, {useState, useEffect, useRef} from 'react';
import {View, Text, Animated, StyleSheet} from 'react-native';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {SafeAreaView , SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';



const LIST_DATA_DEMO = [
  {
    id: 1,
    title: 'The Hunger Games',
  },
  {
    id: 2,
    title: 'Harry Potter and the Order of the Phoenix',
  },
  {
    id: 3,
    title: 'To Kill a Mockingbird',
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
  },
  {
    id: 5,
    title: 'Twilight',
  },
  {
    id: 6,
    title: 'The Book Thief',
  },
  {
    id: 7,
    title: 'The Chronicles of Narnia',
  },
  {
    id: 8,
    title: 'Animal Farm',
  },
  {
    id: 9,
    title: 'Gone with the Wind',
  },
  {
    id: 10,
    title: 'The Shadow of the Wind',
  },
  {
    id: 11,
    title: 'The Fault in Our Stars',
  },
  {
    id: 12,
    title: "The Hitchhiker's Guide to the Galaxy",
  },
  {
    id: 13,
    title: 'The Giving Tree',
  },
  {
    id: 14,
    title: 'Wuthering Heights',
  },
  {
    id: 15,
    title: 'The Da Vinci Code',
  },
  {
    id: 1,
    title: 'The Hunger Games',
  },
  {
    id: 2,
    title: 'Harry Potter and the Order of the Phoenix',
  },
  {
    id: 3,
    title: 'To Kill a Mockingbird',
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
  },
  {
    id: 5,
    title: 'Twilight',
  },
  {
    id: 6,
    title: 'The Book Thief',
  },
  {
    id: 7,
    title: 'The Chronicles of Narnia',
  },
  {
    id: 8,
    title: 'Animal Farm',
  },
  {
    id: 9,
    title: 'Gone with the Wind',
  },
  {
    id: 10,
    title: 'The Shadow of the Wind',
  },
  {
    id: 11,
    title: 'The Fault in Our Stars',
  },
  {
    id: 12,
    title: "The Hitchhiker's Guide to the Galaxy",
  },
  {
    id: 13,
    title: 'The Giving Tree',
  },
  {
    id: 14,
    title: 'Wuthering Heights',
  },
  {
    id: 15,
    title: 'The Da Vinci Code',
  },
];


const App = () => {
  const HEADER_HEIGHT = 200;
  const animValue = useRef(new Animated.Value(0)).current;


  const headerHeight = animValue.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [HEADER_HEIGHT, 44],
    extrapolate: 'clamp'
  });

  // TRACK animValue updates and react to it if needed
  // const valueToCheckAnim = useRef(0);

  // animValue.addListener(({value}) => {
  //   valueToCheckAnim.current = value;
  //   console.log('value',value)
  // });

  // const frontInterPolate = animValue.interpolate({
  //   // -- CAN BE UPDATED
  //   inputRange: [0, 180],
  //   // -- CAN BE UPDATED
  //   outputRange: ['0deg', '180deg'],
  // });

  // const frontAnimatedStyle = {
  //   transform: [
  //     {
  //       rotateY: frontInterPolate,
  //     },
  //   ],
  // };

  return (
    <SafeAreaProvider>
    <SafeAreaView style={[styles.container]}>
      <Animated.View style={[styles.header, {
         height: headerHeight,
          justifyContent: 'center',
          alignItems: 'center'
      }]}>
        <Text style={{
          fontSize: 22
        }}>
          Header
        </Text>
      </Animated.View>
      <ScrollView
        style={{ flex: 1, backgroundColor: 'white' }}
         contentContainerStyle={{
            // alignItems: 'center',
            // paddingTop: 220,
            paddingHorizontal: 20
          }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: animValue } } }],
            { useNativeDriver: false }
          )}
          
      >
        {LIST_DATA_DEMO.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                marginBottom: 20,
              }}>
              <Text style={{color: '#101010', fontSize: 32}}>{item.title}</Text>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 200,
    backgroundColor: '#ededed',
  },
});

export default App;
