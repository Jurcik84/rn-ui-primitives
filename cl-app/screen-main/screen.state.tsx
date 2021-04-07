import {State} from './screen.types';

export const initialState: Readonly<State> = {
  loading: true,
  error: '',
  users: [],
};
