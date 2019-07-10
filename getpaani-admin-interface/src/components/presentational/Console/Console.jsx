import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';

import ExpensesRoot from './Expenses/ExpensesRoot';

const Wrapper = styled.div`
  height: 100%;
`;

const Console = (props) => {
  const { match: { path } } = props;

  return (
    <Wrapper>
      <Switch>
        <Route path={`${path}/expenses`} component={ExpensesRoot} />
        <Route path={`${path}/stocks`} render={() => <div>Console Stocks</div>} />
        <Route path={`${path}/products`} render={() => <div>Console Products</div>} />
        <Redirect from={path} to={`${path}/expenses`} />
      </Switch>
    </Wrapper>
  );
};

Console.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default Console;
