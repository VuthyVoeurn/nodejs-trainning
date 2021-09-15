// var fs = require('fs');

// fs.mkdirSync('stuff'); make file

// fs.rmdirSync('stuff'); remove file

var fs = require('fs');
fs.mkdir('stuff', function(){
    fs.readFile('readMe.txt','utf8', function(err, data){
        fs.writeFile('./stuff/writeMe.txt', data);
    });
});
// this code is run error

