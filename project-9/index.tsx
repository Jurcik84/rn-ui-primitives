import * as React from 'react';
import {
  Animated,
  Dimensions,
  Image,
  FlatList,
  Text,
  View,
  StyleSheet,
  StatusBar,
  Button,
} from 'react-native';
import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const {width, height} = Dimensions.get('screen');

export default function App() {
  const scrollY = React.useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={[styles.container]}>
      <Animated.FlatList
        style={{}}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={() => {
          return (
            <Animated.View
              style={{
                // position: 'absolute',
                // top: 0,
                // left: 0,
                // right: 0,
                // width: width,
                height: 250,
                backgroundColor: 'red',

                transform: [
                  {
                    translateY: scrollY.interpolate({
                      inputRange: [0, 180],
                      outputRange: [0, -180],
                      extrapolate: 'clamp', // clamp so translateY can’t go beyond -160
                    }),
                  },
                ],
              }}></Animated.View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bounces={false}
        contentContainerStyle={{}}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: true,
            listener: (event) => {
              console.log(event.nativeEvent.contentOffset.y);
            },
          },
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        data={[
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
        ]}
        renderItem={({item}) => {
          return (
            <View
              style={{
                height: 60,
                borderWidth: 1,
              }}>
              <Text>Hello {item}</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'yellow',
  },
});

// const flatListRef = React.useRef<FlatList<any>>(null);
//   const yOffset = React.useRef<number>(0);

//            <FlatList
//              ref={flatListRef}
//              data={properties}
//              renderItem={renderItem}
//              keyExtractor={(item) => `${item.id}`}
//              onContentSizeChange={() =>{flatListRef.current!.scrollToOffset({offset: yOffset.current, animated: false});}}
//              onEndReached={onEndReached}
//              onEndReachedThreshold={0}
//              scrollEventThrottle={15}
//              onScroll={(e) => {yOffset.current = e.nativeEvent.contentOffset.y;}}
//              ListFooterComponent={<ActivityIndicator animating={loading} size="small" />}
//   />

// const aniamte = () => {
//   Animated.timing(scrollY, {
//     toValue: 100,
//     duration: 3000,
//     useNativeDriver: true,
//   }).start();
// };
