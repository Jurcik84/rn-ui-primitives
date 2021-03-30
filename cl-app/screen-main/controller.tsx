import React, {
  useContext,
  useEffect,
  useReducer,
  FunctionComponent,
} from 'react';

// lang translation
import {initialize} from '../util/localization';

import {MainScreenContext} from './screen.context'
import {initialState} from './screen.state';
import {mainScreenReducer} from './screen.reducer';
import {useGetFetch} from './screen.http'


export const Root: FunctionComponent<{}> = (props) => {
  const [state, dispatch] = useReducer(mainScreenReducer, initialState);

  useEffect(() => {
    initialize();
    useGetFetch(dispatch)
  }, []);

  return (
    <MainScreenContext.Provider
      value={{
        state: state,
        dispatch,
      }}
      {...props}
    />
  );
};
export function useMainScreenContext() {
  return useContext(MainScreenContext);
}
