"use strict";

// 1 & 2) Arrays
const tags = ["js", "week3"];
const scores = [10, 25, 18, 30];

// 3 for loop to compute totalScore from scores, then console.log(totalScore)

let totalScore = 0;

for (let i = 0; i < scores.length; i++) {
  totalScore += scores[i];
}

console.log("totalScore:", totalScore);
