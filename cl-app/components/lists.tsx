import React, {
  Children,
  FunctionComponent,
  ComponentProps,
  ReactNode,
  cloneElement,
} from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {getStyleFromProps, RNStyleTypes} from './utils.propsToStyle';
import * as Colors from './colors';
import {VStack} from './layouts';

type ChildrenProps = {
  children?: ReactNode;
};

type StyleProps = RNStyleTypes;

type ActionProps = {};

type DataProps = {};

type ListProps = ChildrenProps & ActionProps & DataProps & StyleProps;

const List: FunctionComponent<
  ListProps & Partial<ComponentProps<typeof View>>
> = (props) => {
  const {children} = props;
  const styleFromProps = getStyleFromProps(props);
  const style = {
    ...styleFromProps,
    flex: 1,
  };
  return (
    <View style={[style]}>
      {Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            // borderWidth: 1,
            borderBottomColor: 'red',
            padding: 20,
            backgroundColor: 'red',
            borderBottomWidth: 2,
            margin: 10,
          },
        });
      })}
    </View>
  );
};

export default List;
