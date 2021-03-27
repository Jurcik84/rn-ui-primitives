import React, {useState, useEffect, useRef, useMemo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

import {
  Divider,
  VStack,
  HStack,
  Container,
  Section,
} from '../../components/layouts';
import {ForEach} from '../../components/lists';

const style = StyleSheet.create({
  cnr: {
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    flex: 1,
    backgroundColor: 'pink',
  },
  submitBtn: {
    padding: 23,
    backgroundColor: 'red',
  },
  textInputVstack: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default function () {
  const data = Array.from(Array(100), (_, index) => index + 1);
  return (
    <Container backgroundColor="red" padding={23} flex={1} height={156}>
      <ForEach  height={156} data={data}>
        {(item: unknown, index: number) => {
          return (
            <VStack key={index}>
              <Section
                width={156}
                height={156}
                borderWidth={1}
                marginRight={10}></Section>
              <Text>Macka</Text>
              <Text>...</Text>
            </VStack>
          );
        }}
      </ForEach>
    </Container>
  );
}
