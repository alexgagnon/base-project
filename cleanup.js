const {promisify} = require('util');
const fs = require('fs');
const {unlinkP, truncateP} = {
  unlinkP: promisify(fs.unlink),
  truncateP: promisify(fs.truncate)
};

const filesToDelete = [
  'sample.css',
  'sample.js',
  'sample.test.js',
  'cleanup.js'
];

const filesToClean = ['README.md'];

let promises = [];

promises = promises.concat(
  filesToDelete.map(filename => {
    return unlinkP(filename).catch(() =>
      console.log(`Could not delete file ${filename}`)
    );
  })
);

promises = promises.concat(
  filesToClean.map(filename => {
    return truncateP(filename).catch(() =>
      console.log(`Could not clean ${filename}`)
    );
  })
);

Promise.all(promises).catch(error => console.error(error));
