const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema.js');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;

const app = express();

mongoose.connect( 'mongodb+srv://ksatter:1113406@cluster0-odiii.mongodb.net/test?retryWrites=true&w=majority' )

mongoose.connection.once('open', () => {
  console.log('Database Connected!')
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
})
