import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';
import GetStock from '@components/container/Stock/GetStock';
import EditStock from '@components/container/Stock/EditStock';
import AddStock from '@components/container/Stock/AddStock';



const Wrapper = styled.div`
  height: 100%;
`;

const StockRoot = (props) => {
  const { match: { path } } = props;

  return (
    <Wrapper>
      <Switch>
        <Route path={`${path}/list`} component={GetStock} />
        <Route path={`${path}/add`} component={AddStock} />
        <Route path={`${path}/edit`}  component={EditStock}/>
        <Redirect from={path} to={`${path}/list`} />
      </Switch>
    </Wrapper>
  );
};

StockRoot.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default StockRoot;