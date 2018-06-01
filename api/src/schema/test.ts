import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

const mocks = {
  String: () => 'Working!'
}

const typeDefs = `
  type Query {
    test: String
  }
`;

const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ schema, mocks });

export default schema;