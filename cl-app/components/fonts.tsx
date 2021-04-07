import React, {
  useMemo,
  FunctionComponent,
  ComponentProps,
  ReactNode,
} from 'react';
import {Text} from 'react-native';
import {
  getStyleFromProps,
  RNStyleTypes,
  getComponentProps,
} from './utils.propsToStyle';

type TextProps = {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  children?: ReactNode;
  style?: {
    [key: string]: number | string | null;
  };
};

export default (
  props: RNStyleTypes & TextProps & ComponentProps<typeof Text>,
) => {
  const styleFromProps = useMemo(() => getStyleFromProps(props), []);
  const propsForComp = useMemo(() => getComponentProps(props), []);

  const {children = '', h1, h2, h3, h4, h5, h6, style = {}} = props;

  let baseFontSzie = 16;

  const fontSizes = {
    h1: 40,
    h2: 34,
    h3: 28,
    h4: 22,
    h5: 15,
    h6: 13,
  };

  if (h1) baseFontSzie = fontSizes['h1'];
  if (h2) baseFontSzie = fontSizes['h2'];
  if (h3) baseFontSzie = fontSizes['h3'];
  if (h4) baseFontSzie = fontSizes['h4'];
  if (h5) baseFontSzie = fontSizes['h5'];
  if (h6) baseFontSzie = fontSizes['h6'];

  return children &&
    (typeof children === 'string' || typeof children === 'number') ? (
    <Text
      {...propsForComp}
      style={[
        styleFromProps,
        {
          fontSize: baseFontSzie,
        },
        style,
      ]}>
      {children}
    </Text>
  ) : null;
};
