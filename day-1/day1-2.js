let lists = 
`3   4
4   3
2   5
1   3
3   9
3   3`;

let left = [];
let right = [];

lists.split("\n").forEach((line) => {
    line = line.split(/\s+/);

    left.push(Number(line[0]));
    right.push(Number(line[1]));
});

function calcSimilarity(left, right) {
    let result = 0;
    for (let i = 0; i < left.length; i++) {
        let count = 0;
        for (let j = 0; j < left.length; j++) {
            if (left[i] === right[j]) {
                count++;
            }
        }
        result += left[i] * count;
    }
    return result;
}

console.log(calcSimilarity(left, right));
