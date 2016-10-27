var censor = require("censorify");
console.log(censor.getCensoredWords());
console.log(censor.censor("Some very sad,bad and mad text"));
censor.addCensoredWord("fuck");
console.log(censor.getCensoredWords());
console.log(censor.censor("I want to fuck you"));