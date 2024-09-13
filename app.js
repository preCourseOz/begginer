const http = require('http');

http.createServer((request, response)=>{
    response.statusCode = 200;
    response.setHeader('content-Type','text/plain');
    response.end('Hello World');
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');

const emoji = require('node-emoji').emojify;
console.log(emoji.heart);

