const http =require("http");
const fs =require("fs");

const port =process.argv[2];
const filepath =process.argv[3];

const server =http.createServer((request,Response) => {
    fs.createReadStream(filepath).pipe(Response);
}).listen(port);