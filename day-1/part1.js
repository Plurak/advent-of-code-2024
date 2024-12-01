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

left.sort((a, b) => a - b);
right.sort((a, b) => a - b);

function compare(left, right) {
    let result = 0;

    left.forEach((numLeft, i) => {
        result += Math.abs(numLeft - right[i]);
    });

    return result;
}

console.log(compare(left, right));