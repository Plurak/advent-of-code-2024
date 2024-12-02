let data = 
`7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

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

const countSafe = reports.filter(isSafe).length;

console.log(countSafe);