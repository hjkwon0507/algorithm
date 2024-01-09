const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input = input.map((e) => e.split(" ").map((x) => parseInt(x)));
for (let i = 1; i < input[0][0] + 1; i++) {
  let [a, b] = [...input[i]];
  console.log(`Case #${i}: ${a + b}`);
}