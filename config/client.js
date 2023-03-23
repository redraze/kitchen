import { ApolloClient, InMemoryCache } from '@apollo/client';
import { server } from 'config/index';

const client = new ApolloClient({
    uri: `${server}/api/graphql`,
    cache: new InMemoryCache()
});

export { client };
