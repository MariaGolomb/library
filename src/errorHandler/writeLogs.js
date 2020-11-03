const fs = require('fs');

const writeLogs = (path, data) => {
  const date = new Date();
  fs.createWriteStream(path, { flags: 'a' }).write(
    `
      =====================================
      ${date}
      err:
      ${data}
      ======================================
    `
  );
};

module.exports = writeLogs;
