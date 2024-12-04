const fs = require('fs');
const data = fs.readFileSync('./input/test-data.txt', 'utf-8');

let input = [];
let wordToFind = [
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

        if (input[i].includes(wordToFind[0])) {
            // console.log(`Das Wort "${wordToFind[0]}" ist enthalten.`);
            count++;
        }

        if (input[i].includes(wordToFind[1])) {
            // console.log(`Das Wort "${wordToFind[1]}" ist enthalten.`);
            count++;
        }
    }
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

//! This function is not working yet
function searchDiagonally(input) {
    let diagonalStrings = [];

    for (let i = 0; i < input.length; i++) {
        let downDiagonal = "";
        let upDiagonal = "";
    
        for (let j = 0; j < input[0].length; j++) {
            if (input[i + j] !== undefined && input[i + j][j] !== undefined) {
                downDiagonal += input[i + j][j];
            }
            // if (input[i - j] !== undefined && input[i - j][j] !== undefined) {
            //     upDiagonal += input[i - j][j];
            // }
        }
    
        diagonalStrings.push(downDiagonal);
        diagonalStrings.push(upDiagonal);

        // console.log("downDiagonal: " + downDiagonal + " upDiagonal: " + upDiagonal);
        
    }

    for (let i = 0; i < input.length; i++) {
        let downDiagonal = "";
        let upDiagonal = "";
    
        for (let j = 0; j < input[0].length; j++) {
            if (input[i + j] !== undefined && input[i + j][input[0].length - 1 - j] !== undefined) {
                downDiagonal += input[i + j][input[0].length - 1 - j];
            }
            // if (input[i - j] !== undefined && input[i - j][input[0].length - 1 - j] !== undefined) {
            //     upDiagonal += input[i - j][input[0].length - 1 - j];
            // }
        }
    
        diagonalStrings.push(downDiagonal);
        diagonalStrings.push(upDiagonal);
    }


    
    searchWordInStrings(diagonalStrings);

    return;
}

function searchForWord(input) {
    searchHorizontaly(input);
    searchVertically(input);
    // searchDiagonally(input);

    return count;
}

console.log("Das Ergebnis ist: " + searchForWord(input));
