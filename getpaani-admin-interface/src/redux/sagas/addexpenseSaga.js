import { put } from 'redux-saga/effects';
import {gql} from 'apollo-boost';
import {AddExpenseSuccess,AddExpenseError} from '@app/redux/actions/expenseAction';


import { client } from '@apollo-client/ApolloClientProvider';

export function* addExpenseSaga({ payload }){
    const AddExpenseMutation = gql`
      mutation addExpense($expenseInput: AddExpenseInput!){
        addExpense(expenseInput: $expenseInput){
          _id,
          date
        }
      }
    `
   try { 
    const result = yield client.mutate({
      mutation: AddExpenseMutation,
      variables:{ expenseInput: {
          date: payload.date,
          spentOn: payload.spentOn,
          category: payload.category,
          amount: parseInt(payload.amount),
          paidBy: payload.paidBy,
      }}
    })
   
   
    yield put(AddExpenseSuccess(result))

    
  } catch(error) {
     yield put(AddExpenseError(error))
   }
}
