const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" "));

for (let i = 1; i < input.length; i++) {
  console.log(Number(input[i][0]) + Number(input[i][1]));
}
