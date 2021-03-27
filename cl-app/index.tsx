import React from 'react';
import HomeScreen from './screen-main/views/index'
import SecurityCode from './screen-validate-code/views'
import {BasicTextInput, SingleDigitInput, PasswordInput,MobileNumberInput, FullNameInput, EmailInput} from './components/inputs'
import {VStack} from './components/layouts'
export default function () {
  return (
   <VStack
   marginTop={100}
   padding={50}
   borderWidth = {1}
   flex={1}
   
   >
      <BasicTextInput  />
      <SingleDigitInput />
      <PasswordInput />
      <MobileNumberInput />
      <FullNameInput />
      <EmailInput />
   </VStack>
  );
}
