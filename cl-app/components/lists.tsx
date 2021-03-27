import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

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

const styled = StyleSheet.create({
  listContainer: {
    width: 4 * CONSTANTS.BASE,
    height: 4 * CONSTANTS.BASE,
    borderWidth: 1,
    borderRadius: 12,
    marginRight: CONSTANTS.BASE,
    padding: 32 / 5,
  },
});

const listItemWithTextOnImage = () => (
  <View style={[styled.listContainer]}>
    <Text>Some Title</Text>
  </View>
);
const listItemWithTextUnderImage = () => (
  <View style={[styled.listContainer]}>
    <Text>Some Title</Text>
  </View>
);
// export function ForEach({data = [], children}) {
//   return (
//     // data?.map && data.map((item, index) => children && children(item, index))
//     <FlatList
//       keyExtractor={(item, index) => Math.random() * 1000 * index}
//       horizontal
//       showsHorizontalScrollIndicator={false}
//       data={data}
//       renderItem={({item}) => children && children(item)}
//     />
//   );
// }


type ForEachTypes = {
  data?: Array<any>;
  children?: any;
  horizontal?: boolean;
  spacing?: number,
  style?: {}
};

export function ForEach({
  data = [],
  children,
  horizontal = true,
  spacing=0,
  style={}
}: ForEachTypes) {
  return (
    <ScrollView contentContainerStyle={[style]} horizontal={horizontal}>
      {data.map &&
        data.map((item, index) =>
          typeof children === 'function'
            ? children(item, index)
            : () => <Text>N/A</Text>,
        )}
    </ScrollView>
  );
}
