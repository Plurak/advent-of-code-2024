const fs = require('fs');
const data = fs.readFileSync('./input/final-data.txt', 'utf-8');

const reports = data.split("\n").map(line => 
    line.split(/\s+/).map(Number)
);

function isSafe(line) {
    const increasing = () => line[1] > line[0];

    for (let i = 0; i < line.length - 1; i++) {
        const diff = Math.abs(line[i + 1] - line[i]);

        if (diff < 1 || diff > 3 || 
            (increasing() && line[i] > line[i + 1]) || 
            (!increasing() && line[i] < line[i + 1])) {
            return false;
        }
    }

    return true;
}

function isSafeByRemovingOne(line) {
    if (isSafe(line)) return true;

    for (let i = 0; i < line.length; i++) {
        const modifiedLine = line.slice(0, i).concat(line.slice(i + 1));

        if (isSafe(modifiedLine)) return true;
    }

    return false;
}

const countSafe = reports.filter(isSafeByRemovingOne).length;

console.log(countSafe);