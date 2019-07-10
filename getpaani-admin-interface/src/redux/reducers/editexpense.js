import * as actionTypes from '@redux/actionTypes'

const intialState = {
    editExpenseProcessing: false
};

 const editExpense =(state=intialState,action)=>{
switch (action.type ){
    case actionTypes.EDIT_EXPENSES_INITIATE:
        return { ...state, addExpenseProcessing: true }

      case actionTypes.EDIT_EXPENSES_SUCCESS:
          return { ...state, editExpenseProcessing: true ,editexpenseData:action.payload}
     case actionTypes.EDIT_EXPENSES_ERROR:
         return { ...state, editExpenseProcessing: true ,errorMessage:action.payload}
default:
    return state;

}
}
export default editExpense