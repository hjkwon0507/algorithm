const fs = require("fs");
let input = fs.readFileSync("/dev/stdin");
input = Number(input);
let answer =
  (input % 4 === 0 && input % 100 !== 0) || input % 400 === 0 ? "1" : "0";
console.log(answer);