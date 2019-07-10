import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';

import SignIn from '@components/container/Auth/SignIn';

const Wrapper = styled.div`
  height: 100%;
`;

const Auth = (props) => {
  const { match: { path } } = props;

  return (
    <Wrapper>
      <Switch>
        <Route path={`${path}/signin`} component={SignIn} />
        <Redirect from={path} to={`${path}/signin`} />
      </Switch>
    </Wrapper>
  );
};

Auth.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default Auth;
