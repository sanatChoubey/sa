
import * as actionTypes from '@redux/actionTypes'
//addExpenseActions
export const AddExpenseAction = (data) => {
    console.log(data)
return ({
type:actionTypes.ADD_EXPENSE_INITIATE,
payload:data,
});
}

export const AddExpenseSuccess = (data) => {
    console.log('ADDEXPESUCESS ',data)
return ({
  type:actionTypes.ADD_EXPENSE_SUCCESS,
  payload:data,
})
}

export const AddExpenseError = (data) => {
    return ({
        type:actionTypes.ADD_EXPENSE_ERROR,
        payload:data,
    })
}


//editExpenseActions
export const EditExpenseAction = (data) => {
    console.log('hihi',data)
    return({
        type:actionTypes.EDIT_EXPENSES_INITIATE,
        payload:data,
    })
}
export const  EditExpenseSuccess = (data) => {
   return({
       type:actionTypes.EDIT_EXPENSES_SUCCESS,
       payload:data
   })
}
export const EditExpenseError = (data) => {
  return ({
      type:actionTypes.EDIT_EXPENSES_ERROR,
       payload :data
  })

}

//listExpenseActions
export const ExpenseListAction = () => {
    console.log('calling')
    return({
        type:actionTypes.EXPENSES_LIST_INITIATE
    })
}

export const ExpenseListActionSaga = (data) => {  
    console.log('i am calling sagas')
    return ({
        type:actionTypes.EXPENSES_LISTSAGA_SUCCESS,
        payload:data

    })
}

export const  ExpenseListActionSagaError = (data) => {
    console.log('i am from expense error action ')
    return ({
        type:actionTypes.EXPENSES_LISTSAGA_ERROR,
        payload:data
    })
}