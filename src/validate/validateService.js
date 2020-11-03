const mongoose = require('mongoose');
const Ajv = require('ajv');
const createError = require('http-errors');

const ajv = new Ajv();

const validateObjectId = async (id) => {
    return await mongoose.Types.ObjectId.isValid(id);
};

const validateData = async (schema, data) => {
    return await ajv.validate(schema, data);
};

const validateInputId = async (req, res, next) => {
    const isValid = await validateObjectId(req.params.id);
    return isValid ? next() : next(createError(400, 'Incorrect format of ID', { incorrectData: req.params.id }));
};

const createSchemaValidator = (schema) => async (req, res, next) => {
    const isValid = await validateData(schema, req.body);
    return isValid ? next() : next(createError(400, 'Incorrect body format'), { incorrectData: req.body });
};


module.exports = { validateInputId, createSchemaValidator };
