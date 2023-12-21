const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const totalAmt = Number(input[0]);
let items = [];

for (let i = 2; i < input.length; i++) {
  items.push(input[i].toString().trim().split(" "));
}

let result = 0;
items.forEach((v) => {
  result += v[0] * v[1];
});

const answer = totalAmt === Number(result) ? "Yes" : "No";
console.log(answer);