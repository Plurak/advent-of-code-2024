const data = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`;

const matches = data.match(/mul\((\d+),(\d+)\)/g);

function addAll(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

const results = matches.map(func => {
    const args = func.match(/\d+/g).map(Number);
    return (args[0] * args[1]);
});

console.log(addAll(results));