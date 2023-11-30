const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
input = input.map(Number);
let answer = [
  input[0] + input[1],
  input[0] - input[1],
  input[0] * input[1],
  Math.floor(input[0] / input[1]),
  input[0] % input[1],
];
answer.map((v) => console.log(v));