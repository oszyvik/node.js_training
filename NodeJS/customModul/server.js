//Load modules.
const http = require('http'),
    fsHandler = require('./modules/fsHandler'),
    logModule = require('./modules/logModule'),
    path = require('path');

const server = http.createServer(async (req, res) => {
    let filePath = path.join(__dirname, 'json/users.json');
    await logModule.log(`Method: ${req.method} Url: ${req.url}`);
    let json = await fsHandler.read(filePath);
    res.end(json);
});

server.listen(3333, () => {
    console.log('Server is running...');
});