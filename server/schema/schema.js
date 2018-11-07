const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

//faking the database data in an array for now
var books = [
  {name: 'Cujo', genre: 'Horror', id: '1'},
  {name: 'Handmaid\'s Tale', genre: 'Period', id: '2'},
  {name: 'Pride and Prejudice', genre: 'Romance', id: '3'}
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: ()=> ({
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    genre: {type: GraphQLString}
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: {id: {type: GraphQLString}},
      resolve(parent, args){
        //code to get data from db / other source
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});