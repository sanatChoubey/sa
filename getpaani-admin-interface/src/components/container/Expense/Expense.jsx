import React ,{useEffect,useState}from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { ToastContainer, toast } from 'react-toastify';
import {client} from '@components/container/Apollo/ApolloClientProvider';
import {gql}from 'apollo-boost';
import {Route,Link}from 'react-router-dom';

import {ExpenseListAction} from '@app/redux/actions/expenseAction'



import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';



const Wrapper = styled.div`
display:flex;
flex-direction:column;
width:100vw;
height:100vh;
background-color:#fafafa;


`;

const EditCreateForm = styled.div`
  display: flex;
  width: 100vw;
  height:50px;
  padding: 10px;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  margin-bottom:10px;
`;

const Expense = () => {
  
  
  
  const dispatch = useDispatch()
  
     useEffect(()=>{
        dispatch(ExpenseListAction())
         
         },[])
         const expenseState = useSelector((state)=> state.expenseList)

        

           
        const datalist = expenseState.expenses

         


      const DataColumn=()=>{
        const column=[{headerName:"date",field:"date"},{headerName:"spentOn",field:"spentOn"},
               {headerName:"category",field:"category"},{headerName:"amount",field:"amount"},
               {headerName:"paidBy",field:"paidBy"},
               {headerName:"gstRefund",field:"gstRefund"},
               {headerName:"atachment",field:"atachment"}
          ]
        const row=datalist
           return(
            <div>

          <div
             className="ag-theme-balham"
             style={{
             height: '80vh',
             width: '80vw',
             marginLeft:'50px',
       }}
      >
        <AgGridReact
          columnDefs={column}
          rowData={row}
          >
        </AgGridReact>
         </div>



          </div>
        )




        }


        if(datalist){
          
          return(
            <Wrapper >

          <div style={{width:Window.width,
            height:Window.height,
            backgroundColor:"orange"
            ,textAlign:"center"}}>
          <h1>Expense </h1><br/>
          </div>
           <EditCreateForm>
             <Link to ="/expense/edit">
               <Button>Edit</Button>
               </Link>
             <Link to="/expense/add">
               <Button>Create</Button>
               </Link>
    
           </EditCreateForm>
           {DataColumn()}
    
        </Wrapper>
            
          )
          







        }

        
    return(
     <div>hihi</div> 
     
  )
}
export default Expense;
