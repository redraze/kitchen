import { createYoga, createSchema } from 'graphql-yoga';
import typeDefs from 'lib/typeDefs';
import resolvers from 'lib/resolvers';
import dbConnect from 'config/dbConnect';

dbConnect();

export const schema = createSchema({
    typeDefs,
    resolvers
});

export const config = {
    api: {
        bodyParser: false,
    },
};

export default createYoga({
    schema,
    graphqlEndpoint: '/api/graphql',
  });
