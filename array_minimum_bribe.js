// https://www.hackerrank.com/challenges/new-year-chaos/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
'use strict';

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
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
    // Write your code here
    let bribeCounter = 0;
    let condition = true;
    let arrayCounter = 0;
    const baseArray = q.map((v, i) => i + 1);
    while (condition) {
        if (arrayCounter === q.length) {
            arrayCounter = 0;
            condition = false;
            continue;
        }

        // Did not bribe
        if (q[arrayCounter] === baseArray[arrayCounter]) {
            arrayCounter++;
            continue;
        }

        // Bribed one time
        if (q[arrayCounter] === baseArray[arrayCounter + 1]) {
            const indexofElement = arrayCounter + 1;
            bribeMyLeft(baseArray, indexofElement);
            bribeCounter++;
            arrayCounter++;
            continue;
            // Bribed two times
        } else if (q[arrayCounter] === baseArray[arrayCounter + 2]) {
            const indexofElement = arrayCounter + 2;
            bribeMyLeft(baseArray, indexofElement);
            bribeMyLeft(baseArray, indexofElement - 1);
            bribeCounter += 2;
            arrayCounter++;
            continue;
        } // Bribed more than two times
        else {
            console.log('Too chaotic');
            return;
        }
    }
    console.log(bribeCounter);
    return;
}

function bribeMyLeft(q, i) {
    [q[i], q[i - 1]] = [q[i - 1], q[i]];
}

function main() {
    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const q = readLine().replace(/\s+$/g, '').split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
