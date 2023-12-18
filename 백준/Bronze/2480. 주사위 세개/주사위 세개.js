const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
input = input.sort();

if (input[0] === input[2]) {
  console.log(10000 + input[0] * 1000);
} else if (input[0] === input[1] && input[0] !== input[2]) {
  console.log(1000 + input[0] * 100);
} else if (input[0] !== input[1] && input[1] === input[2]) {
  console.log(1000 + input[1] * 100);
} else {
  console.log(Math.max(...input) * 100);
}