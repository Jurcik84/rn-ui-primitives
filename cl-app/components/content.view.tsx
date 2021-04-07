import React, {ComponentProps, FunctionComponent, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {RNStyleTypes, getStyleFromProps} from './utils.propsToStyle';
import * as Colors from './colors';
type ContentViewTypes = RNStyleTypes &
  RNStyleTypes &
  ComponentProps<typeof View>;

const styles = StyleSheet.create({
  ContentView: {
    flex: 1,
    backgroundColor: Colors.black,
  },
});

const ContentView: FunctionComponent<ContentViewTypes> = (props) => {
  const {children} = props;
  const style = getStyleFromProps(props);
  return <View style={[styles.ContentView, style]}>{children}</View>;
};

export default ContentView;
