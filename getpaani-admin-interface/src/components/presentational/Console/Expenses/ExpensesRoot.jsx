import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';
import Expense from '@components/container/Expense/Expense';
import AddExpense from '@components/container/Expense/AddExpense';
import Editexpense from '@components/container/Expense/Editexpense';


const Wrapper = styled.div`
  height: 100%;
`;

const ExpensesRoot = (props) => {
  const { match: { path } } = props;

  return (
    <Wrapper>
      <Switch>
        <Route path={`${path}/list`} component={Expense} />
        <Route path={`${path}/add`} component={AddExpense}/>
        <Route path={`${path}/edit`} component={Editexpense} />
        <Redirect from={path} to={`${path}/list`} />
      </Switch>
    </Wrapper>
  );
};

ExpensesRoot.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default ExpensesRoot;
