const express = require('express');
const todoRoutes = require('./routes/todo.routes');
const app = express();
const mongodb = require('./mongodb/mongodb.connect');

mongodb.connect();

// To parse JSON and put it to body
app.use(express.json());

app.use('/todos', todoRoutes);

app.get('/', (req, res) => {
  res.send('Testing app');
});

module.exports = app;
