let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let even = input.filter((v) => v % 2 === 0);

if (even.length === input.length) {
  return console.log("-1");
} else {
  let odd = input.filter((v) => v % 2 !== 0).map(Number);
  let sum = 0;
  odd.forEach((value) => {
    sum += value;
  });
  let minValue = Math.min(...odd);
  return console.log(sum, minValue);
}
