
import { put } from 'redux-saga/effects';
import {gql} from 'apollo-boost';

import { client } from '@apollo-client/ApolloClientProvider';
import {EditExpenseSuccess,EditExpenseError}from '@app/redux/actions/expenseAction'

export function* EditexpenseSaga(props){
    
 const EDITEXPENSEMUTATTION =gql`
 mutation editExpense($expenseInput:EditExpenseInput!){
   editExpense(expenseInput:$expenseInput){
      _id,
      amount

   }
  }
`
   
   const data = props.payload
   try{
    const result =client.mutate({
        mutation:EDITEXPENSEMUTATTION,
        variables:{expenseInput:{
            id: data.id,
            date:data.date,
            spentOn:data.spentOn,
            category:data.category,
            amount:data.amount,
            paidBy:data.paidBy,
            gstRefund:data.gstRefund,
            atachment:data.atachment




        }}
     })
      yield put(EditExpenseSuccess(result))
}catch(error){
   yield put (EditExpenseError(error))
}
}