
//validation
if (!pathFile) process.exit();

const fs = require("fs");

// console.log(process.argv);

fs.readFile(pathFile, (err, result) => {
    if (err) throw err;

    const arrfile = result.toString().split("\n");
    console.log(arrfile.length - 1);
})

// console.log("FINISH");