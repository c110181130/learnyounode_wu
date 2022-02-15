const fs = require('fs');
const contents = fs.readFileSync(process.argv[2]) ;
const str = contents.toString() ;
const num = str.split("\n") ;

console.log(num.length - 1);