import { Dispatch} from 'react';
import {fetchLoading, fetchDate, fetchError} from './screen.actions';
import {Actions} from './screen.types';

export const useGetFetch = (dispatch: Dispatch<Actions>):void => {
    dispatch(fetchLoading());
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchDate(data));
      })
      .catch((error) => {
        dispatch(fetchError(error));
      });
};
