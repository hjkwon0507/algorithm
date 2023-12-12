const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let minutes = input[0] * 60 + input[1] - 45;
if (minutes < 0) {
  minutes += 60 * 24;
}
console.log(`${Math.floor(minutes / 60)} ${minutes % 60}`);