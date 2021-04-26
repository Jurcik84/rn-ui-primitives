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
  title: 'Some Title -' + index,
  date: '11/11/2011',
  key: String(index),
  photo: image,
}));

type MomentTypes = {
  photo: string;
  translateX: any;
  onFocus: () => void;
  focused: boolean;
};

function Moment({
  photo = '',
  translateX,
  onFocus = () => null,
  focused,
}: MomentTypes) {
  const animatedStyle = {
    transform: [
      {
        translateX: translateX,
      },
    ],
  };
  return (
    <View
      style={{
        width,
        height,
        overflow: 'hidden',
      }}>
      <Animated.Image
        style={[
          {
            width,
            height,
          },
        ]}
        resizeMode="cover"
        source={{
          uri: photo,
        }}
      />
      <View style={[StyleSheet.absoluteFillObject, styles.center]}>
        <View style={[styles.textWrap]}>
          <Text style={[styles.title]}>Some Title</Text>
        </View>
      </View>
    </View>
  );
}

export default function App() {
  const scale = React.useRef(new Animated.Value(0)).current;
  const animatedScroll = React.useRef(new Animated.Value(0)).current;
  const [scrollEnable, setScrollEnabled] = React.useState(true);

  const handleFocus = () => {
    setScrollEnabled(false);
  };

  const onScrollX = () => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: animatedScroll,
            },
          },
        },
      ],
      {useNativeDriver: true},
    );
  };
  const getInterpolate = (animatedScroll, i) => {
    const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
    const outputRange = i === 0 ? [0, 0, 150] : [-300, 0, 150];

    return animatedScroll.interpolate({
      inputRange,
      outputRange,
      extrapolate: 'clamp',
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <ScrollView
        scrollEnabled={scrollEnable}
        onScroll={onScrollX}
        scrollEventThrottle={16}
        horizontal
        pagingEnabled>
        {data.map((image, i) => {
          return (
            <Moment
              onFocus={handleFocus}
              focused={scrollEnable}
              translateX={getInterpolate(animatedScroll, i)}
              {...image}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
  },
  textWrap: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 10,
  },
  title: {
    backgroundColor: 'transparent',
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
  },
});
