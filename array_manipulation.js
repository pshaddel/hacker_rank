
// https://www.hackerrank.com/challenges/crush/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

// function arrayManipulation(n, queries) {
//     const arrayValueMap = new Map();
//     let max = -Infinity;
//     // for (let i = 1; i <= n; i++) { arrayValueMap.set(i, 0); };
//     for (const query of queries) {
//         const [startIndex, endIndex, value] = query;
//         for (let index = startIndex; index <= endIndex; index++) {
//             const previousValue = arrayValueMap.get(index) || 0;
//             const newValue = previousValue + value;
//             if (newValue > max) {
//                 max = newValue;
//             }
//             arrayValueMap.set(index, newValue)
//         }
//     }

//     return max;
// }

function arrayManipulation(n, queries) {
    let max = -Infinity;
    let arr = [];
    arr.length = n;
    arr.fill(0);
    for (const [startIndex, endIndex, value] of queries) {
        arr[startIndex -1] += value;
        arr[endIndex] -= value;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
        sum += arr[i];
        if (sum > max) {
            max = sum;
        }
        }
    }
    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    let queries = Array(m);

    for (let i = 0; i < m; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const result = arrayManipulation(n, queries);

    ws.write(result + '\n');

    ws.end();
}
