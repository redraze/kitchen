import type { AppProps } from 'next/app'
import 'styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import { client } from 'config/client';
import Layout from 'components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client} >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
};
