import React, {
  useContext,
  useEffect,
  useReducer,
  FunctionComponent,
} from 'react';
import {Linking} from 'react-native';

// lang translation
import {initialize} from '../utils/localization';

import {MainScreenContext} from './screen.context';
import {initialState} from './screen.state';
import {mainScreenReducer} from './screen.reducer';
import {useGetFetch} from './screen.http';

// COOL WEB SITE TO LEARN
// https://hasura.io/learn/graphql/react-native/queries/1-fetch-todos-query/
// https://www.carlrippon.com/getting-started-with-react-query-and-typescript/

export const Root: FunctionComponent<{}> = (props) => {
  const [state, dispatch] = useReducer(mainScreenReducer, initialState);

  useEffect(() => {
    initialize();
    useGetFetch(dispatch);
    console.log('__DEV__', __DEV__);
  }, []);

  const value = {
    state: state,
    dispatch,
  };
  return <MainScreenContext.Provider value={value} {...props} />;
};
export function useMainScreenContext() {
  return useContext(MainScreenContext);
}

// TYESCRIP resurces
// https://ts.chibicode.com/todo/
