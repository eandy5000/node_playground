var file = "index.js";
var test = "I work";

var hello = function(name){
console.log("Hello ", name);
}

var private = function(){
    console.log('private');
}

var intro = function(){
    console.log("I'm in ",file);
};

module.exports = {
    hello : hello,
    intro : intro,
    test : test
}