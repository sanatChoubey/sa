import React ,{useState,useEffect}from 'react';
import styled from 'styled-components';
import {client} from '@components/container/Apollo/ApolloClientProvider';
import { Button, Form } from 'semantic-ui-react';
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

const FormWrapper = styled.div`

  display: flex;
  flex-direction: column;
  width: 700px;
  height:350px;
  padding: 10px;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
`;

const AddStock=()=>{



    //states
    const [date,setDate] = useState("");
    const [source,setSource] = useState("");
    const [products,setProducts] = useState("");


    const add_stock=()=>{
        client.mutate({
            mutation: gql`
            mutation userInput($addStockInput: AddStock){
              addStock(addStockInput: $addStockInput){
                id
              }
            }
            `,variables:{addStockInput:{

                date:date,
                source:source,
                products:products,


            }}

          }).then(result=>console.log(result))
    }

    return(
     <Wrapper>
         <FormWrapper>
         <Form
            size="large"
          >
            <Form.Field>
              <label>Date</label>
              <Form.Input
                fluid
                iconPosition="left"
                value={date}
                onChange={({ target: { value } }) => {
                    setDate(value);

                  }}
              />

            </Form.Field>

            <Form.Field>
              <label>Source</label>
              <Form.Input
                fluid
                iconPosition="left"
                value={source}
                onChange={({ target: { value } }) => {
                    setSource(value);

                  }}
              />

            </Form.Field>

            <Form.Field>
              <label>products</label>
              <Form.Input
                fluid
                iconPosition="left"
                value={products}
                onChange={({ target: { value } }) => {
                    setProducts(value);

                  }}
              />

            </Form.Field>


            <Button
              style={{ margin: '30px 0px 20px 0px' }}
              color="teal"
              fluid
              size="large"
              onClick={add_stock}
            >
              Create
            </Button>
          </Form>
         </FormWrapper>
     </Wrapper>
     )


}

export default AddStock;




                 // date:"jwdfhwbd",
                // spentOn:"jfwjfwjfd",
                // category:"wjhdjwhd",
                // amount:826487263,
                // paidBy:"wjkdwuhd",
