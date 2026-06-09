var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currentSum = 0;

    for (let num of nums) {
        currentSum += num;
        maxSum = Math.max(maxSum, currentSum);
        currentSum = Math.max(currentSum, 0);
    }
    return maxSum;
}

nums = [5,4,-1,7,8];
console.log(maxSubArray(nums));