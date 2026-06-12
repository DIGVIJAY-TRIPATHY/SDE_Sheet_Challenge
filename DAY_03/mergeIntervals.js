function merge(intervals) {
    // Sort by starting time
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [];

    for (let interval of intervals) {
        // If result is empty or no overlap
        if (
            result.length === 0 ||
            result[result.length - 1][1] < interval[0]
        ) {
            result.push(interval);
        } else {
            // Merge overlapping intervals
            result[result.length - 1][1] = Math.max(
                result[result.length - 1][1],
                interval[1]
            );
        }
    }

    return result;
}

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
// Output: [[1,6],[8,10],[15,18]]

console.log(merge([[1,4],[4,5]]));
// Output: [[1,5]]

console.log(merge([[4,7],[1,4]]));
// Output: [[1,7]]