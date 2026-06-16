function reversePairs(nums) {
    let count = 0;

    function mergeSort(left, right) {
        if (left >= right) return;

        const mid = Math.floor((left + right) / 2);

        mergeSort(left, mid);
        mergeSort(mid + 1, right);

        // Count reverse pairs
        let j = mid + 1;

        for (let i = left; i <= mid; i++) {
            while (j <= right && nums[i] > 2 * nums[j]) {
                j++;
            }
            count += j - (mid + 1);
        }

        // Merge step
        const temp = [];
        let p1 = left;
        let p2 = mid + 1;

        while (p1 <= mid && p2 <= right) {
            if (nums[p1] <= nums[p2]) {
                temp.push(nums[p1++]);
            } else {
                temp.push(nums[p2++]);
            }
        }

        while (p1 <= mid) temp.push(nums[p1++]);
        while (p2 <= right) temp.push(nums[p2++]);

        for (let i = left; i <= right; i++) {
            nums[i] = temp[i - left];
        }
    }

    mergeSort(0, nums.length - 1);

    return count;
}

console.log(reversePairs([1,3,2,3,1]));
console.log(reversePairs([2,4,3,5,1]));
