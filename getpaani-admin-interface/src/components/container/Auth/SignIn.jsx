/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, Label } from 'semantic-ui-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { userLoginInitiate } from '@redux/actions/userActions';
import logo from '@static/images/getpaani-logo.jpg';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #fafafa;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-self: flex-start;
  padding: 40px;
`;

const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 10px;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
`;

const GetPaaniTitle = styled.div`
  text-align: center;
  font-size: 25px;
  color: teal;
  padding: 20px;
  margin-bottom: 10px;
`;

const GetPaaniLogo = styled.img`
  width: 200px;
  align-self: center;
`;

const Auth = (props) => {
  const { history, title } = props;
  const userInfo = useSelector(state => state.user);
  const dispatch = useDispatch();

  const { signUpInProcess, isAuthenticated, errorMessage } = userInfo;

  useEffect(() => {
    if (!signUpInProcess && isAuthenticated) {
      history.push('/console');
    }

    if (!signUpInProcess && errorMessage) {
      toast.error(errorMessage, { autoClose: false });
    }
  }, [signUpInProcess]);

  // email fields
  const [email, setEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [emailError, setEmailError] = useState('');

  // password fields
  const [password, setPassword] = useState('');
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  return (
    <Wrapper>
      <Column>
        {/* <GetPaaniLogo src={logo} /> */}
        <LoginFormWrapper>
          <GetPaaniLogo src={logo} />
          <GetPaaniTitle>Log into Get Paani</GetPaaniTitle>
          <Form
            size="large"
          >
            <Form.Field>
              <label>Email</label>
              <Form.Input
                fluid
                name="userEmail"
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                value={email}
                error={emailError}
                onChange={({ target: { value } }) => {
                  setEmail(value);
                  setEmailTouched(true);
                  setEmailError(value ? '' : 'Email required');
                }}
              />
              {
                emailTouched && emailError && (
                  <Label
                    basic color="red"
                    pointing="above"
                  >
                    {emailError}
                  </Label>
                )
              }
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                value={password}
                error={passwordError}
                onChange={({ target: { value } }) => {
                  setPassword(value);
                  setPasswordTouched(true);
                  setPasswordError(value ? '' : 'Password required');
                }}
              />
              {
                passwordTouched && passwordError && (
                  <Label
                    basic color="red"
                    pointing="above"
                  >
                    {passwordError}
                  </Label>
                )
              }
            </Form.Field>

            {/* {errorMessage} */}

            <Button
              style={{ margin: '30px 0px 20px 0px' }}
              color="teal"
              fluid
              loading={signUpInProcess}
              size="large"
              onClick={() => {
                dispatch(userLoginInitiate({ email, password }));
              }}
            >
              Login
            </Button>
          </Form>
        </LoginFormWrapper>
      </Column>
      <ToastContainer />
    </Wrapper>
  );
};

Auth.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  title: PropTypes.string
};

Auth.defaultProps = {
  title: ''
}

export default Auth;
