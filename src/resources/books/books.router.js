const router = require('express').Router();
const Book = require('./books.model');
const bookService = require('./books.service');
const { validateInputId } = require('../../validate/validateService');
const validateBody = require('./book.validateInput');

router
    .route('/')
        .get(
            async (req, res, next) => {
                try {
                    const books = await bookService.getBooks(req.query);
                    res.status(200).json(books.map(Book.toResponse));
                } catch (err) {
                    return next(err);
                }
            }
        )
        .post(
            validateBody,
            async (req, res, next) => {
                try {
                    const book = await bookService.createBook(req.body);
                    res.json(Book.toResponse(book));
                } catch (err) {
                    return next(err);
                }
            }
        );

router
    .route('/:id')
        .get(validateInputId, async (req, res, next) => {
          try {
                const book = await bookService.getBookById(req.params.id);
                res.json(Book.toResponse(book));
          } catch (err) {
                return next(err);
          }
        })
        .put(validateInputId, validateBody, async (req, res, next) => { // /
          try {
              await bookService.updateBook(req.params.id, req.body);
              res.status(200).send(`User ${req.params.id} is updated`);
          } catch (err) {
            return next(err);
          }
        })
        .delete(validateInputId, async (req, res, next) => {
          try {
                await bookService.deleteBook(req.params.id);
                res.status(200).send(`User ${req.params.id} is deleted`);
          } catch (err) {
                return next(err);
          }
        });

module.exports = router;
