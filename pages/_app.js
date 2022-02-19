import '../styles/globals.css';
import Layout from '../components/Layout/Layout';
import { ApolloProvider } from '@apollo/client';

import apolloClient from '../lib/client';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
