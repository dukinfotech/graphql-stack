import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from '@apollo/client/utilities';

const httpsLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_HASURA_HTTPS_ENDPOINT,
  headers: {
    'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET!
  }
});

const wssLink = new GraphQLWsLink(
  createClient({
    url: process.env.NEXT_PUBLIC_HASURA_WSS_ENDPOINT!,
    connectionParams: {
      headers: {
        'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET
      }
    }
  }),
);

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wssLink,
  httpsLink
);

const createApolloClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link
  });
};

const apolloClient = createApolloClient();

export { apolloClient }