const graphql = require('graphql');
const Str = graphql.GraphQLString;

module.exports = {
  type: Str,
  resolve() {
    return 'Hello, World!';
  },
};
