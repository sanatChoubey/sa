import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { split } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

import { dev } from '@config/config.json';

const httpLink = createHttpLink({
  uri: `${dev.serverUrl}/graphql`,
});

const wsLink = new WebSocketLink({
  uri: `${dev.socketUrl}/graphql`,
  options: {
    reconnect: true,
  },
});

const authLink = setContext((_, { headers }) => {
  const idtoken = localStorage.getItem('getpaani-id-token');
  // const user = JSON.parse(localStorage.getItem('getpaani-user'));

  return {
    headers: {
      ...headers,
      idtoken: idtoken || '',
    },
  };
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);

    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  authLink.concat(httpLink),
);

// eslint-disable-next-line import/prefer-default-export
export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const ApolloClientProvider = ({ children }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
);

ApolloClientProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApolloClientProvider;
