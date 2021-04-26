import * as React from 'react';
import {
  Animated,
  Dimensions,
  Image,
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

const images = [
  'https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=800&q=80',
  'https://images.unsplash.com/photo-1562569633-622303bafef5?w=800&q=80',
  'https://images.unsplash.com/photo-1503656142023-618e7d1f435a?w=800&q=80',
  'https://images.unsplash.com/photo-1555096462-c1c5eb4e4d64?w=800&q=80',
  'https://images.unsplash.com/photo-1517957754642-2870518e16f8?w=800&q=80',
  'https://images.unsplash.com/photo-1546484959-f9a381d1330d?w=800&q=80',
  'https://images.unsplash.com/photo-1548761208-b7896a6ff225?w=800&q=80',
  'https://images.unsplash.com/photo-1511208687438-2c5a5abb810c?w=800&q=80',
  'https://images.unsplash.com/photo-1548614606-52b4451f994b?w=800&q=80',
  'https://images.unsplash.com/photo-1548600916-dc8492f8e845?w=800&q=80',
];

const imageW = width * 0.7;
const imageH = imageW * 1.55;

const data = images.map((image, index) => ({
  key: String(index),
  photo: image,
  avatar_url: `https://randomuser.me/api/portraits/women/${Math.floor(
    Math.random() * 40,
  )}.jpg`,
}));

export default function App() {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const AnimatedEvent = Animated.event(
    [
      {
        nativeEvent: {contentOffset: {x: scrollX}},
      },
    ],
    {
      useNativeDriver: true,
    },
  );
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <View style={[StyleSheet.absoluteFillObject]}>
        {data.map((item, index) => {
          const inputRange = [
            (index - 1 )* width,
            index * width,
            (index + 1) * width,
          ];
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });
          return (
            <Animated.Image
              blurRadius={50}
              style={[
                StyleSheet.absoluteFillObject,
                {
                  opacity: opacity,
                },
              ]}
              source={{
                uri: item.photo,
              }}
              key={`iamge-${index}`}
            />
          );
        })}
      </View>
      <Animated.FlatList
        onScroll={AnimatedEvent}
        horizontal
        pagingEnabled
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <View
              style={{
                width,
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: '#000',
                shadowOpacity: 1,
                shadowOffset: {
                    width: 0,
                    height: 0,
                },
                shadowRadius: 20

              }}>
              <Image
                style={{
                  width: imageW,
                  height: imageH,
                  resizeMode: 'cover',
                  borderRadius: 16,
                }}
                source={{
                  uri: item.photo,
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
