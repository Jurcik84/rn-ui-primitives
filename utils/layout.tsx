import React, {FunctionComponent, useMemo} from 'react';
import {Text, View} from 'react-native';
import {getStyleObFromProps, RNStyleTypes} from './style-props-to-style';

type ChildrenType = {
  children?: React.ReactChild | React.ReactChild[];
};
export const VStack: FunctionComponent<
  typeof View & RNStyleTypes & ChildrenType
> = (props) => {
  const style = useMemo(() => getStyleObFromProps(props), [props]);
  const {children} = props;
  return (
    <View
      style={[
        {
          flexDirection: 'column',
          justifyContent: 'space-between',
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export const HStack: FunctionComponent<
  typeof View & RNStyleTypes & ChildrenType
> = (props) => {
  const memoProps = useMemo(() => props, [props]);
  const style = useMemo(() => getStyleObFromProps(props), [memoProps]);
  const {children} = props;
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        style,
      ]}>
      {children}
    </View>
  );
};

function GridStack(props) {
  const {data = [], rows, columns} = props;

  const chunk = (arr: typeof data, size: number) =>
    Array.from({length: Math.ceil(arr.length / size)}, (_, i) =>
      arr.slice(i * size, i * size + size),
    );

  const dataToRender = chunk(data, columns);

  return <VStack></VStack>;
}
