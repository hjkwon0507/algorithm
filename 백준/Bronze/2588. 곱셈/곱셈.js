const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const second = input[1].split("").map(Number).reverse();
let answer = [];
second.map((v) => answer.push(input[0] * v));
answer.push(input[0] * input[1]);
answer.map((v) => console.log(v));