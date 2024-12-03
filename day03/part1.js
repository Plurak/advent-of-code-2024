const fs = require('fs');
const data = fs.readFileSync('./input/final-data.txt', 'utf-8');

const matches = data.match(/mul\((\d+),(\d+)\)/g);

function addAll(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

const results = matches.map(func => {
    const args = func.match(/\d+/g).map(Number);
    return (args[0] * args[1]);
});

console.log(addAll(results));