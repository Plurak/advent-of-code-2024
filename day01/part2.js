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

    left.forEach(numLeft => {
        let count = 0;
        right.filter(numRight => numRight === numLeft).forEach(() => count++);
        result += numLeft * count;
    });

    return result;
}

console.log(calcSimilarity(left, right));