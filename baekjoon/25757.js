const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let num = [...new Set(input)].length - 1;
const game = [...new Set(input)][0].split(" ")[1];
let result = 0;

switch (game) {
  case "Y":
    result = Math.floor(num / 1);
    break;
  case "F":
    result = Math.floor(num / 2);
    break;
  case "O":
    result = Math.floor(num / 3);
    break;
}
console.log(result);
