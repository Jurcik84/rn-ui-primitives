import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  Reducer,
  FunctionComponent
} from 'react';

// STATE TYPE

type UserType = {
  userId?: number;
  id?: number;
  title?: string;
  completed?: boolean;
};

type State = {
  loading: boolean;
  error: string;
  users: Array<UserType>;
};

type Actions =
  | {type: 'DATA_FETCH'; payload: Array<UserType>}
  | {type: 'LOADING_FETCH'}
  | {type: 'ERROR_FETCH'; payload: string};

const initialState = {
  loading: true,
  error: '',
  users: [],
};

type ContextType = {
  state: State;
  dispatch: React.Dispatch<Actions>;
};

//  const MainScreenContext = React.createContext({} as ContextType);

const MainScreenContext = createContext<ContextType>({
  state: initialState,
  dispatch: ({type}: {type: string}) => ({}),
  // dispatch: ()=>null ??? working but ?
});

// Initial state


// MUST use Reducer<State, Actions>
// cannot use classic pattern
// state:StateType, action: ActionType and return StateType
// error will be issued like this  dispatch({
//   type: 'DATA_FETCH',
//   payload: data,
// });
// expected 0 and given 1
export const mainScreenReducer: Reducer<State, Actions> = (
  state,
  action,
): State => {
  switch (action.type) {
    case 'DATA_FETCH':
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case 'LOADING_FETCH':
      return {
        ...state,
        loading: true,
      };

    case 'ERROR_FETCH':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const Root:FunctionComponent<{}> =(props)=> {
  const [state, dispatch] = useReducer(mainScreenReducer, initialState);
  useEffect(() => {
    dispatch({
      type: 'LOADING_FETCH',
    });
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: 'DATA_FETCH',
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: 'ERROR_FETCH',
          payload: error.message,
        });
      });
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
}
export function useMainScreenContext() {
  return useContext(MainScreenContext);
}
