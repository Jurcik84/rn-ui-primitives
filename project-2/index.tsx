import * as React from 'react';
import {Animated, Text, View, StyleSheet, StatusBar} from 'react-native';

type ProgressTypes = {
  step: number;
  steps: number;
  height: number;
};
const Progress: React.FC<ProgressTypes> = ({step, steps, height}) => {
  const [width, setWidth] = React.useState<number>(0);
  const animatedValue = React.useRef(new Animated.Value(-1000)).current;
  const reactive = React.useRef(new Animated.Value(-1000)).current;

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  React.useEffect(() => {
    // -width + width* step / steps
    reactive.setValue(-width + (width * step) / steps);
  }, [width, step]);
  return (
    <View>
      <Text
        style={{
          fontSize: 12,
          fontWeight: '900',
          marginBottom: 4,
        }}>
        {step}/{steps}
      </Text>
      <View
        onLayout={({
          nativeEvent: {
            layout: {width},
          },
        }) => {
          setWidth(width);
          console.log('width', width);
        }}
        style={{
          height,
          width: 300,
          backgroundColor: 'rgba(0,0,0,0.1)',
          overflow: 'hidden',
          borderRadius: height,
        }}>
        <Animated.View
          style={{
            height,
            width: '100%',
            position: 'absolute',
            left: 0,
            top: 0,
            transform: [
              {
                translateX: animatedValue,
              },
            ],
            borderRadius: height,
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        />
      </View>
    </View>
  );
};

export default function App() {
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    let interval = setInterval(() => {
      setStep((step + 1) % (10 + 1));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [step]);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Progress step={step} steps={10} height={20} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
