//Load modules.
const http = require('http');

const server = http.createServer((request, response) =>{
    console.log(`Method: ${request.method}, Url: ${request.url}`);
    response.end(`<HTML>
    <head>
    <title>CSICSKA</title>
    <blink>I are winner</blink>
    </head>
    <body>
    <div align="center">
    <marquee behavior="alternate" scrollamount="1">Much CSICSKA...</marquee>
    <marquee behavior="alternate" scrollamount="12">So JS...</marquee>
    <marquee behavior="alternate" scrollamount="25">KOLBASZ PROPELLER...</marquee>
    <marquee behavior="alternate" scrollamount="55">VEGE</marquee>
    </div>
    </body>
    </html>`);
});

server.listen(3333, () =>{
    console.log('Server is running...');
});