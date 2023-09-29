// https://www.hackerrank.com/challenges/minimum-swaps-2/problem

function minimumSwaps(arr) {
    let condition = true;
    let sortCounter = 0;
    let numberOfSwaps = 0
    while (condition && sortCounter < arr.length) {
        if (arr[sortCounter] === sortCounter + 1) {
            sortCounter++;
            continue;
        }
        const indexOfRightElementForPosition = arr.findIndex(elem => elem === sortCounter + 1);
        [arr[indexOfRightElementForPosition], arr[sortCounter]] = [arr[sortCounter], arr[indexOfRightElementForPosition]];
    numberOfSwaps++;
    sortCounter++;
    }
    return numberOfSwaps;
  }