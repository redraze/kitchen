import 'styles/globals.css'
import type { AppProps } from 'next/app'
// import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Layout from 'components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  // const client = new ApolloClient({
  //   uri: 'http://localhost:5000/api/graphql',
  //   cache: new InMemoryCache
  // });
  
  return (
    // <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    // </ApolloProvider>
  );
};
