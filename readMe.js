// var fs = require('fs');

// var readMe = fs.readFileSync('readMe.txt', 'utf8');
// console.log(data);    or

var fs =require('fs');
fs.readFile('readMe.txt', 'utf8',function(err,data){
    console.log(data);
} );

console.log('test');  //run node app test 