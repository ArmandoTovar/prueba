import { createServer } from '@graphql-yoga/node'

const work = [
     {
          "name": "Weza Prosoft  sdfsdfsdfsdf",
          "cargo": "Software Engineer @WezaProsoft",
          "fecha": "Jan 2020 - Present",
          "act": [
              "Write modern, performant, maintainable code for a diverse array of client and internal projects",
              "Write modern, performant, maintainable code for a diverse array of client and internal projects",
              "Write modern, performant, maintainable code for a diverse array of client and internal projects"
          ]
      }, {
          "name": "Weza Prosoft  sdfsdfsdfsdf",
          "cargo": "Software Engineer @WezaProsoft",
          "fecha": "Jan 2020 - Present",
          "act": [
              "Write modern, performant, maintainable code for a diverse array of client and internal projects",
              "Write modern, performant, maintainable code for a diverse array of client and internal projects",
              "Write modern, performant, maintainable code for a diverse array of client and internal projects"
          ]
      },
      {
          "name": "Weza Prosoft Ltd",
          "cargo": "Software Engineer @WezaProsoft",
          "fecha": "Jan 2021 - Present",
          "act": [
              "Write performant, performant, maintainable code for a diverse array of client and internal projects",
              "Write performant, performant, maintainable code for a diverse array of client and internal projects",
              "Write performant, performant, maintainable code for a diverse array of client and internal projects"
          ]
      },
      {
          "name": "Weza Prosoft Ltd",
          "cargo": "Software Engineer @WezaProsoft",
          "fecha": "Jan 2022 - Present",
          "act": [
              "Write Write, performant, maintainable code for a diverse array of client and internal projects",
              "Write Write, performant, maintainable code for a diverse array of client and internal projects",
              "Write Write, performant, maintainable code for a diverse array of client and internal projects"
          ]
      }
  ]

const typeDefs = /* GraphQL */ `
  type Query {
    users: [User!]!
  }
  type User {
    name: String
  }

  type Work {
    name: String!
    cargo: String!
    fecha: String!
    act: String!
  }
  type Query{
    workCount: Int!
    allWorks:[Work]!
  }
`

const resolvers = {
  Query: {
    users (parent, args, context) {
      return [{ name: 'Nextjs' }]
    },
    workCount : () => work.length,
    allWorks:() => work
  }
}

const server = createServer({
  schema: {
    typeDefs,
    resolvers
  },
  endpoint: '/api/graphql'
  // graphiql: false // uncomment to disable GraphiQL
})

export default server
