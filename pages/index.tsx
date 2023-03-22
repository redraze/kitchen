import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Scene from "components/Scene";
import { server } from 'config/index';

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: `${server}/api/graphql`,
  cache
});

export default function Index() {
  return (<>
    <ApolloProvider client={client}>
      <Scene/>
    </ApolloProvider>
  </>);
};
