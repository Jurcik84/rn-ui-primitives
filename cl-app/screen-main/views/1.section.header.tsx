import React, {useState, useEffect, useRef, useMemo} from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Image,
  Dimensions,
  Easing,
  TouchableOpacity,
} from 'react-native';
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

import {
  Divider,
  VStack,
  HStack,
  Container,
  Section,
} from '../../components/layouts';

export default function ({}) {
  return (
    <VStack
      style={{
        backgroundColor: '#FF0049',
        height: 23 * 9,
        justifyContent: 'center',
        // alignItems: 'center'
        padding: 23
      }}>
      <Text>Hey William</Text>
      <Text>Can I help you something?</Text>
      <TextInput
       placeholder="Search"
        style={{
          // borderWidth: 1,
          padding: 23,
          borderRadius: 12,
          backgroundColor: '#fff'

        }}
      />
    </VStack>
  );
}
