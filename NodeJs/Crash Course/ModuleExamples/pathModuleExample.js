const path = require("path");

console.log(__filename);

//filename
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__filename));

//File extension
console.log(path.extname(__filename));

//path object
console.log(path.parse(__filename));