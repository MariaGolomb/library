const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        maxlength: 20
    },

    description: {
        type: String,
        required: true,
        maxlength: 200
    },

    ownerEmail: {
        type: String,
        required: true,
        validate: {
            validator(v) {
              return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
          }
    }

});

bookSchema.statics.toResponse = book => {
    const { _id: id, title, description, ownerEmail } = book;
    return { id, title, description, ownerEmail };
  };

  const Book = mongoose.model('Book', bookSchema);

  module.exports = Book;

