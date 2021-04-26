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
} from 'react-native';
import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

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

const data = images.map((image, index) => ({
  key: String(index),
  photo: image,
  avatar_url: `https://randomuser.me/api/portraits/women/${Math.floor(
    Math.random() * 40,
  )}.jpg`,
}));

export default function App() {
  const [activeImage, setActiveImage] = React.useState('');
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const _gridImages = {};

  const handleOpenImage = (index: number) => {};
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <ScrollView style={[styles.container]}>
        <View style={[styles.grid]}>
          {data.map((img, index) => {
            return (
              <Image
                ref={(img) => (_gridImages[index] = img)}
                onProgress={() => handleOpenImage(index)}
                key={index.toString()}
                resizeMode="cover"
                style={[styles.gridImage]}
                source={{
                  uri: img.photo,
                }}
              />
            );
          })}
        </View>
      </ScrollView>
      <View
        style={[StyleSheet.absoluteFillObject]}
        pointerEvents={activeImage ? 'auto' : 'none'}>
        <View style={[styles.topContent]}>
          <Animated.Image
            source={{
              uri: '',
            }}
          />
        </View>
        <Animated.View></Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gridImage: {
    width: '33%',
    height: 150,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {},
  topContent: {},
});
