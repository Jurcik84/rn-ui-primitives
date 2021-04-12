import React from 'react';
import {Text, View} from 'react-native';
import AnimatedApp from './Animations';

function VStack(props) {
  const {children} = props;
  return (
    <View
      style={{
        flexDirection: 'column',
        borderWidth: 1,
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
        justifyContent: 'space-between',
       
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
     <HStack>
       <Text>ahoj</Text>
       <Text>ahoj</Text>
       <Text>ahoj</Text>
     </HStack>
     <VStack>
       <Text>ahoj</Text>
       <Text>ahoj</Text>
       <Text>ahoj</Text>
     </VStack>
    </View>
  );
}

