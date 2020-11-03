require('dotenv').config();
const path = require('path');

const PORT = process.env.PORT;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;
const ERR_PATH = path.join(__dirname, '../log/err.log');

module.exports = {
    PORT,
    MONGO_CONNECTION_STRING,
    ERR_PATH
};
