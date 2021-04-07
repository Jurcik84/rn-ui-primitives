import React, {ComponentProps, ReactNode, FunctionComponent} from 'react';
import {Text, View} from 'react-native';

import {Block} from './block';
import {HStack, VStack} from './layouts';
import {RNStyleTypes, getStyleFromProps} from './utils.propsToStyle';
import List from './lists';
import * as Color from './colors';

import {ScrollView} from 'react-native-gesture-handler';

type ChildrenProps = {
  children?: ReactNode;
};

type RenderItemsType = {
  LeftCompType: ReactNode;
  MiddleCompType: ReactNode;
  RightCompType: ReactNode;
};

type StyleProps = RNStyleTypes;

type ActionProps = {};

type DataProps = {};

type TableRowTypes = ChildrenProps & ActionProps & DataProps & StyleProps;

//   FunctionComponent<
//ListProps & Partial<ComponentProps<typeof View>>

const TableRow: FunctionComponent<
  TableRowTypes & ComponentProps<typeof View>
> = (props) => {
  const {leftComponent, middleComponent, rightComponent} = props;
  return (
    <HStack {...props}>
      {typeof leftComponent === 'function' ? leftComponent() : leftComponent}
      {typeof middleComponent === 'function'
        ? middleComponent()
        : middleComponent}
      {typeof rightComponent === 'function' ? rightComponent() : rightComponent}
    </HStack>
  );
};




export default TableRow;



{/* <TableRow
       
padding={20}
flex={1}
alignItems={'center'}
leftComponent={() => (
  <Image
    borderRadius={18}
    width={36}
    height={36}
    source={{
      uri: 'https://i.ebayimg.com/images/g/LnYAAOSweAVZmF2W/s-l500.jpg',
    }}
  />
)}
middleComponent={() => (
  <VStack marginLeft={14} flex={1} borderWidth={0}>
    <Text h5>Juraj Hynek RN dev</Text>
    <Text>Hello</Text>
  </VStack>
)}
rightComponent={() => (
  <VStack
    backgroundColor={Color.green}
    borderRadius={16}
    borderWidth={0}
    alignItems={'center'}
    justifyContent={'center'}
    height={30}
    width={75}>
    <Text>Hello</Text>
  </VStack>
)}
borderWidth={0}
/> */}