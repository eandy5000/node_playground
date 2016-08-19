//native node file system module
var fs = require('fs');

console.log("going to get a file");

// .readFile is Asychronos
fs.readFile('readFileSync.js', function(err, file){

    console.log("got the file");
});

console.log("app continues");