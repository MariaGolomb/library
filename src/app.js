const express = require('express');
const createError = require('http-errors');
const cors = require('cors');
const booksRouter = require('./resources/books/books.router');
const errorHandler = require('./errorHandler/errorHandler');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/books', booksRouter);

app.use('**', (req, res, next) => {
    next(new createError.BadRequest());
  });

app.use(errorHandler);

module.exports = app;
