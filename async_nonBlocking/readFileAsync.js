// //native node file system module
// var fs = require('fs');

// console.log("going to get a file");

// // .readFile is Asychronos
// fs.readFile('readFileSync.js', function(err, file){

//     console.log("got the file");
// });

// console.log("app continues");


//native node file system module
var fs = require('fs');

// this is the named function .readFile uses, named functions make async functions easier to test
var onFileLoad = function(err, file){

    console.log("got the file");
};

console.log("going to get a file");

// .readFile is Asychronos
fs.readFile('readFileSync.js', onFileLoad);

console.log("app continues");