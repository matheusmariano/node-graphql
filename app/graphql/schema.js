const graphql = require('graphql');
const Obj = graphql.GraphQLObjectType;
const Schema = graphql.GraphQLSchema;

const schema = new Schema({
  query: new Obj({
    name: 'RootQueryType',
    fields: {
      hello: require('./query/hello'),
    },
  }),
});

module.exports = schema;
