const express = require('express');

const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

//allow cross origin requests
app.use(cors());

mongoose.connect(process.env.MLAB_URL);
mongoose.connection.once('open', ()=>{
  console.log('connected to db');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));


app.listen(8081, ()=>{
  console.log(`now listening on port 8081`);
})