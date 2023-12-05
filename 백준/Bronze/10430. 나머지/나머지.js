const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
input = input.map(Number);
const A = input[0];
const B = input[1];
const C = input[2];

let answer = [
  (A + B) % C,
  ((A % C) + (B % C)) % C,
  (A * B) % C,
  ((A % C) * (B % C)) % C,
];

answer.map((v) => console.log(v));