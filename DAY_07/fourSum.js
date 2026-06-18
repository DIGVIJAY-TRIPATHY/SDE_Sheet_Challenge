function fourSum(nums, target) {
    const result = [];
    const set = new Set();

    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length - 2; j++) {
            for (let k = j + 1; k < nums.length - 1; k++) {
                for (let l = k + 1; l < nums.length; l++) {
                    if (nums[i] + nums[j] + nums[k] + nums[l] === target) {
                        const quad = [nums[i], nums[j], nums[k], nums[l]].sort((a,b)=>a-b);
                        const key = quad.join(",");
                        if (!set.has(key)) {
                            set.add(key);
                            result.push(quad);
                        }
                    }
                }
            }
        }
    }

    return result;
}

console.log(fourSum([1,0,-1,0,-2,2], 0));
console.log(fourSum([2,2,2,2,2], 8));
