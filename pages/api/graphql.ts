import { createYoga } from "graphql-yoga";
import { schema } from '../../schema/schema';

export default createYoga({
    schema,
    graphqlEndpoint: '/api/graphql'
});