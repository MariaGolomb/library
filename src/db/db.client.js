const { MONGO_CONNECTION_STRING } = require('../common/config');
const mongoose = require('mongoose');

const connectToDB = async cb => {
  try {
    mongoose.connect(MONGO_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
      cb();
    });
  } catch (err) {
    // writeLogs
    throw err;
  }
};

module.exports = connectToDB;
