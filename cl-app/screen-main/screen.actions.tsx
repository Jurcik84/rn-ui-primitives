import {Actions, UserType, HttpErrorType, ACtionsTypes} from './screen.types';

export const fetchLoading = (): Actions => ({
  type: ACtionsTypes.LOADING_FETCH,
});

export const fetchDate = (data: UserType[]): Actions => ({
  type: ACtionsTypes.DATA_FETCH,
  payload: data,
});

export const fetchError = (error: HttpErrorType): Actions => ({
  type: ACtionsTypes.ERROR_FETCH,
  payload: error.message,
});
