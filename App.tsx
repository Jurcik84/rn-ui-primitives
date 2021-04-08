import React, {
  ComponentProps,
  ReactNode,
  FunctionComponent,
  useEffect,
} from 'react';
import {View, Animated, Dimensions, Alert} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import HomeScreen from './cl-app/screen-main/views/section.container';

import {
  BasicTextInput,
  EmailInput,
  FullNameInput,
  MobileNumberInput,
  PasswordInput,
  SingleDigitInput,
} from './cl-app/components/inputs';

import {Block} from './cl-app/components/block';
import {HStack, VStack} from './cl-app/components/layouts';
import Image from './cl-app/components/image';
import Text from './cl-app/components/fonts';
import {
  RNStyleTypes,
  getStyleFromProps,
} from './cl-app/components/utils.propsToStyle';
import List from './cl-app/components/lists';
import * as Color from './cl-app/components/colors';

import {
  CardDoubleDecker,
  CardTextUnderImage,
  CardWithTextOnImage,
} from './cl-app/components/list.items';
import {
  ProgressBarHorizontalList,
  ProgressBarVerticalWithCircles,
} from './cl-app/components/progress';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import TableRow from './cl-app/components/row.item';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import ContentView from './cl-app/components/content.view';
import {
  NavigationView,
  useNavigationView,
} from './cl-app/components/navigation.view';

import {useCameraRoll} from '@react-native-community/hooks';

// error handling
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';

const {width} = Dimensions.get('screen');


// ERROR  START------------------------------------
const handleError = (error, isFatal) => {
  // fetch ?
  console.log(error, isFatal);
  // error.name ? into alert
};

setJSExceptionHandler((error, isFatal) => {
  console.log('caught global error');
  handleError(error, isFatal);
}, true);

setNativeExceptionHandler((errorString) => {});
// ERROR  END------------------------------------


export default function App() {
  const [photos, getPhotos, saveToCameraRoll] = useCameraRoll();
  return (
   <VStack>
     
   </VStack>
  );
}
