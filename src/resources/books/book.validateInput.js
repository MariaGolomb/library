const { createSchemaValidator } = require('../../validate/validateService');
const bookJSONSchema = require('./book.JSON.schema');

const validateBody = createSchemaValidator(bookJSONSchema);

module.exports = validateBody;
