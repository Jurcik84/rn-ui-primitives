import React, {FunctionComponent, useEffect, useMemo, useState} from 'react';
import {Text, View} from 'react-native';
import {getStyleObFromProps, RNStyleTypes} from './utils/style-props-to-style';
import {HStack, VStack} from './utils/layout';

import AnimatedFlatList from './project-1/index'
export default function App() {

  
  return (
    <View style={{backgroundColor: '#E87A90', flex: 1, marginTop: 50}}>
      <AnimatedFlatList />
    </View>
  );
}
