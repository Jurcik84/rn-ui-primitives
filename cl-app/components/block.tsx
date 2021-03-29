import React, {ComponentProps, FunctionComponent} from 'react';
import {View, Text, Image, FlatList, ScrollView} from 'react-native';
import {transformPropsIntoStyle, StylePropStyle} from './utils.propsToStyle';

import {HStack, VStack} from './layouts';

type TextSizeTypes = {
  h1: boolean;
  h2: boolean;
  h3: boolean;
  h4: boolean;
};

type BlockTypes = StylePropStyle;

export class Block extends React.Component<
  BlockTypes & ComponentProps<typeof VStack> & ComponentProps<typeof View>,
  {}
> {
  state = {};
  componentDidMount() {}
  componentDidUpdate() {}
  render(): React.ReactNode {
    const {children, style = {}} = this.props;
    const styleFromProps = transformPropsIntoStyle(this.props);
    return (
      <VStack {...style} style={[{flex: 1}, styleFromProps]}>
        {children}
      </VStack>
    );
  }

  static Circle = (props: BlockTypes & ComponentProps<typeof View>) => {
    return <View></View>;
  };

  static Header = (props: BlockTypes & ComponentProps<typeof View>) => {
    const {children = ''} = props;
    return (
      <View
        style={{
          marginBottom: 23,
        }}></View>
    );
  };

  static Text = (
    props: BlockTypes & TextSizeTypes & ComponentProps<typeof Text>,
  ) => {
    const styleFromProps = transformPropsIntoStyle(props);
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

    return children && typeof children === 'string' ? (
      <Text
        style={[
          styleFromProps,
          {
            fontSize: baseFontSzie,
          },
        ]}>
        {children}
      </Text>
    ) : null;
  };
  static Title = (props: BlockTypess & ComponentProps<typeof Text>) => {
    const {children = ''} = props;
    return children && typeof children === 'string' ? (
      <Text>{children.toUpperCase()}</Text>
    ) : null;
  };
  static Divider = (props: BlockTypess & ComponentProps<typeof View>) => {
    return (
      <View
        style={{
          marginBottom: 23,
        }}></View>
    );
  };
  static HStack = HStack;
  static VStack = VStack;
  static ForEach = (props: BlockTypes & ComponentProps<typeof FlatList>) => {
    return <FlatList {...props} />;
  };
  static Image = (props: BlockTypes & ComponentProps<typeof Image>) => {
    const {style = {}} = props;
    const styleFromProps = transformPropsIntoStyle(props);
    return <Image style={[styleFromProps, style]} {...props} />;
  };

  static ScrollView = (
    props: BlockTypes & ComponentProps<typeof ScrollView>,
  ) => {
    const {style = {}} = props;
    const styleFromProps = transformPropsIntoStyle(props);
    return (
      <ScrollView {...props} contentContainerStyle={[styleFromProps, style]} />
    );
  };
}
