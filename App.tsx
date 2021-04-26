import React, {
  FunctionComponent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {Text, View, Animated} from 'react-native';
import {getStyleObFromProps, RNStyleTypes} from './utils/style-props-to-style';
import {HStack, VStack} from './utils/layout';

import AnimatedFlatList from './project-1/index';
import AnimatedProgress from './project-2/index';
import AnimatedCardHorizontal from './project-3/index';


import Project4 from './project-4/index';
import Project5 from './project-5';
import Project6 from './project-6';
import Project7 from './project-7';
import Project8 from './project-8';
import Project9 from './project-9';


export default function App() {
  return (
    <Project9 />
  );
}
