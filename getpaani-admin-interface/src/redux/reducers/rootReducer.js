import { combineReducers } from 'redux';

import user from './user';
import addExpense from './addexpense';
import editExpense from './editexpense';
import expenseList from './expenseList';
export default combineReducers({
  user,
  addExpense,
  editExpense,
  expenseList
});
