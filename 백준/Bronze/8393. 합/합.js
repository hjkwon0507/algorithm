const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = input[0];
let answer = 0;

for (let i = 1; i <= n; i++) {
  answer += i;
}
console.log(answer);