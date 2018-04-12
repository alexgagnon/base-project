const {promisify} = require('util');
const fs = require('fs');
const {rmdirP, unlinkP, truncateP} = {
  rmdirP: promisify(fs.rmdir),
  unlinkP: promisify(fs.unlink),
  truncateP: promisify(fs.truncate)
};

const dirsToDelete = ['test'];
const filesToDelete = ['cleanup.js'];
const filesToClean = ['README.md'];

let promises = [];

promises = promises.concat(
  dirsToDelete.map(async dirname => {
    await Promise.all(
      fs.readdirSync(dirname).map(filename => {
        return unlinkP(filename).catch(
          () => `Could not delete file ${filename} in ${dirname}`
        );
      })
    );

    console.log(fs.readdirSync(dirname));
    return rmdirP(dirname).catch(() => `Could not delete directory ${dirname}`);
  })
);

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
