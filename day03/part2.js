const fs = require('fs');
const data = fs.readFileSync('./input/final-data.txt', 'utf-8');

const matches = data.match(/mul\((\d+),(\d+)\)|do\(\)|don't\(\)/g);

function addAll(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

let allowed = true;

const results = matches.map(func => {
    if (func === "do()") return (allowed = true, 0);
    if (func === "don't()") return (allowed = false, 0);
    if (!allowed) return 0;

    const args = func.match(/\d+/g).map(Number);
    return (args[0] * args[1]);
});

console.log(addAll(results));