import {createContext} from 'react';
import {ContextType} from './screen.types';
import {initialState} from './screen.state';

export const MainScreenContext = createContext<ContextType>({
  state: initialState,
  // dispatch: ({type}: {type: string}) => ({}),
  dispatch: () => null,
});
