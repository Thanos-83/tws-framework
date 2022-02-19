import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://headless-cms.test/graphql',
  cache: new InMemoryCache(),
});

export default client;