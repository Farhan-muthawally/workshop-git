const http = require('http');

const url = process.argv[2];

http.get(url, (Response) => {
    Response.setEncoding('utf8');
    Response.on('data', (chunk) => {
        console.log(chunk);
    });

    Response.on('error', (err) => {
        console.error('error:'. err);
    });

    Response.on('end', () => {
    });
}).on('error', (err) => {
    console.error('request error:', err.message);
});