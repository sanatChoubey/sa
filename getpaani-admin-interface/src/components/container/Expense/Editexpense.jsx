import React,{useRef} from 'react';
import styled from 'styled-components';
import {client} from'@components/container/Apollo/ApolloClientProvider';
import {gql}from 'apollo-boost';
import { useSelector, useDispatch } from 'react-redux';
import {EditExpenseAction}from '@app/redux/actions/expenseAction';



const Wrapper = styled.div`
background-color:#fafafa;
display:flex;
align-item:center;
justify-content:center;
height:100vh;
`
const  Editexpense = () => {



     const dispatch = useDispatch()

    var ID =useRef()
    var date=useRef()
    var SpentOn=useRef()
    var category=useRef()
    var Amount=useRef()
   var Paidby =useRef()
    var gstRefund=useRef()
    var Atachment=useRef()


    return(<Wrapper>
        <div style={{marginLeft:150}}>
           <h2 >Edit Expense</h2>
           </div>
        <div className="FormsEdit">
            <form className="ui form">
               <div className="field">
                 <label>Expense ID</label>
                    <input ref={ID}
                    placeholder="Expense ID" />
                </div>
               <div className="field">
                  <label> Change date</label>
                  <input ref={date}placeholder="Change date " />
               </div>
               <div className="field">
               <label> Change spentOn</label>
                  <input ref={SpentOn}placeholder="Change spentOn" />

             </div>
               <div className="field">
               <label> Change category</label>
                  <input ref={category}placeholder="Change category" />

             </div>
               <div className="field">
               <label> Change amount</label>
                  <input ref={Amount}placeholder="Change amount" />

             </div>
               <div className="field">
               <label> Change paidBy</label>
                  <input ref={Paidby}placeholder="Change paidBy" />

             </div>
               <div className="field">
               <label> Change gstRefund</label>
                  <input ref={gstRefund}placeholder="Change gstRefund" />

             </div>
               <div className="field">
               <label> Change atachment</label>
                  <input ref={Atachment}placeholder="Change atachment" />

             </div>
            <button  className="ui primary button"
            onClick={()=>{

               event.preventDefault()
                  
               if(Amount.current.value&&ID.current.value!=null){


               //   const ID = ID.current.value;
               //   const date = date.current.value;
               //   const spentOn = SpentOn.current.value;
               //   const category = category.current.value;
               //   const amount  = amount.current.value;
               //   const paidBy = paidBy.current.value;
               //   const gstRefund = gstRefund.current.value;
               //   const atachment = Atachment.current.value ;


                  dispatch(EditExpenseAction({
                     id: ID.current.value,
                     date:date.current.value,
                     spentOn:SpentOn.current.value,
                     category:category.current.value,
                     amount:parseInt(Amount.current.value),
                     paidBy:Paidby.current.value,
                     gstRefund:parseInt(gstRefund.current.value),
                     atachment:Atachment.current.value
                   
                  }))
                 
            }
           else{
              alert('please fill input fields')
           }

         }
      }

            >Submit</button>
          </form>
        </div>
        </Wrapper>
    )
}
export default Editexpense;
// date,
// spentOn,
// category,
// amount,
// paidBy,
// gstRefund,
// atachment,
