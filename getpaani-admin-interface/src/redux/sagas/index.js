/* eslint-disable import/prefer-default-export */
import { takeLatest ,takeEvery} from 'redux-saga/effects';

import * as actionTypes from '../actionTypes';

import { userLoginSaga } from './userSagas';

import { addExpenseSaga } from './addexpenseSaga';
import {EditexpenseSaga}from './editexpenseSaga';
import {ExpenseListSaga} from './expenseListSaga'

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest(actionTypes.ADD_EXPENSE_INITIATE, addExpenseSaga)
  yield takeLatest(actionTypes.USER_LOGIN_INITIATE, userLoginSaga);
  yield takeLatest(actionTypes.EDIT_EXPENSES_INITIATE,EditexpenseSaga);
  yield takeEvery(actionTypes.EXPENSES_LIST_INITIATE,ExpenseListSaga);
}
