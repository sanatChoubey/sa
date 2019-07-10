import * as actionTypes from '../actionTypes';

const initialState = {
  signUpInProcess: false,
  isAuthenticated: false,
  userData: {},
  errorMessage: '',
};

function user(state = initialState, { type, payload }) {
  switch (type) {
  case actionTypes.USER_LOGIN_INITIATE:

    return { ...state, signUpInProcess: true, errorMessage: '' };

  case actionTypes.USER_LOGIN_SUCCESS:

    return {
      ...state, signUpInProcess: false, isAuthenticated: true, userData: payload,
    };

  case actionTypes.USER_LOGIN_ERROR:

    return { ...state, signUpInProcess: false, errorMessage: payload };

  default:
    return state;
  }
}

export default user;
