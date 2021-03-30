import  {Reducer} from 'react'
import {State,Actions, ACtionsTypes} from './screen.types'

export const mainScreenReducer: Reducer<State, Actions> = (
    state,
    action,
  ): State => {
    switch (action.type) {
      case ACtionsTypes.DATA_FETCH:
        return {
          ...state,
          loading: false,
          users: action.payload,
        };
  
      case ACtionsTypes.LOADING_FETCH:
        return {
          ...state,
          loading: true,
        };
  
      case ACtionsTypes.ERROR_FETCH:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };