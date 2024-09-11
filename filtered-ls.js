const pathDir = process.argv[2];
const extension = process.argv[3];

const fs = require("fs")
fs .readdir(pathDir, (err, files) => {
    if (err) throw err;

    for (const filename of files) {
        //console.log(filename.split(".").at(-1));
        const arrfileName = filename.split(".");
    if (arrfileName.length > 1 && arrfileName.at(-1) === extension){
        console.log(filename);
    }
   }
});