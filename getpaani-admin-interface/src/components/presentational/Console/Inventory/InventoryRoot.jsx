import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';
import Inventory from '@components/container/Inventory/Inventory';
import AddInventoryItem from '@components/container/Inventory/AddInventoryItem';
import EditInventory from '@components/container/Inventory/EditInventory';


const Wrapper = styled.div`
  height: 100%;
`;

const InventoryRoot = (props) => {
  const { match: { path } } = props;

  return (
    <Wrapper>
      <Switch>
        <Route path={`${path}/list`} component={Inventory} />
        <Route path={`${path}/add`} component={AddInventoryItem} />
        <Route path={`${path}/edit`}  component={EditInventory}/>
        <Redirect from={path} to={`${path}/list`} />
      </Switch>
    </Wrapper>
  );
};

InventoryRoot.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default InventoryRoot;
