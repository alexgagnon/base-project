const {promisify} = require('util');
const fs = require('fs');
const {unlinkP, truncateP} = {
  unlinkP: promisify(fs.unlink),
  truncateP: promisify(fs.truncate)
};

const filesToDelete = ['test.css', 'test.js', 'cleanup.js'];
const filesToClean = ['README.md', '.flowconfig'];

// delete set up files
Promise.all(
  filesToDelete.map(filename => {
    return unlinkP(filename).catch(() =>
      console.log(`Could not delete ${filename}`)
    );
  })
).catch(err => console.error(err));

Promise.all(
  filesToClean.map(filename => {
    return truncateP(filename).catch(() =>
      console.log(`Could not clean ${filename}`)
    );
  })
).catch(err => console.error(err));
