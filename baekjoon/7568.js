const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input = input.map((v) => v.split(" ").map(Number));
const arr = input.splice(1, input.length);
let result = [];

for (let i = 0; i < arr.length; i++) {
  result.push(
    arr.filter((v) => v[0] > arr[i][0] && v[1] > arr[i][1]).length + 1
  );
}

console.log(result.join(" "));
