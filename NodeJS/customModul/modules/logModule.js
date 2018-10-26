const path = require('path'),
    fsHandler = require('./fsHandler'),
    config = require('./config');

let logPath = path.join(__dirname, '../log.txt');

const log = (content = '') => {
    let date = new Date();
    let lineOfLog = `${date} # ${content}\n`;
    return fsHandler.write(config.logFile, lineOfLog, { encoding: 'utf8', flag: 'a' });

};

module.exports = {
    'log': log,
    'logFile': logPath
};