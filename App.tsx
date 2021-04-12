import React from 'react';
import {Text, View} from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter'; // 2.0.0
import {tomorrow} from 'react-syntax-highlighter/styles/prism'; // 7.0.1

import AnimatedApp from './Animations';

function VStack(props) {
  const {children} = props;
  return (
    <View
      style={{
        flexDirection: 'column',
        borderWidth: 1,
        height: 200,
        justifyContent: 'space-between',
      }}>
      {children}
    </View>
  );
}

function HStack(props) {
  const {children} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        borderWidth: 1,
        justifyContent: 'space-between',
        flex: 1,
      }}>
      {children}
    </View>
  );
}

function GridStack(props) {
  const {data = [], rows, columns} = props;

  const chunk = (arr: typeof data, size: number) =>
    Array.from({length: Math.ceil(arr.length / size)}, (_, i) =>
      arr.slice(i * size, i * size + size),
    );

  const dataToRender = chunk(data, columns);

  return <VStack></VStack>;
}

export default function App() {
  return (
    <View style={{backgroundColor: '#E87A90', flex: 1, marginTop: 50}}>
     
    </View>
  );
}

