const express = require('express');
// Uncomment the following code once you have built the queries and mutations in the client folder
// const { ApolloServer } = require('@apollo/server');
// const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();
const session = require('express-session');
const cors = require('cors');

// Uncomment the following code once you have built the queries and mutations in the client folder
// const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

// Comment out this code once you have built out queries and mutations in the client folder
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();
// Uncomment the following code once you have built the queries and mutations in the client folder
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// Uncomment the following code once you have built the queries and mutations in the client folder
// const startApolloServer = async () => {
//   await server.start();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: 'auto' }
}));

// Uncomment the following code once you have built the queries and mutations in the client folder
// app.use('/graphql', expressMiddleware(server));

// Comment out this code once you have built out queries and mutations in the client folder
app.use(routes);

// if we're in production, serve client/dist as static assets 
// (process.env.NODE_ENV === 'production') {
app.use(express.static(path.join(__dirname, '../client/dist')));

// Uncomment this code once you have built out queries and mutations in the client folder
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});


// Uncomment this code once you have built out queries and mutations in the client folder
//   db.once('open', () => {
//     app.listen(PORT, () => {
//       console.log(`API server running on port ${PORT}!`);
//       console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
//     });
//   });
// };

// Comment out this code once you have built out queries and mutations in the client folder
db.once('open', () => {
  app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
});

// Uncomment the following code once you have built the queries and mutations in the client folder
// startApolloServer();