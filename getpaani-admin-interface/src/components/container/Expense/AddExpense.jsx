import React ,{useState,useEffect}from 'react';
import styled from 'styled-components';
import {client} from '@components/container/Apollo/ApolloClientProvider';
import { Button, Form } from 'semantic-ui-react';
import { gql } from "apollo-boost";
import { useSelector, useDispatch } from 'react-redux';
import {AddExpenseAction}from '@app/redux/actions/expenseAction';



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

const LoginFormWrapper = styled.div`

  display: flex;
  flex-direction: column;
  width: 700px;
  height:550px;
  padding: 10px;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
`;


const AddExpense =()=>{

const Dispatch = useDispatch();


    //states
    const [date,setDate] = useState("");
    const [spentOn,setSpentOn] = useState("");
    const [category,setCategory] = useState("");
    const [amount,setAmount] = useState(0);
    const [paidBy,setPaidBy] = useState("");

    const add_expense=()=>{
         Dispatch(AddExpenseAction({date,spentOn,category,amount,paidBy}))
      
    }

    return(
     <Wrapper>
         <LoginFormWrapper>
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
              <label>spent on</label>
              <Form.Input
                fluid
                iconPosition="left"
                value={spentOn}
                onChange={({ target: { value } }) => {
                    setSpentOn(value);

                  }}
              />

            </Form.Field>

            <Form.Field>
              <label>category</label>
              <Form.Input
                fluid
                iconPosition="left"
                value={category}
                onChange={({ target: { value } }) => {
                    setCategory(value);

                  }}
              />

            </Form.Field>

            <Form.Field>
              <label>Amount</label>
              <Form.Input
                fluid
                iconPosition="left"
                value={amount}
                onChange={({ target: { value } }) => {
                    setAmount(value);

                  }}
              />

            </Form.Field>

            <Form.Field>
              <label>Paid by</label>
              <Form.Input
                fluid
                iconPosition="left"
                value={paidBy}
                onChange={({ target: { value } }) => {
                    setPaidBy(value);

                  }}

              />

            </Form.Field>

            <Button
              style={{ margin: '30px 0px 20px 0px' }}
              color="teal"
              fluid
              size="large"
              onClick={add_expense}
            >
              Create
            </Button>
          </Form>
         </LoginFormWrapper>
     </Wrapper>
     )


}

export default AddExpense;




                 // date:"jwdfhwbd",
                // spentOn:"jfwjfwjfd",
                // category:"wjhdjwhd",
                // amount:826487263,
                // paidBy:"wjkdwuhd",
