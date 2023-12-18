const fs = require("fs");
let input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

for (let i = 1; i < 10; i++) {
  const a = input[0];
  const b = i;
  console.log(`${a} * ${b} = ${a * b}`);
}