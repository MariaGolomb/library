const Book = require('./books.model');
const Repository = require('../common/Repository');

const bookRepository = new Repository(Book);

module.exports = bookRepository;
