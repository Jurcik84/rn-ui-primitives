import React, {
  ComponentProps,
  ReactNode,
  FunctionComponent,
  useEffect,
} from 'react';
import {View, Animated, Dimensions} from 'react-native';

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

const {width} = Dimensions.get('screen');

export default function App() {
  return <VStack flex={1} backgroundColor={Color.black}></VStack>;
}

// {
//   /* <Block padding={30}>
// <Block.Image
//   height={100}
//   width={100}
//   borderWidth={1}
//   source={{
//     uri:
//       'https://static.wixstatic.com/media/21f9f0e9b767823b051d09a6dbbaf022.jpg/v1/fill/w_360,h_360,al_c,lg_1,q_80/Moving%20Boxes.jpg',
//   }}
// />
// <Block.Text>{''}</Block.Text>
// </Block> */
// }

// {
//   /* <ScrollView contentContainerStyle={{}}>
// <Block marginTop={40}>
//   <Block.HStack>
//     <Block.Text>{i18n.translate('cat')}</Block.Text>
//     <Block.Text>{i18n.translate('dog')}</Block.Text>
//   </Block.HStack>
// </Block>
// <ProgressBarHorizontalList />
// <ProgressBarVerticalWithCircles />
// <CardDoubleDecker />
// <HomeScreen />
// <CardWithTextOnImage />
// <CardTextUnderImage />
// <BasicTextInput />
// <SingleDigitInput />
// <PasswordInput />
// <MobileNumberInput />
// <FullNameInput />
// <EmailInput />
// </ScrollView> */
// }

// // import React, { useState } from 'react';
// // function withCounterState(WrappedComponent) {
// //    return function (...props) {
// //       const [counter, setCounter] = useState(0);

// //       props['counter'] = counter;
// //       props['setCounter'] = setCounter;
// //       return <WrappedComponent {...props} />;
// //    }
// // }
