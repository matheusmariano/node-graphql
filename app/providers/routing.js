const express = require('express');
const graphql = require('express-graphql');
const config = require('../config');
const schema = require('../graphql/schema');

const app = express();

app.use('/graph', graphql({
  schema,
  graphiql: true,
}));

const port = config.app.port;

app.listen(port, () => {
  console.log(`Listening at port ${port}.`);
});
