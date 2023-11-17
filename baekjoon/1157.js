const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let obj = {};
input = input
  .toString()
  .toUpperCase()
  .split("")
  .forEach((x) => {
    obj[x] = (obj[x] || 0) + 1;
  });

let result = "";
let cnt = 0;

for (key in obj) {
  if (obj[key] > cnt) {
    cnt = obj[key];
    result = key;
  } else if (obj[key] === cnt) {
    result = "?";
  }
}

console.log(result);
