import React, {
  ComponentProps,
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from 'react';
import {StyleSheet, View} from 'react-native';
import {getStyleFromProps, RNStyleTypes} from './utils.propsToStyle';
import * as Colors from './colors';

type NavigationViewTypes = RNStyleTypes & ComponentProps<typeof View>;

const styles = StyleSheet.create({
  ContentView: {
    flex: 1,
    marginTop: 100,
    backgroundColor: Colors.blue,
  },
});

const NavigationViewContext = React.createContext(
  <View style={[styles.ContentView]}></View>,
);

export const NavigationView: FunctionComponent<NavigationViewTypes> = (
  props,
) => {
  const {children} = props;
  const style = getStyleFromProps(props);

  const [index, setIndex] = useState(0)
  const [childrenView, setChildrenView] = useState(children);
  

  const navigationLink = (Destination: NavigationViewTypes) => {
    setIndex(index+1);
    setChildrenView(Destination);
  };

  useEffect(() => {
    console.log('nav mounted');
  }, []);

  const value = {navigationLink};

  return (
    <View style={[styles.ContentView, style]}>
      <NavigationViewContext.Provider
        {...props}
        children={childrenView}
        value={value}
      />
    </View>
  );
};

export function useNavigationView() {
  return useContext(NavigationViewContext);
}
