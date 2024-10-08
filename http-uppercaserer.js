const http = require("http");
const map = require("through2-map");

const server = http.createServer((request, Response) => {
    if (request.method === "POST") {
        request
        .pipe(
            map((chunk) => {
                return chunk.toString().toUpperCase();
            })
        ).pipe(Response);
    }
});

server.listen(+process.argv[2]);
