import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import styled from 'styled-components';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import ApolloClientProvider from '@apollo-client/ApolloClientProvider';
import Auth from '@components/presentational/Auth/AuthRoot';
import Console from '@components/presentational/Console/Console';
import store from './redux';

import './styles.scss';
import ExpensesRoot from '@components/presentational/Console/Expenses/ExpensesRoot';
import InventoryRoot from '@components/presentational/Console/Inventory/InventoryRoot';
import  StockRoot from '@components/presentational/Console/Stock/StockRoot'

const history = createBrowserHistory();

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Root = () => (
  <ApolloClientProvider>
    <Provider store={store}>
      <BrowserRouter history={history}>
        <Wrapper>
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/expense" component={ExpensesRoot}/>
            <Route path="/stock" component={StockRoot}/>
            <Route path="/inventory" component={InventoryRoot}/>
            <Route path="/console" component={Console} />
            <Redirect from="/" to="/auth" />
          </Switch>
        </Wrapper>
      </BrowserRouter>
    </Provider>
  </ApolloClientProvider>
);

render(<Root />, document.querySelector('.root'));
