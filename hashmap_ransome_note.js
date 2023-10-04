// https://www.hackerrank.com/challenges/ctci-ransom-note/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
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
 * Complete the 'checkMagazine' function below.
 *
 * The function accepts following parameters:
 *  1. STRING_ARRAY magazine
 *  2. STRING_ARRAY note
 */

function checkMagazine(magazine, note) {
    // Write your code here
    const magazineMap = new Map();
    magazine.forEach(word => { magazineMap.set(word, (magazineMap.get(word) || 0) + 1); });
    const noteWords = note;
    // console.log(JSON.stringify(magazineMap));
    // console.log(noteWords);
    for (let i = 0; i < noteWords.length; i ++) {
        // console.log('magazineMap.get(noteWords[i]):', magazineMap.get(noteWords[i]));
        if (!magazineMap.get(noteWords[i])) { console.log('No'); return }
        magazineMap.set(noteWords[i], (magazineMap.get(noteWords[i])) - 1)
    }

    console.log('Yes');
}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const m = parseInt(firstMultipleInput[0], 10);

    const n = parseInt(firstMultipleInput[1], 10);

    const magazine = readLine().replace(/\s+$/g, '').split(' ');

    const note = readLine().replace(/\s+$/g, '').split(' ');

    checkMagazine(magazine, note);
}
