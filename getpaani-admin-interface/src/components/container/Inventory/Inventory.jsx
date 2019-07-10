import React ,{useEffect,useState}from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { ToastContainer, toast } from 'react-toastify';
import {client} from '@components/container/Apollo/ApolloClientProvider';
import {gql}from 'apollo-boost';
import {Route,Link}from 'react-router-dom';


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

function Inventory() {

  const fetchingExpense=()=>{

    client.query({
      query:gql`
         {
            getInventoryItems{
            id,
            date,
            checkedBy,
            products
           }
         }

      `
    }).then(
      (response)=>{

         const data = Object.values(response.data)
          setData(data[0])
          console.log("data in state",data[0]);



      }
    )
  }
  const [Data,setData]=useState(null)
     useEffect(()=>{
       fetchingExpense()

         },[])


      const DataColumn=()=>{
        const column=[{headerName:"date",field:"date"},{headerName:"Checked by",field:"checkedBy"},
               {headerName:"Products",field:"products"}
          ]
        const row=Data
           return(
            <div>

          <div
             className="ag-theme-balham"
             style={{
             height: '50vh',
             width: '50vw',
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


    return(
      <Wrapper >

      <div style={{width:Window.width,
        height:Window.height,
        backgroundColor:"orange"
        ,textAlign:"center"}}>
      <h1>Inventory</h1>
      <br/>
      </div>
       <EditCreateForm>
         <Link to ="/inventory/edit">
           <Button>Edit</Button>
           </Link>
         <Link to="/inventory/add">
           <Button>Create</Button>
           </Link>

       </EditCreateForm>
       {DataColumn()}

    </Wrapper>
  )
}
export default Inventory;
