// https://www.hackerrank.com/challenges/frequency-queries/problem
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

const operationEnum = {
    INSERT: 1,
    DELETE: 2,
    CHECK: 3
}

// Complete the freqQuery function below.
function freqQuery(queries) {
  const freqMap = new Map();
  const freqCountMap = new Map();
  const resultArray = [];
  queries.forEach(([operationType, value]) => {
      if (operationType === operationEnum.CHECK) {
        resultArray.push(freqCountMap.get(value) ? 1 : 0);
      } else if (operationType === operationEnum.INSERT) {
        const currentFreqCount = freqMap.get(value) || 0;
        const freqCount = freqCountMap.get(currentFreqCount) || 0;
        if (freqCount > 0) {
            freqCountMap.set(currentFreqCount, freqCount - 1);
        }
        const nextFreqCount = currentFreqCount + 1;
        freqCountMap.set(nextFreqCount, (freqCountMap.get(nextFreqCount) || 0) + 1);
        freqMap.set(value, currentFreqCount + 1);
      } else if (operationType === operationEnum.DELETE) {

        const currentFreqCount = freqMap.get(value) || 0;
        const currentReverseMapValue = freqCountMap.get(currentFreqCount) || 0;
        if (currentReverseMapValue > 0) {
            freqCountMap.set(currentFreqCount, currentReverseMapValue - 1);
            freqCountMap.set(currentFreqCount - 1, (freqCountMap.get(currentFreqCount - 1) || 0) + 1);
        }
        if (currentFreqCount > 0) {
            freqMap.set(value, currentFreqCount - 1);
        }
        }
  });

  return resultArray
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    let queries = Array(q);

    for (let i = 0; i < q; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const ans = freqQuery(queries);

    ws.write(ans.join('\n') + '\n');

    ws.end();
}
