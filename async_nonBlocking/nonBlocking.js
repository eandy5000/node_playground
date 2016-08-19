//native node module allows the file to spawn a non-blocking process
var child_process = require('child_process');


console.log(1);

// .spawn first takes the string node inidcating what kind of process you are spawning,
// then an array with a string indicating the file with the process you want to spawn, 
// then an object with the key stdio and value 'inherit''
// this option lets out display the process output like a console.log
var new_process = child_process.spawn('node', ['_fib.js'], {
    stdio : 'inherit'
});


console.log(2);