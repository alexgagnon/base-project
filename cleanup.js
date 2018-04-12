const {promisify} = require('util');
const fs = require('fs');
const {unlinkP, truncateP} = {
  unlinkP: promisify(fs.unlink),
  truncateP: promisify(fs.truncate)
};

// const files = ['test.css', 'test.js', 'cleanup.js'];

// clear README.md
truncateP('README.md').catch(err => console.log(`Could not clear README.md`));

// delete set up files
Promise.all(
  files.map(filename => {
    return unlinkP(filename).catch(() =>
      console.log(`Could not delete ${filename}`)
    );
  })
).catch(err => console.error(err));
