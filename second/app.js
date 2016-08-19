require('./instantHello');
var bye = require('./talk/goodbye');
var talk = require('./talk');
var question = require('./talk/question');

bye();

talk.hello("Joe");
talk.intro();
console.log(talk.test);

// private method won't work'
// talk.private();

console.log(question.ask("Hi"));
