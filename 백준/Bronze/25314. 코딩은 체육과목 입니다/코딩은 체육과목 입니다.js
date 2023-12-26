const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let long = [];
const num = input[0] / 4;
for (let i = 0; i < num; i++) {
  long.push("long");
}
long = long.join(" ");
console.log(long + " int");