const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const hour = input[0].split(" ")[0];
const minute = input[0].split(" ")[1];

let minutes = Number(hour) * 60 + Number(minute) + Number(input[1]);
if (minutes >= 24 * 60) {
  minutes -= 60 * 24;
}
console.log(`${Math.floor(minutes / 60)} ${minutes % 60}`);