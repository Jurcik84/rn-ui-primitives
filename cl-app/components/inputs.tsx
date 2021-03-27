import React, {FunctionComponent, ComponentProps} from 'react';
import {StyleSheet, TextInput, Text} from 'react-native';

import {transformPropsIntoStyle, StylePropStyle} from './utils.propsToStyle';
import {HStack, VStack} from './layouts';

const bgColor = '#EDF1F766';
const borderColor = '#CACADA52';

const singleDigitInputStyle = {
  width: 62,
  height: 58,
};

const styles = StyleSheet.create({
  generalInputStyles: {
    backgroundColor: bgColor,
    borderColor: borderColor,
    width: 343,
    height: 48,
    borderRadius: 8,
    padding: 13,
    fontSize: 15,
  },
  singleDigitInputStyle: {
    backgroundColor: bgColor,
    borderColor: borderColor,
    width: 62,
    height: 58,
    padding: 13,
    fontSize: 18,
  },
  mobuleNumberInputStyle: {
    backgroundColor: bgColor,
    borderColor: borderColor,
  },
});

type InputTypes = {} & Partial<StylePropStyle> &
  ComponentProps<typeof TextInput>;

export const BasicTextInput: FunctionComponent<InputTypes> = (props) => {
  const {children, style = {}} = props;
  const styleForElement = transformPropsIntoStyle(props);
  return (
    <VStack>
      <Text>Label</Text>
      <TextInput placeholder="Some text" style={[styles.generalInputStyles]} />
      <Text>Error or Warning</Text>
    </VStack>
  );
};
export const SingleDigitInput: FunctionComponent<InputTypes> = (props) => {
  const {children, style = {}} = props;
  const styleForElement = transformPropsIntoStyle(props);
  return (
    <VStack>
      <Text>Label</Text>
      <TextInput
        placeholder="1"
        textAlign="center"
        maxLength={1}
        style={[styles.singleDigitInputStyle, styleForElement]}
      />
      <Text>Error or Warning</Text>
    </VStack>
  );
};
export const PasswordInput: FunctionComponent<InputTypes> = (props) => {
  const {children, style = {}} = props;
  const styleForElement = transformPropsIntoStyle(props);
  return (
    <VStack>
      <Text>Label</Text>
      <TextInput
        placeholder="Password"
        style={[styles.generalInputStyles, styleForElement]}
      />
      <Text>Error or Warning</Text>
    </VStack>
  );
};

// icone and nu prefix on left
export const MobileNumberInput: FunctionComponent<InputTypes> = (props) => {
  const {children, style = {}} = props;
  const styleForElement = transformPropsIntoStyle(props);
  return (
    <VStack>
      <Text>Label</Text>
      <HStack>
        <HStack
          alignItems="center"
          padding={16}
          backgroundColor={bgColor}
          borderRightWidth={1}
          borderRightColor={borderColor}
          borderTopLeftRadius={8}
          borderBottomLeftRadius={8}>
          <Text>icone</Text>
          <Text>+44</Text>
        </HStack>
        <TextInput
          placeholder="Mobile number"
          style={[
            styles.generalInputStyles,
            styleForElement,
            {
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            },
          ]}
        />
      </HStack>
      <Text>Error or Warning</Text>
    </VStack>
  );
};

export const EmailInput: FunctionComponent<InputTypes> = (props) => {
  const {children, style = {}} = props;
  const styleForElement = transformPropsIntoStyle(props);
  return (
    <VStack>
      <Text>Label</Text>
      <TextInput
        placeholder="Email address"
        style={[styles.generalInputStyles, styleForElement]}
      />
      <Text>Error or Warning</Text>
    </VStack>
  );
};
export const PostCodeInput: FunctionComponent<InputTypes> = (props) => {
  const {children, style = {}} = props;
  const styleForElement = transformPropsIntoStyle(props);
  return (
    <VStack>
      <Text>Label</Text>
      <TextInput style={[styles.generalInputStyles, styleForElement]} />
      <Text>Error or Warning</Text>
    </VStack>
  );
};
export const SearchAddressInput: FunctionComponent<InputTypes> = (props) => {
  const {children, style = {}} = props;
  const styleForElement = transformPropsIntoStyle(props);
  return (
    <VStack>
      <Text>Label</Text>
      <TextInput style={[styles.generalInputStyles, styleForElement]} />
      <Text>Error or Warning</Text>
    </VStack>
  );
};

export const FullNameInput: FunctionComponent<InputTypes> = (props) => {
  const {children, style = {}} = props;
  const styleForElement = transformPropsIntoStyle(props);
  return (
    <VStack>
      <Text>Label</Text>
      <TextInput
        placeholder="Full Name"
        style={[styles.generalInputStyles, styleForElement]}
      />
      <Text>Error or Warning</Text>
    </VStack>
  );
};
