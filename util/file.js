const fs = require('fs');
const deletefile = (filePath)=>{
    fs.unlink(filePath,(err)=>{
    });
}
exports.deletefile = deletefile;