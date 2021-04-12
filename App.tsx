import React, {FunctionComponent} from 'react';
import {Text, View} from 'react-native';

import AnimatedApp from './Animations';

type StackChildren = {
  children: React.ReactNode;
};

const VStack: FunctionComponent<StackChildren> = (props) => {
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
};

const HStack: FunctionComponent<StackChildren> = (props) => {
  const {children} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        borderWidth: 1,
        justifyContent: 'space-between',
      }}>
      {children}
    </View>
  );
};

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
        <Text>Ahoj</Text>
        <Text>Ahoj</Text>
        <Text>Ahoj</Text>
      </HStack>
      <VStack>
        <Text>Ahoj</Text>
        <Text>Ahoj</Text>
        <Text>Ahoj</Text>
      </VStack>
    </View>
  );
}
