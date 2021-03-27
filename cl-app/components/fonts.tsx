import React, {FunctionComponent} from 'react';
import {Text} from 'react-native';
import {transformPropsIntoStyle, StylePropStyle} from './utils.propsToStyle';

type TextTypes = {
  style: {};
  children: any;
};

const TextView: FunctionComponent<StylePropStyle & TextTypes> = (props) => {
  const {children, style = {}} = props;
  const styleFromUtil = transformPropsIntoStyle(props);

  return <Text style={[styleFromUtil, style]}>{children}</Text>;
};

export default TextView;
