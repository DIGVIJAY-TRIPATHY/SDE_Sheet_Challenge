function setZeroes(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let firstColZero = false;
    console.log("Initial Matrix:");
    console.table(matrix);
    
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            firstColZero = true;
        }

        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                console.log(`Found 0 at (${i}, ${j})`);

                matrix[i][0] = 0; // mark row
                matrix[0][j] = 0; // mark column
            }
        }
    }

    console.log("After Marking:");
    console.table(matrix);
    console.log("firstColZero =", firstColZero);

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    console.log("After Filling:");
    console.table(matrix);

    if (matrix[0][0] === 0) {
        console.log("Zeroing First Row");

        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }

    // Step 4: Handle first column
    if (firstColZero) {
        console.log("Zeroing First Column");

        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }

    console.log("Final Matrix:");
    console.table(matrix);

    return matrix;
}

// Test Case
let matrix = [
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 1, 0],
    [1, 1, 1, 1]
];

setZeroes(matrix);