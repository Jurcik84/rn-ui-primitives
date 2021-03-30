export enum ACtionsTypes {
  DATA_FETCH = 'DATA_FETCH',
  LOADING_FETCH = 'LOADING_FETCH',
  ERROR_FETCH = 'ERROR_FETCH',
}

export type UserType = {
  userId?: number;
  id?: number;
  title?: string;
  completed?: boolean;
};

export type State = {
  loading: boolean;
  error: string;
  users: Array<UserType>;
};

export type Actions =
  | {type: ACtionsTypes.DATA_FETCH; payload: Array<UserType>}
  | {type: ACtionsTypes.LOADING_FETCH}
  | {type: ACtionsTypes.ERROR_FETCH; payload: string};

export type ContextType = {
  state: State;
  dispatch: React.Dispatch<Actions>;
};

export type HttpErrorType = {
  message: string;
};

//  const MainScreenContext = React.createContext({} as ContextType);
// Initial state

// MUST use Reducer<State, Actions>
// cannot use classic pattern
// state:StateType, action: ActionType and return StateType
// error will be issued like this  dispatch({
//   type: 'DATA_FETCH',
//   payload: data,
// });
// expected 0 and given 1
