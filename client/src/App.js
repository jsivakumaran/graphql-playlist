import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';


//components
import BookList from './components/BookList';

//apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:8081/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProivder client={client}>
        <div className="App">
          <h1>Jay's Reading List</h1>
          <BookList />
        </div>
      </ApolloProivder>
    );
  }
}

export default App;
