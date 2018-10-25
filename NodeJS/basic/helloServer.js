//Load modules.
const http = require('http');

const server = http.createServer((request, response) =>{
    console.log(`Method: ${request.method}, Url: ${request.url}`);
    response.end(`<h1>I am NodeJS.</h1>`);
});

server.listen(3333, () =>{
    console.log('Server is running...');
});