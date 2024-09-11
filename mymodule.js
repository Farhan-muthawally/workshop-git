const fs = require("fs");

const myFunction = (dirname, ext, callback) => {
    fs.readdir(dirname, (err, data) => {
        if(err) {
            return callback(err);
        }
        let result = [];
        for(const filename of data) {
            const arrfileName = filename.split(".");
            if (arrfileName.length > 1 && arrfileName.at(-1) === ext){
                result.push(filename);
            }
        }

        

        callback(null,result);
    });
};

module.exports =myFunction;
