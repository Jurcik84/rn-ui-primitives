import React, {FunctionComponent, ComponentProps} from 'react';
import {View, StyleSheet} from 'react-native';

import * as CONSTANTS from './index';

//
import {
  transformPropsIntoStyle,
  StylePropStyle,
  LayoutTypes,
} from './utils.propsToStyle';

const styled = StyleSheet.create({
  container: {
    // padding: CONSTANTS.BASE_PADDING,
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: 'yellow',
    // borderBottomWidth: 1
  },
  hstack: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // borderWidth: 1,
    // backgroundColor: 'green',
    // borderBottomWidth: 1
  },
  vstack: {
    flexDirection: 'column',
    // borderBottomWidth: 1
    // borderWidth: 1,
    // backgroundColor: 'pink',
  },
  section: {
    backgroundColor: 'white',
    // marginVertical: CONSTANTS.BASE,
    // marginHorizontal: CONSTANTS.BASE,
  },
});

interface DividerTypes extends LayoutTypes {
  size?: number;
}

export const Divider: FunctionComponent<
  ComponentProps<typeof View> &
    LayoutTypes &
    Partial<StylePropStyle> &
    DividerTypes
> = (props) => {
  const {size = 1, children, style = {}} = props;
  const styleForElement = transformPropsIntoStyle(props);
  return (
    <View
      style={[
        {
          width: '100%',
          height: 1,
          backgroundColor: '#ccc',
          marginVertical: 10,
        },
        styleForElement,
        style,
      ]}>
      {children}
    </View>
  );
};

export const Spacer: FunctionComponent<
  ComponentProps<typeof View> & LayoutTypes & Partial<StylePropStyle>
> = (props) => {
  const {children, style = {}} = props;
  const styleForElement = transformPropsIntoStyle(props);

  return <View style={[styleForElement, style]}></View>;
};

export const HStack: FunctionComponent<
  ComponentProps<typeof View> & LayoutTypes & Partial<StylePropStyle>
> = (props) => {
  const {children, style = {}} = props;
  const styleForElement = transformPropsIntoStyle(props);
  return (
    <View style={[styled.hstack, styleForElement, style]}>{children}</View>
  );
};

export const VStack: FunctionComponent<
  ComponentProps<typeof View> & LayoutTypes & Partial<StylePropStyle>
> = (props) => {
  const {children, style = {}} = props;
  const styleForElement = transformPropsIntoStyle(props);

  return (
    <View style={[styled.vstack, styleForElement, style]}>{children}</View>
  );
};


export const Container: FunctionComponent<
  ComponentProps<typeof View> & LayoutTypes & Partial<StylePropStyle>
> = (props) => {
  const {children, style = {}} = props;
  const styleForElement = transformPropsIntoStyle(props);

  return (
    <View style={[styled.container, styleForElement, style]}>{children}</View>
  );
};

export const Section: FunctionComponent<
  ComponentProps<typeof View> & LayoutTypes & Partial<StylePropStyle>
> = (props) => {
  const {children, style = {}} = props;
  const styleForElement = transformPropsIntoStyle(props);

  return (
    <View style={[styled.section, styleForElement, style]}>{children}</View>
  );
};
