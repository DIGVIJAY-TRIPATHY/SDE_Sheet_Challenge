function rotate(matrix) {
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] =
            [matrix[j][i], matrix[i][j]];
        }
    }

    for (let row of matrix) {
        row.reverse();
    }

    return matrix;
}

matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]

console.log(rotate(matrix));