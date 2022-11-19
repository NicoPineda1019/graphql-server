const express = require('express');
const { graphqlHTTP }  = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        message: String
    }
`);
const root = {
    message: () => "hola mundo"
}
const app = express();
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}) )

app.listen(3000, () => console.log("Server starterd on port 3000"));

