const writeLogs = require('./writeLogs');
const { ERR_PATH } = require('../common/config');

// eslint-disable-next-line no-unused-vars
const errorHandler = async (err, req, res, next) => {
  writeLogs(ERR_PATH, err);
  if (err.status) {
    return await res.status(err.status).send(err.message);
  }
  return await res.status(500).send('Internal server error');
};

module.exports = errorHandler;
