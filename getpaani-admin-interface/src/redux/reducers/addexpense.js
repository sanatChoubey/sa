import * as actionTypes from '@redux/actionTypes'

const intialState = {
    addExpenseProcessing: false
};

 var addExpense =(state=intialState, { payload, type })=>{
    switch (type) {
    case actionTypes.ADD_EXPENSE_INITIATE:
        return { ...state, addExpenseProcessing: true }

    case actionTypes.ADD_EXPENSE_SUCCESS:
        return { ...state, addExpenseProcessing: false ,addexpenseData:payload}
     case actionTypes.ADD_EXPENSE_ERROR:
         return{...state,addExpenseProcessing:false,errorMessage:payload}
    default:
        return state;

    }
}

export default addExpense