const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
input = input.map(Number);
const a = input[0];
let answer = "";
if (90 <= a && a <= 100) {
  answer = "A";
} else if (80 <= a && a <= 89) {
  answer = "B";
} else if (70 <= a && a <= 79) {
  answer = "C";
} else if (60 <= a && a <= 69) {
  answer = "D";
} else {
  answer = "F";
}
console.log(answer);