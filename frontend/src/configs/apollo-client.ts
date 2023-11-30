import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
  gql,
  split,
} from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { onError } from "@apollo/client/link/error";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { setContext } from "@apollo/client/link/context";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { RefreshTokensMutation } from "@/gql/graphql";
import { ACCESS_TOKEN, REFRESH_ACCESS_TOKEN } from "@/utils/constants";

const REFRESH_TOKENS_MUTATION = gql`
  mutation refreshTokens {
    refreshTokens {
      accessToken
      refreshAccessToken
    }
  }
`;

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_HASURA_HTTPS_ENDPOINT,
  credentials: "same-origin",
  headers: {
    "x-hasura-admin-secret":
      process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET!,
  },
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const accessToken = getCookie(ACCESS_TOKEN);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : "",
    },
  };
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: process.env.NEXT_PUBLIC_HASURA_WSS_ENDPOINT!,
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET,
      },
    },
  })
);

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (let { message, locations, path, extensions } of graphQLErrors) {
        // Break recursive loop when refreshTokens mutation also cause an error
        if (path && !path.includes(REFRESH_ACCESS_TOKEN)) {
          console.error(
            `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
              locations
            )}, Path: ${path}`
          );
          switch (extensions.code) {
            // Apollo Server sets code to UNAUTHENTICATED
            // when an AuthenticationError is thrown in a resolver
            case "UNAUTHENTICATED":
              // Modify the operation context with a new token
              const oldHeaders = operation.getContext().headers;
              operation.setContext({
                headers: {
                  ...oldHeaders,
                  authorization: refreshTokens(),
                },
              });
              // Retry the request, returning the new observable
              return forward(operation);
          }
        }
      }
    }

    // To retry on network errors, we recommend the RetryLink
    // instead of the onError link. This just logs the error.
    if (networkError) {
      console.error(`[Network error]: ${networkError}`);
    }
  }
);

const refreshTokens = () => {
  const refreshAccessToken = getCookie(REFRESH_ACCESS_TOKEN);
  apolloClient
    .mutate<RefreshTokensMutation>({
      mutation: REFRESH_TOKENS_MUTATION,
      context: {
        headers: {
          authorization: refreshAccessToken
            ? `Bearer ${refreshAccessToken}`
            : "",
        },
      },
    })
    .then((res) => {
      if (res.data) {
        const newJwtTokens = res.data.refreshTokens;
        setCookie(ACCESS_TOKEN, newJwtTokens.accessToken);
        setCookie(REFRESH_ACCESS_TOKEN, newJwtTokens.refreshAccessToken);
        return newJwtTokens.accessToken;
      }
    })
    .catch((error: any) => {
      for (let {
        message,
        locations,
        path,
        extensions,
      } of error.graphQLErrors) {
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
            locations
          )}, Path: ${path}`
        );
        switch (extensions.code) {
          // Clear jwtTokens and redirect to admin via middleware
          case "UNAUTHENTICATED":
            deleteCookie(ACCESS_TOKEN);
            deleteCookie(REFRESH_ACCESS_TOKEN);
            window.location.reload();
        }
      }
    });
};

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  from([errorLink, authLink, httpLink])
);

const createApolloClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link,
  });
};

const apolloClient = createApolloClient();

export { apolloClient };
