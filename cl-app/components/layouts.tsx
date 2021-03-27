import React, {useState, useEffect, useRef, useMemo} from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Image,
  Dimensions,
  Easing,
  TouchableOpacity,
} from 'react-native';

import * as CONSTANTS from './index';

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
    justifyContent: 'space-between',
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
  },
});

const allStylesRN = [
  'alignContent',
  'alignItems',
  'alignSelf',
  'aspectRatio',
  'backfaceVisibility',
  'backgroundColor',
  'borderBottomColor',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderBottomWidth',
  'borderColor',
  'borderLeftColor',
  'borderLeftWidth',
  'borderRadius',
  'borderRightColor',
  'borderRightWidth',
  'borderStyle',
  'borderTopColor',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderTopWidth',
  'borderWidth',
  'bottom',
  'color',
  'decomposedMatrix',
  'direction',
  'display',
  'elevation',
  'flex',
  'flexBasis',
  'flexDirection',
  'flexGrow',
  'flexShrink',
  'flexWrap',
  'fontFamily',
  'fontSize',
  'fontStyle',
  'fontVariant',
  'fontWeight',
  'height',
  'includeFontPadding',
  'justifyContent',
  'left',
  'letterSpacing',
  'lineHeight',
  'margin',
  'marginBottom',
  'marginHorizontal',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginVertical',
  'maxHeight',
  'maxWidth',
  'minHeight',
  'minWidth',
  'opacity',
  'overflow',
  'overlayColor',
  'padding',
  'paddingBottom',
  'paddingHorizontal',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingVertical',
  'position',
  'resizeMode',
  'right',
  'rotation',
  'scaleX',
  'scaleY',
  'shadowColor',
  'shadowOffset',
  'shadowOpacity',
  'shadowRadius',
  'textAlign',
  'textAlignVertical',
  'textDecorationColor',
  'textDecorationLine',
  'textDecorationStyle',
  'textShadowColor',
  'textShadowOffset',
  'textShadowRadius',
  'tintColor',
  'top',
  'transform',
  'transformMatrix',
  'translateX',
  'translateY',
  'width',
  'writingDirection',
  'zIndex',
];


type StylePropStyle = {
  alignContent: unknown;
  alignItems: unknown;
  alignSelf: unknown;
  aspectRatio: unknown;
  backfaceVisibility: unknown;
  backgroundColor: unknown;
  borderBottomColor: unknown;
  borderBottomLeftRadius: unknown;
  borderBottomRightRadius: unknown;
  borderBottomWidth: unknown;
  borderColor: unknown;
  borderLeftColor: unknown;
  borderLeftWidth: unknown;
  borderRadius: unknown;
  borderRightColor: unknown;
  borderRightWidth: unknown;
  borderStyle: unknown;
  borderTopColor: unknown;
  borderTopLeftRadius: unknown;
  borderTopRightRadius: unknown;
  borderTopWidth: unknown;
  borderWidth: unknown;
  bottom: unknown;
  color: unknown;
  decomposedMatrix: unknown;
  direction: unknown;
  display: unknown;
  elevation: unknown;
  flex: unknown;
  flexBasis: unknown;
  flexDirection: unknown;
  flexGrow: unknown;
  flexShrink: unknown;
  flexWrap: unknown;
  fontFamily: unknown;
  fontSize: unknown;
  fontStyle: unknown;
  fontVariant: unknown;
  fontWeight: unknown;
  height: unknown;
  includeFontPadding: unknown;
  justifyContent: unknown;
  left: unknown;
  letterSpacing: unknown;
  lineHeight: unknown;
  margin: unknown;
  marginBottom: unknown;
  marginHorizontal: unknown;
  marginLeft: unknown;
  marginRight: unknown;
  marginTop: unknown;
  marginVertical: unknown;
  maxHeight: unknown;
  maxWidth: unknown;
  minHeight: unknown;
  minWidth: unknown;
  opacity: unknown;
  overflow: unknown;
  overlayColor: unknown;
  padding: unknown;
  paddingBottom: unknown;
  paddingHorizontal: unknown;
  paddingLeft: unknown;
  paddingRight: unknown;
  paddingTop: unknown;
  paddingVertical: unknown;
  position: unknown;
  resizeMode: unknown;
  right: unknown;
  rotation: unknown;
  scaleX: unknown;
  scaleY: unknown;
  shadowColor: unknown;
  shadowOffset: unknown;
  shadowOpacity: unknown;
  shadowRadius: unknown;
  textAlign: unknown;
  textAlignVertical: unknown;
  textDecorationColor: unknown;
  textDecorationLine: unknown;
  textDecorationStyle: unknown;
  textShadowColor: unknown;
  textShadowOffset: unknown;
  textShadowRadius: unknown;
  tintColor: unknown;
  top: unknown;
  transform: unknown;
  transformMatrix: unknown;
  translateX: unknown;
  translateY: unknown;
  width: unknown;
  writingDirection: unknown;
  zIndex: unknown;
};

type GeneralObjectType = {[propName: string]: unknown};

function transformPropsIntoStyle(props: GeneralObjectType): GeneralObjectType {
  const style = {};
  Object.keys(props).forEach((propName:string) => {
    if (allStylesRN.some((styleProp) => propName === styleProp)) {
      style[propName] = props[propName];
    }
  });
  return style;
}

// ----- BASE TYPE FOR LAYOUT
type LayoutTypes = {
  children?: JSX.Element | [] | null;
  style?: {
    [propName: string]: unknown;
  };
};

interface DividerTypes extends LayoutTypes {
  size?: number;
}

export function Divider(props: DividerTypes): JSX.Element {
  const {size = 1, children, style = {}} = props;
  const styleForElement = transformPropsIntoStyle(props);
  return (
    <View
      {...styleForElement}
      style={[
        {
          width: '100%',
          height: CONSTANTS.BASE * size,
        },
        style,
      ]}>
      {children}
    </View>
  );
}

export function HStack(
  props: LayoutTypes & Partial<StylePropStyle>,
): JSX.Element {
  const {children, style = {}} = props;
  const styleForElement = transformPropsIntoStyle(props);
  return (
    <View {...styleForElement} style={[styled.hstack, style]}>
      {children}
    </View>
  );
}

export function VStack(
  props: LayoutTypes & Partial<StylePropStyle>,
): JSX.Element {
  const {children, style = {}} = props;
  const styleForElement = transformPropsIntoStyle(props);
  return (
    <View {...styleForElement} style={[styled.vstack, style]}>
      {children}
    </View>
  );
}

export function Container(
  props: LayoutTypes & Partial<StylePropStyle>,
): JSX.Element {
  const {children, style = {}} = props;
  const styleForElement = transformPropsIntoStyle(props);

  return (
    <View {...styleForElement} style={[styled.container, style]}>
      {children}
    </View>
  );
}

export function Section(
  props: LayoutTypes & Partial<StylePropStyle>,
): JSX.Element {
  const {children, style = {}} = props;
  const styleForElement = transformPropsIntoStyle(props);
  return <View style={[styled.section, style]}>{children}</View>;
}
