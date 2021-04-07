import React, {ComponentProps, ReactNode, FunctionComponent} from 'react';
import {Text, View, Image} from 'react-native';

import {getStyleFromProps, getComponentProps} from './utils.propsToStyle';

type ChildrenProps = {
  children?: ReactNode;
};

type RenderItemsType = {
  LeftCompType: ReactNode;
  MiddleCompType: ReactNode;
  RightCompType: ReactNode;
};

type StyleProps = {};

type ActionProps = {};

type DataProps = {};

type TableRowTypes = ChildrenProps & ActionProps & DataProps & StyleProps;

export default function (props: ComponentProps<typeof Image>) {
  const style = getStyleFromProps(props);
  const noStyleProps = getComponentProps(props);

  return <Image {...noStyleProps} style={[style]} />;
}
