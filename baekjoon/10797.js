let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
console.log(input[1].split(" ").filter((v) => v === input[0]).length);
