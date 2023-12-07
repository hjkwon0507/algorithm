const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
input = input.map(Number);
const a = input[0];
const b = input[1];
if (a < b) {
  return console.log("<");
}
if (a > b) {
  return console.log(">");
}
if (a === b) {
  return console.log("==");
}