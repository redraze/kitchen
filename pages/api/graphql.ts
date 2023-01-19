import { createYoga } from "graphql-yoga";
import { schema } from 'schema/schema.js';

export default createYoga({
    schema,
    graphqlEndpoint: '/api/graphql'
});