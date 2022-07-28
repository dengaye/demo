import express, { application } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema, graphql }  from 'graphql';

// 定义一个 object type
/**
 * 查询
 */

//  var query = `query {user {
//   name
// }}`;

// fetch('/graphql', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//   },
//   body: JSON.stringify({
//     query,
//     variables: null,
//   })
// })
//   .then(r => r.json())
//   .then(data => console.log('data returned:', data));

const schema = buildSchema(`
  type IUser {
    name: String
    age: Int
  }

  type Query {
    rollDice(numDice: Int!, numSides: Int): [Int]
    user: IUser
  },
`);
 
const root = {
  rollDice: ({numDice, numSides}) => {
    var output = [];
    for (var i = 0; i < numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (numSides || 6)));
    }
    return output;
  },
  user: () => {
    return {
      name: 'Jane',
      age: 20
    }
  }
};
 
const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
