console.log("I start the app");
//setTimeout is an async function
var holdOn = setTimeout(function(){
    console.log("In the setTimeout");
}, 1000);

console.log("I end the app");