/* eslint-disable import/prefer-default-export */
import { put } from 'redux-saga/effects';
import gql from 'graphql-tag';

import { client } from '@apollo-client/ApolloClientProvider';
import { userLoginSucess, userLoginError } from '../actions/userActions';

export function* userLoginSaga({ payload: { email, password } }) {
  try {
    const LOGIN_MUTATION = gql`
      mutation {
        authenticateUser(data: {
          email: "${email}",
          password: "${password}"
        }) {
          token
          user {
            _id
            firstName
            lastName
            email
            role
          }
        }
      }
    `;

    const userData = yield client.mutate({
      mutation: LOGIN_MUTATION,
    });

    const { token, user } = userData.data.authenticateUser;

    localStorage.setItem('getpaani-id-token', token);
    localStorage.setItem('getpaani-user', JSON.stringify(user));

    yield put(userLoginSucess(user));
  } catch (error) {
    // console.log('is', error.message);
    yield put(userLoginError(error.message.replace('GraphQL error: ', '')));
  }
}
