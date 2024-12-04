const fs = require('fs');
const data = fs.readFileSync('./input/final-data.txt', 'utf-8');

let input = [];
let wordsToFind = [
    "XMAS",
    "SAMX"
];

data.split("\n").forEach((line) => {
    const splitLine = line.split("");
    input.push(splitLine);
});

let count = 0;

function searchWordInStrings(input) {
    for (let i = 0; i < input.length; i++) {
        for (let word of wordsToFind) {
            let occurrences = input[i].split(word).length - 1;
            count += occurrences;
        }
    }

    return count;
}

function searchHorizontaly(input) {
    let rowStrings = input.map((line) => line.join(""));

    searchWordInStrings(rowStrings);

    return;
}

function searchVertically(input) {
    let columnStrings = [];

    for (let i = 0; i < input[0].length; i++) {
        let columnString = "";

        for (let j = 0; j < input.length; j++) {
            columnString += input[j][i];
        }

        columnStrings.push(columnString);
    }

    searchWordInStrings(columnStrings);

    return;
}

function searchDiagonally(input) {
    let diagonalStrings = [];

    for (let i = 0; i < input.length; i++) { // start from the left side
        let downDiagonal = "";
        let upDiagonal = "";
    
        for (let j = 0; j < input[0].length; j++) {
            if (input[i + j] !== undefined && input[i + j][j] !== undefined) {
                downDiagonal += input[i + j][j]; // from top left to bottom right
            }
            if (input[i - j] !== undefined && input[i - j][j] !== undefined) {
                upDiagonal += input[i - j][j]; // from bottom left to top right
            }
        }

        diagonalStrings.push(downDiagonal, upDiagonal);
    }

    for (let i = 0; i < input.length; i++) { // start from the right side
        let downDiagonal = "";
        let upDiagonal = "";
    
        for (let j = 0; j < input[0].length; j++) {
            if (input[i + j] !== undefined && input[i + j][input[0].length - 1 - j] !== undefined) {
                downDiagonal += input[i + j][input[0].length - 1 - j]; // from top right to bottom left
            }
            if (input[i - j] !== undefined && input[i - j][input[0].length - 1 - j] !== undefined) {
                upDiagonal += input[i - j][input[0].length - 1 - j]; // from bottom right to top left
            }
        }

        diagonalStrings.push(downDiagonal, upDiagonal);
    }

    diagonalStrings.splice(0, 1);
    let middleIndex = Math.floor(diagonalStrings.length / 2);
    if (middleIndex + 1 < diagonalStrings.length) {
        diagonalStrings.splice(middleIndex, 1);
    }

    return searchWordInStrings(diagonalStrings);
}

function searchForWord(input) {
    searchHorizontaly(input);
    searchVertically(input);
    searchDiagonally(input);

    return count;
}

console.log(searchForWord(input));