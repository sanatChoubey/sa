import * as actionTypes from '@redux/actionTypes'




const intialState = {
    listExpenseProcessing: false,
    expenses: []
};
 const expenseList = (state=intialState,action)=>{
       switch(action.type){
        case actionTypes.EXPENSES_LIST_INITIATE:
            return{...state, listExpenseProcessing: true }

        case actionTypes.EXPENSES_LISTSAGA_SUCCESS:
            return{ ...state, listExpenseProcessing: false ,expenses: action.payload}
        case actionTypes.EXPENSES_LISTSAGA_ERROR:
            return { ...state, listExpenseProcessing: false ,errorMessage:action.payload }
        default :
        return state
       }
}
export default expenseList