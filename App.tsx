import React, {createContext, useEffect, useState, useContext} from 'react';
import HomeScreen from './cl-app/screen-main/views/section.container';
import SecurityCode from './cl-app/screen-validate-code/views';
import {
  BasicTextInput,
  SingleDigitInput,
  PasswordInput,
  MobileNumberInput,
  FullNameInput,
  EmailInput,
} from './cl-app/components/inputs';

import {Block} from './cl-app/components/block';

import {
  CardWithTextOnImage,
  CardTextUnderImage,
  CardDoubleDecker,
} from './cl-app/components/list.items';
import {
  ProgressBarVerticalWithCircles,
  ProgressBarHorizontalList,
} from './cl-app/components/progress';
import {ScrollView} from 'react-native-gesture-handler';

export default function  App() {
  return (
    <ScrollView contentContainerStyle={{
      
    }}>
      {/* <ProgressBarHorizontalList />
      <ProgressBarVerticalWithCircles />
      <CardDoubleDecker /> */}
      <HomeScreen />
      {/* <CardWithTextOnImage />
      <CardTextUnderImage />
      <BasicTextInput />
      <SingleDigitInput />
      <PasswordInput />
      <MobileNumberInput />
      <FullNameInput />
      <EmailInput /> */}
    </ScrollView>
  );
}

{
  /* <Block padding={30}>
<Block.Image
  height={100}
  width={100}
  borderWidth={1}
  source={{
    uri:
      'https://static.wixstatic.com/media/21f9f0e9b767823b051d09a6dbbaf022.jpg/v1/fill/w_360,h_360,al_c,lg_1,q_80/Moving%20Boxes.jpg',
  }}
/>
<Block.Text>{''}</Block.Text>
</Block> */
}
