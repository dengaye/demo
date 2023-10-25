const { gql } = require('apollo-server');

const typeDefs = gql`
    type Track {
        id: ID!
        title: String!
        author: Author!
        thumbnail: String!
        length: Int
        modulesCount: Int
    }

    "author of a complete track or a module"
    type Author {
        id: ID!
        name: String!
        "Author's profile picture url"
        photo: String
    }

    type Query {
        trackForHome: [Track!]!
    }
`

module.exports = typeDefs;
