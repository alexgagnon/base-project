const {promisify} = require('util');
const fs = require('fs');
const {resolve} = require('path');
const {truncateP, unlinkP, writeFileP} = {
  truncateP: promisify(fs.truncate),
  writeFileP: promisify(fs.writeFile),
  unlinkP: promisify(fs.unlink)
};
const {scripts, devDependencies, husky, config} = require('./package.json');

const filesToDelete = [
  'sample.css',
  'sample.js',
  'sample.test.js',
  'cleanup.js'
];
const filesToClean = ['README.md'];

let promises = [];

// clean up the package.json file
const packageFields = {
  scripts,
  devDependencies,
  husky,
  config
};

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

promises = promises.concat(
  writeFileP(
    resolve(__dirname, 'package.test.json'),
    JSON.stringify(packageFields, null, 2),
    {
      encoding: 'utf8'
    }
  )
);

Promise.all(promises)
.then(() => console.log('Cleaned up repo'))
.catch(error => console.error(error));
