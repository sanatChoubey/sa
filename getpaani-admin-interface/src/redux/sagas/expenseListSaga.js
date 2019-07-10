import { client } from '@apollo-client/ApolloClientProvider';
import {gql} from 'apollo-boost';
import { put } from 'redux-saga/effects';
import {ExpenseListActionSaga, ExpenseListActionSagaError} from '@app/redux/actions/expenseAction';

export function* ExpenseListSaga() {
 try{
    const result = yield client.query({
        query:gql`
           {
            getExpense{
              _id,
              date,
              spentOn,
              category,
              amount,
              paidBy,
              gstRefund,
              atachment,
             }
           }
  
        `
         })
          
         const data = Object.values(result.data)
         console.log(data)
        yield put(ExpenseListActionSaga(data[0]))
        }
        catch(error){
            yield put(ExpenseListActionSagaError(error))
        }
}