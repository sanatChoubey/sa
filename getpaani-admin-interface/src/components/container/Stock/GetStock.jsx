import React ,{useState,useEffect}from 'react';
import styled from 'styled-components';
import {client} from '@components/container/Apollo/ApolloClientProvider';
import { Button} from 'semantic-ui-react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { gql } from "apollo-boost";


const Wrapper = styled.div`

  height:100%;
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #fafafa;
`;

const EditCreateForm = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
  width: 100%;
  height:60px;
  padding: 20px;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
`;

const StockComponent = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  width: 100%;
  height:80px;
  font-size:30px;
  padding: 20px;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.95);
`;



function GetStock(props) {

    //fetching data
     useEffect(
           ()=>{
               fetchStock()
           }
     )
     //state
    const [data,setData] = useState('');



        const fetchStock=()=>{
            client.query({
                query: gql`
                {
                    getStock{
                        date,
                        source,
                        products
                    }
                }`

              }).then(
                  (response)=>{
                      console.log(response)
                      const data = Object.values(response.data)
                      setData(data[0])

                  }
              )
            }




    const column = [{headerName:"Date",field:"date"},{headerName:"Source",field:"source"},{headerName:"Product",field:"products"}]
    const row=data

    return(

    <Wrapper>
        <StockComponent>
        Stock
        </StockComponent>
        <EditCreateForm>
           <Button>Edit</Button>
           <Button>Create</Button>
        </EditCreateForm>
        <div
        className="ag-theme-balham"
        style={{
        height: '80vh',
        width: '100vw' }}
      >
        <AgGridReact
          columnDefs={column}
          rowData={row}>
        </AgGridReact>
      </div>
    </Wrapper>)
  }

  export default GetStock;
