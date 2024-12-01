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

console.log(left, right);

left.sort((a, b) => a - b);
right.sort((a, b) => a - b);

console.log(left, right);

function compare(left, right) {
    let result = 0;

    for (let i = 0; i < left.length; i++) {
        let distance = left[i] - right[i];
        if (distance < 0) {
            distance *= -1;
        }
        result += distance;
    }
    return result;
}

console.log(compare(left, right));
