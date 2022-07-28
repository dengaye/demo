import express, { application } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema, graphql }  from 'graphql';

const app = express();

const schema = buildSchema(`
    type Query {
        hello: String
    }
`)

const root = {
    hello: () => {
        return 'Hello world';
    }
}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(9090);
console.log('Running a GraphQL API server at http://localhost:9090/graphql');