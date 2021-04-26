import * as React from 'react';
import {
  Animated,
  Dimensions,
  Text,
  View,
  StyleSheet,
  StatusBar,
  Platform,
} from 'react-native';
import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('screen');

export default function App() {
  const handleAnswer = () => {};
  return (
    <View style={styles.container}>
      {/* <StatusBar hidden={false} /> */}
      <View style={[styles.bottomView]}>
        <View style={[styles.options, styles.leftButton]}>
          <TouchableOpacity onPress={handleAnswer} activeOpacity={0.7}>
            <Text style={[styles.no]}>No</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.options, styles.rightButton]}>
          <TouchableOpacity  onPress={handleAnswer} activeOpacity={0.7}>
            <Text style={[styles.yes]}>Yes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E22D4B',
  
    borderWidth: 10,
  },
  bottomView: {
    flex: 1,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  options: {
    flex: 1,
  },
  leftButton: {
  
    justifyContent: 'flex-end',
  },
  rightButton: {
  
    justifyContent: 'flex-end',
  },
  optionText: {
    fontSize: 30,
    color: '#FFFFFF',
    marginBottom: 50,
  },
  yes: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    textAlign: 'center',
  },
  no: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    textAlign: 'center',
  },
  overlay: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
