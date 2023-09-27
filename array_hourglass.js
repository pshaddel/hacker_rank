function hourglassSum(arr) {
    const HOURGLASS_SIZE = 3;
    let maxHourglassAmount = -Infinity;
    const arr_size = arr.length;
    for (let i = 0; i <= arr_size - HOURGLASS_SIZE; i++) {
        for (let j = 0; j <= arr_size - HOURGLASS_SIZE; j++) {
            const hourglassAmount = hourglassSumCalculator(arr, i, j);
            if (hourglassAmount > maxHourglassAmount) {
                maxHourglassAmount = hourglassAmount;
            }
            hourglassVisualizer(arr, i, j);
        }
    }
    return maxHourglassAmount;
}

function hourglassSumCalculator(arr, i, j) {
    return arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
}
function hourglassVisualizer(arr, i, j) {
    console.log(` ${arr[i][j]} ${arr[i][j + 1]} ${arr[i][j + 2]} \n * ${arr[i + 1][j + 1]} * \n ${arr[i + 2][j]} ${arr[i + 2][j + 1]} ${arr[i + 2][j + 2]}\n-----`);
}

hourglassSum([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
])