import React from 'react';
import HomeScreen from './screen-main/views/index';
import SecurityCode from './screen-validate-code/views';
import {
  BasicTextInput,
  SingleDigitInput,
  PasswordInput,
  MobileNumberInput,
  FullNameInput,
  EmailInput,
} from './components/inputs';
import {CardWithTextOnImage, CardTextUnderImage,CardDoubleDecker} from './components/list.items';
import {ProgressBarVerticalWithCircles, ProgressBarHorizontalList} from './components/progress'
import {Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
export default function () {
  return (
    <ScrollView contentContainerStyle={{
      padding: 20
    }}>
      <ProgressBarHorizontalList />
      <ProgressBarVerticalWithCircles />
      <CardDoubleDecker />
      <HomeScreen />
      <CardWithTextOnImage />
      <CardTextUnderImage />
      <BasicTextInput />
      <SingleDigitInput />
      <PasswordInput />
      <MobileNumberInput />
      <FullNameInput />
      <EmailInput />
    </ScrollView>
  );
}
