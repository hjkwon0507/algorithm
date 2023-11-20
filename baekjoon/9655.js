const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = "";
answer = input % 2 === 0 ? "CY" : "SK";

console.log(answer);
