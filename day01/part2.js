const fs = require('fs');
const data = fs.readFileSync('./input/final-data.txt', 'utf-8');

let left = [];
let right = [];

data.split("\n").forEach((line) => {
    line = line.split(/\s+/);

    left.push(Number(line[0]));
    right.push(Number(line[1]));
});

function calcSimilarity(left, right) {
    let result = 0;

    left.forEach(numLeft => {
        let count = 0;
        right.filter(numRight => numRight === numLeft).forEach(() => count++);
        result += numLeft * count;
    });

    return result;
}

console.log(calcSimilarity(left, right));