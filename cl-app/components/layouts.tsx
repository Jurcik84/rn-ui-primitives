import React, {FunctionComponent, ComponentProps} from 'react';
import {View, StyleSheet} from 'react-native';

import * as CONSTANTS from './index';

//
import {
  getStyleFromProps,
  RNStyleTypes,
  LayoutTypes,
} from './utils.propsToStyle';

const styled = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  hstack: {
    flexDirection: 'row',
  },
  vstack: {
    flexDirection: 'column',
  },
  section: {
    backgroundColor: 'white',
  },
});

interface DividerTypes extends LayoutTypes {
  size?: number;
}

export const Divider: FunctionComponent<
  ComponentProps<typeof View> &
    LayoutTypes &
    Partial<RNStyleTypes> &
    DividerTypes
> = (props) => {
  const {size = 1, children, style = {}} = props;
  const styleForElement = getStyleFromProps(props);
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
  ComponentProps<typeof View> & LayoutTypes & Partial<RNStyleTypes>
> = (props) => {
  const {children, style = {}} = props;
  const styleForElement = getStyleFromProps(props);

  return <View style={[styleForElement, style]}></View>;
};

export const HStack: FunctionComponent<
  ComponentProps<typeof View> & LayoutTypes & Partial<RNStyleTypes>
> = (props) => {
  const {children, style = {}} = props;
  const styleForElement = getStyleFromProps(props);

  // const centerContent =
  //   React.Children.count(children) === 1
  //     ? {justifyContent: 'center', alignItems: 'center', flex: 1}
  //     : {};

  return (
    <View style={[styled.hstack, styleForElement, style]}>
     {children ? children : null}
    </View>
  );
};

// data
// actions
// subsc
// style
export const VStack: FunctionComponent<
  ComponentProps<typeof View> & LayoutTypes & Partial<RNStyleTypes>
> = (props) => {
  const {children, style = {}} = props;
  const styleForElement = getStyleFromProps(props);

  const centerContent =
    React.Children.count(children) === 1
      ? {
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }
      : {};

  return (
    <View style={[styled.vstack, styleForElement, style]}>
      {children ? children : null}
    </View>
  );
};

export const Container: FunctionComponent<
  ComponentProps<typeof View> & LayoutTypes & Partial<RNStyleTypes>
> = (props) => {
  const {children, style = {}} = props;
  const styleForElement = getStyleFromProps(props);

  return (
    <View style={[styled.container, styleForElement, style]}>{children}</View>
  );
};

export const Section: FunctionComponent<
  ComponentProps<typeof View> & LayoutTypes & Partial<RNStyleTypes>
> = (props) => {
  const {children, style = {}} = props;
  const styleForElement = getStyleFromProps(props);

  return (
    <View style={[styled.section, styleForElement, style]}>{children}</View>
  );
};
