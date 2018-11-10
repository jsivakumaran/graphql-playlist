const graphql = require('graphql');

const _ = require('lodash');

const { 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLSchema, 
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql;

//faking the database data in an array for now
var books = [
  {name: 'Cujo', genre: 'Horror', id: '1', authorId: '1'},
  {name: 'The Tower', genre: 'Horror', id: '4', authorId: '1'},
  {name: 'Handmaid\'s Tale', genre: 'Period', id: '2', authorId: '2'},
  {name: 'Payback', genre: 'Documentary', id: '5', authorId: '2'},
  {name: 'Pride and Prejudice', genre: 'Romance', id: '3', authorId: '3'},
  {name: 'Sense and Sensibility', genre: 'Romance', id: '6', authorId: '3'}
];

var authors = [
  {name: "Stephen King", age:56, id: '1'},
  {name: "Margaret Atwood", age: 68, id: '2'},
  {name: "Jane Austen", age: 0, id: '3'}
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: ()=> ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    genre: {type: GraphQLString},
    author: {
      type: AuthorType,
      resolve(parent, args){
        return _.find(authors, {id: parent.authorId})
      }
    }
  })
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: ()=>({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    age: {type: GraphQLInt},
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args){
        return _.filter(books, {authorId: parent.id});
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        //code to get data from db / other source
        return _.find(books, {id: args.id});
      }
    },
    author: {
      type: AuthorType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        return _.find(authors, {id: args.id});
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});