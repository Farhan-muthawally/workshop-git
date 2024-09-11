const pathfile = process.argv[2];
const fs = require("fs");

console.log(fs.readFileSync(pathfile).toString().split("\n").length - 1);