let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let arr = input.map((v) =>
  v
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b)
);
let answer = arr.map((a) => {
  if (a[0] === a[1] && a[1] === a[2]) {
    return "Equilateral";
  } else if (a[0] === a[1] || a[0] === a[2] || a[1] === a[2]) {
    return "Isosceles";
  } else if (a[2] >= a[0] + a[1]) {
    return "Invalid";
  } else if (a[0] !== a[1] && a[1] !== a[2]) {
    return "Scalene";
  }
});

console.log(answer.slice(0, 4));
