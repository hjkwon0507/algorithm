const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
input = input.map(Number);
console.log(input[0] * input[1]);