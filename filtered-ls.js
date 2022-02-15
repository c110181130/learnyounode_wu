const fs = require('fs');
const p = require('path');
const path = process.argv[2] 
const extname = process.argv[3] 

fs.readdir(path,function(err,list){
    if (err){console.error(err)}
    else {
        for (let i = 0; i <= list.length-1; i++){ 
            if (p.extname(list[i]) === '.' + extname){
                console.log(list[i]);
            }
        }
    }
})
