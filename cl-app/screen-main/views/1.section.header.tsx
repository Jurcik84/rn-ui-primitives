import React, {useState, useEffect, useRef, useMemo} from 'react';
import {
  View,
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

import {VStack} from '../../components/layouts';
import Text from '../../components/fonts';

export default function ({}) {
 
  return (
    <VStack
      marginBottom={23}
      padding={23}
      backgroundColor="#FF0049"
      height={23 * 9}
      justifyContent="center">
      <Text marginBottom={8} fontWeight={'800'} fontSize={17} color="#fff">
        Hey William
      </Text>
      <Text marginBottom={8} fontSize={15} color="#fff">
        Can I help you something?
      </Text>
      <TextInput
        placeholder="Search"
        style={{
          height:50,
          // borderWidth: 1,
         paddingHorizontal: 12,
          borderRadius: 12,
          backgroundColor: '#fff',
        }}
      />
    </VStack>
  );
}
