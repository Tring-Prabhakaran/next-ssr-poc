// lib/apolloClient.ts
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export function createApolloClient() {
  return new ApolloClient({
    ssrMode: true,
    link: new HttpLink({
      uri: "https://dev.leaguemed.com/graphql", // Replace with your GraphQL API
      fetch,
    }),
    cache: new InMemoryCache(),
  });
}
