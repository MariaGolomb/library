const bookRepository = require('./books.db.repository');
const createError = require('http-errors');
const createQueryObject = require('../common/paginationService');

const createBook = async (data) => {
    return bookRepository.create(data);
};

const getBooks = async (reqQuery) => {
    const pagination = createQueryObject(reqQuery);
    return bookRepository.getList(pagination);
};

const getBookById = async (id) => {
    const book = await bookRepository.get(id);
    if (book) {
        return book;
      }
      throw createError(404, `Can't get book with ID ${id}`);
};

const updateBook = async (id, data) => {
    const result = await bookRepository.update(id, data);
    if (result.ok !== 1) {
        throw createError(404, `Can't update book with ID ${id}`);
    }
};

const deleteBook = async (id) => {
    const result = await bookRepository.delete(id);
    if (result) {
        return true;
    }
    throw createError(404, `Can't delete book with ID ${id}`);
};

module.exports = { createBook, getBooks, getBookById, updateBook, deleteBook };
