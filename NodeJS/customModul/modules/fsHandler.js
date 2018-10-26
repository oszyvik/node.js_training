//Make fs module promisify.
const fs = require('fs');

/**
 * Read files and return a promise.
 */
const read = (filePath, encode = 'utf8') => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encode, (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
};

/**
 * Write files and return a promise.
 */
const write = (filePath, encode = 'utf8', data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, encode, data, (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
};

module.exports = {
    'read': read,
    'write': write
};