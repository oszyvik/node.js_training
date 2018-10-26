const fsHandler = require('./fsHandler'),
    path = require('path');

let logPath = path.join(__dirname, '../log.txt');

const log =  (content = '') => {
    let date = new Date();
    let lineOfLog = `${date} # ${content}\n`;
    return fsHandler.write(logPath, lineOfLog, { encoding: 'utf8', flag: 'a' });

};

module.exports = {
    'log': log
};