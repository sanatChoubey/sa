/* eslint-disable import/prefer-default-export */
import * as actionTypes from '../actionTypes';

export const userLoginInitiate = data => ({
  type: actionTypes.USER_LOGIN_INITIATE,
  payload: data,
});

export const userLoginSucess = data => ({
  type: actionTypes.USER_LOGIN_SUCCESS,
  payload: data,
});

export const userLoginError = data => ({
  type: actionTypes.USER_LOGIN_ERROR,
  payload: data,
});
