import React, {FunctionComponent, ComponentProps} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {transformPropsIntoStyle, StylePropStyle} from './utils.propsToStyle';



// TYPES
// ComponentProps<typeof View>
// ComponentProps<typeof Text>
// ComponentProps<typeof ScrollView>


import * as CONSTANTS from './index';

export const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d723',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba4',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f635',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d726',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba7',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f638',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d729',
    title: 'Third Item',
  },
];

type ForEachTypes = {
  data?: Array<any>;
  children?: any;
  horizontal?: boolean;
  style?: {};
};

export const ForEach: FunctionComponent<ComponentProps<typeof ScrollView> & ForEachTypes & Partial<StylePropStyle>>  = (props) => {
  const {data = [], children, horizontal = true, style = {}} = props;
  const styleForElement = React.useMemo(() => transformPropsIntoStyle(props), [
    props,
  ]);

  return (
    <ScrollView
     showsHorizontalScrollIndicator={false}
      contentContainerStyle={[styleForElement, style]}
      horizontal={horizontal}>
      {data.map &&
        data.map((item, index) =>
          typeof children === 'function'
            ? children(item, index)
            : () => <Text key={index}>N/A</Text>,
        )}
    </ScrollView>
  );
};
