"use strict";
let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100]; 

function calculateAverage(scores){
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
}

return sum/scores.length;
}

const avgMyScores = calculateAverage(myScores);
const avgYourScores = calculateAverage(yourScores);

console.log("The avarage score for myScore is ${avgMyscores}");
console.log("The avarage score for myScore is ${avgYourscores}");

